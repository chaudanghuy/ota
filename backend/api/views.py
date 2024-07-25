from django.shortcuts import render
from django.contrib.auth.hashers import make_password
from rest_framework.response import Response
from rest_framework.decorators import api_view, parser_classes
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import MultiPartParser, FormParser

from .models import Status, Category, Role, Permission, RoleHasPermission, User, Article, Token, Page, Setting, ContactMessage
from .serializers import *
from datetime import datetime, timedelta
import hashlib
import uuid
from django.utils import timezone

SALT = "i9gkKmP(D=-ZV138A0!_Jd4avy81U7b82*#7hp+O!dO*i/Nm_PiLgR."
URL = "http://localhost:3000"

#
# Authentication
#
class LoginView(APIView):
    def post(self, request, format=None):
        email = request.data['email'];
        password = request.data['password'];
        hashed_password = make_password(password=password, salt=SALT)
        user = User.objects.get(email=email)

        if user is None or user.password != hashed_password:
            return Response({
                "success": False,
                "message": "Invalid Login Credentials"
            }, status=status.HTTP_200_OK),            
        else:
            token = Token.objects.get_or_create(
                token=str(uuid.uuid4()),
                expires_at=timezone.now() + timedelta(days=1),
                user=user
            ) 
            return Response(
                {
                    "token": token[0].token,
                    "user": user.id,
                    "success": True,
                    "message": "You are now logged in"
                },
                status=status.HTTP_200_OK
            )
        
class RegistrationView(APIView):
    def post(self, request, format=None):
        request.data['password'] = make_password(
            password=request.data['password'], salt=SALT
        )

        print(request.data)
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {
                    "success": True,
                    "message": "User created successfully"
                },
                status=status.HTTP_200_OK
            )
        else:
            error_msg = ""
            for key in serializer.errors:
                error_msg += serializer.errors[key][0]
            
            return Response(
                {
                    "success": False,
                    "message": error_msg
                },
                status=status.HTTP_200_OK
            )

#
# Articlle
#
@csrf_exempt
@api_view(['GET', 'POST'])
@parser_classes([MultiPartParser, FormParser])
def article_list(request):
    if request.method == 'GET':
        articles = Article.objects.all()
        serializer = ArticleSerializer(articles, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        data = request.data

        # Parse basic fields
        title = data.get('title')
        slug = data.get('slug')
        user_id = data.get('user')
        content = data.get('content')
        category_id = data.get('category')
        status_id = data.get('status')
        seo_meta_title = data.get('seo_meta_title')
        seo_meta_keywords = data.get('seo_meta_keywords')
        seo_meta_description = data.get('seo_meta_description')

        # Fetch related objects
        user = User.objects.get(id=user_id)
        category = Category.objects.get(id=category_id) if category_id else None
        status = Status.objects.get(id=status_id) if status_id else None

        # Handle the main image
        image = request.FILES.get('image') if 'image' in request.FILES else None
        
        # Create the article object
        article = Article(
            title=title,
            slug=slug,
            user=user,
            content=content,
            category=category,
            status=status,
            image=image,
            seo_meta_title=seo_meta_title,
            seo_meta_keywords=seo_meta_keywords,
            seo_meta_description=seo_meta_description
        )
        article.save()

        # Handle multiple images
        images = request.FILES.getlist('images')           
        for img in images:                        
            image_instance = Image(image=img)
            image_instance.save()
            article.images.add(image_instance)            


        serializer = ArticleSerializer(article)
        return Response(serializer.data, status=201)
            
    return Response(serializer.errors, status=400)
    
@api_view(['GET', 'PUT', 'DELETE'])    
def article_detail(request, pk):
    try:
        article = Article.objects.get(pk=pk)
    except Article.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ArticleSerializer(article)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = ArticleSerializer(article, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        article.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
# 
# Category
#
@api_view(['GET', 'POST'])
def category_list(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def category_detail(request, pk):
    try:
        category = Category.objects.get(pk=pk)
    except Category.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CategorySerializer(category)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = CategorySerializer(category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)       
    
#
# Contact Message
#
@api_view(['GET', 'POST'])
def contact_message_list(request):
    if request.method == 'GET':
        messages = ContactMessage.objects.all()
        serializer = ContactMessageSerializer(messages, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ContactMessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET', 'PUT', 'DELETE'])
def contact_message_detail(request, pk):
    try:
        message = ContactMessage.objects.get(pk=pk)
    except ContactMessage.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ContactMessageSerializer(message)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = ContactMessageSerializer(message, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)                
    
#
# Page
#     
@api_view(['GET', 'POST'])
def page_list(request):
    if request.method == 'GET':
        pages = Page.objects.all()
        serializer = PageSerializer(pages, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = PageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def page_detail(request, pk):
    try:
        page = Page.objects.get(pk=pk)
    except Page.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = PageSerializer(page)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = PageSerializer(page, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
#
# Setting
#     
@api_view(['GET', 'POST'])
def setting_list(request):
    if request.method == 'GET':
        settings = Setting.objects.all()
        serializer = SettingSerializer(settings, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = SettingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def setting_detail(request, pk):
    try:
        setting = Setting.objects.get(pk=pk)
    except Setting.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = SettingSerializer(setting)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = SettingSerializer(setting, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)    

#
# User
# 
@api_view(['GET', 'POST'])
def user_list(request):
    if request.method == 'GET':
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def user_detail(request, pk):
    try:
        user = User.objects.get(pk=pk)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = UserSerializer(user)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)        


#
# Status
#
@api_view(['GET', 'POST'])
def status_list(request):
    if request.method == 'GET':
        data = Status.objects.all()

        serializer = StatusSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = StatusSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)    
    
@api_view(['PUT', 'DELETE'])
def status_detail(request, pk):
    try:
        status = Status.objects.get(pk=pk)
    except Status.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'PUT':
        serializer = StatusSerializer(status, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        status.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
#
# Role
#    
@api_view(['GET', 'POST'])    
def role_list(request):
    if request.method == 'GET':
        data = Role.objects.all()

        serializer = RoleSeriallizer(data, context={'request': request}, many=True)

        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = RoleSeriallizer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

    