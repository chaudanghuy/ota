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

from .models import Status, Category, Role, Permission, RoleHasPermission, User, Article, Token, Page, Setting, ContactMessage, SliderImage
from .forms import ArticleForm
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
        address = data.get('address')
        area = data.get('area')
        completed_year = data.get('completed_year')
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
            address=address,
            area=area,
            completed_year=completed_year,
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
    
@csrf_exempt
@api_view(['GET', 'PUT', 'DELETE'])    
@parser_classes([MultiPartParser, FormParser])
def article_detail(request, pk):
    try:
        article = Article.objects.get(pk=pk)
    except Article.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ArticleSerializer(article)
        return Response(serializer.data)
    elif request.method == 'PUT':
        data = request.data.copy()  # Create a copy to modify
        image = request.FILES.get('image') if 'image' in request.FILES else None
        
        # Update post details
        article.title = data.get('title', article.title)
        article.slug = data.get('slug', article.slug)
        article.address = data.get('address', article.address)
        article.area = data.get('area', article.area)
        article.completed_year = data.get('completed_year', article.completed_year)
        article.content = data.get('content', article.content)
        category_id = data.get('category', article.category_id)
        article.category = Category.objects.get(id=category_id) if category_id else None        
        status_id = data.get('status', article.status_id)
        article.status = Status.objects.get(id=status_id) if status_id else None
        article.seo_meta_title = data.get('seo_meta_title', article.seo_meta_title)
        article.seo_meta_keywords = data.get('seo_meta_keywords', article.seo_meta_keywords)
        article.seo_meta_description = data.get('seo_meta_description', article.seo_meta_description)

        if image:
            article.image = image

        article.save()

        # Handle multiple images
        images = request.FILES.getlist('images')        
        if images:
            article.images.clear()  # Clear existing images if needed
            for img in images:
                image_instance = Image(image=img)
                image_instance.save()
                article.images.add(image_instance)   

        serializer = ArticleSerializer(article)
        return Response(serializer.data)        
    elif request.method == 'DELETE':
        article.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
@api_view(['GET', 'POST'])    
def article_detail_image(request, pk):
    try:
        article = Article.objects.get(pk=pk)
    except Article.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)            

    if request.method == 'GET':
        images = article.images.all()
        serializer = ImageSerializer(images, many=True)        
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        files = request.FILES.getlist('images')
        for file in files:
            article.images.add(file)
        return Response({'message': 'Images uploaded successfully'}, status=status.HTTP_201_CREATED) 

@api_view(['DELETE'])
def article_detail_image_delete(request, pk):
    try:
        image = Image.objects.get(pk=pk)
    except Image.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    image.delete()
    return Response({'message': 'Image deleted successfully'}, status=status.HTTP_204_NO_CONTENT)     

#   
# Projects    
#
@api_view(['GET'])
def project_list(request, status):
    status = Status.objects.filter(name=status).first()
    if status is not None:
        projects = Article.objects.filter(status=status)
        serializer = ArticleSerializer(projects, many=True)
        return Response(serializer.data)

    projects = Article.objects.all()
    serializer = ArticleSerializer(projects, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def project_detail(request, slug):
    try:
        project = Article.objects.get(slug=slug)
    except Article.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = ArticleSerializer(project)
    return Response(serializer.data)


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

@csrf_exempt
@api_view(['POST'])
def send_contact_message(request):
    serializer = ContactMessageSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#
# Page
#     
@api_view(['GET', 'POST'])
@parser_classes([MultiPartParser, FormParser])
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
@parser_classes([MultiPartParser, FormParser])
def page_detail(request, pk):
    try:
        page = Page.objects.get(pk=pk)
    except Page.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = PageSerializer(page)
        return Response(serializer.data)
    elif request.method == 'PUT':
        data = request.data.copy()
        image = request.FILES.get('image') if 'image' in request.FILES else None

        is_visibility = data.get('is_visibility', page.is_visibility)
        if is_visibility == 'true':
            data['is_visibility'] = True
        elif is_visibility == 'false':
            data['is_visibility'] = False

        page.title = data.get('title', page.title)
        page.slug = data.get('slug', page.slug)
        page.is_visibility = data.get('is_visibility', page.is_visibility)
        page.seo_meta_title = data.get('seo_meta_title', page.seo_meta_title)
        page.seo_meta_keywords = data.get('seo_meta_keywords', page.seo_meta_keywords)
        page.seo_meta_description = data.get('seo_meta_description', page.seo_meta_description)

        if image:
            page.image = image

        page.save()

        serializer = PageSerializer(page)
        return Response(serializer.data)
    elif request.method == 'DELETE':
        page.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
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

@api_view(['GET', 'POST', 'DELETE'])
@parser_classes([MultiPartParser, FormParser])
def setting_detail(request):
    if request.method == 'GET':
        setting = Setting.objects.first()
        serializer = SettingSerializer(setting)
        return Response(serializer.data)
    elif request.method == 'POST':
        setting = Setting.objects.first()
        if setting is None:
            serializer = SettingSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            data = request.data

            # Handling image fields separately
            if 'site_logo' in request.FILES:
                setting.site_logo = request.FILES['site_logo']
            if 'site_favicon' in request.FILES:
                setting.site_favicon = request.FILES['site_favicon']
            if 'company_logo' in request.FILES:
                setting.company_logo = request.FILES['company_logo']
            if 'seo_setting_image' in request.FILES:
                setting.seo_setting_image = request.FILES['seo_setting_image']

            # Handling other fields
            setting.site_timezone = data.get('site_timezone', setting.site_timezone)
            setting.site_name = data.get('site_name', setting.site_name)
            setting.site_description = data.get('site_description', setting.site_description)
            setting.site_keywords = data.get('site_keywords', setting.site_keywords)
            setting.site_meta_title = data.get('site_meta_title', setting.site_meta_title)
            setting.site_meta_description = data.get('site_meta_description', setting.site_meta_description)
            setting.site_meta_keywords = data.get('site_meta_keywords', setting.site_meta_keywords)
            setting.site_meta_author = data.get('site_meta_author', setting.site_meta_author)
            setting.company_name = data.get('company_name', setting.company_name)
            setting.company_address = data.get('company_address', setting.company_address)
            setting.company_phone = data.get('company_phone', setting.company_phone)
            setting.company_email = data.get('company_email', setting.company_email)
            setting.email_setting_driver = data.get('email_setting_driver', setting.email_setting_driver)
            setting.email_setting_host = data.get('email_setting_host', setting.email_setting_host)
            setting.email_setting_port = data.get('email_setting_port', setting.email_setting_port)
            setting.email_setting_encryption = data.get('email_setting_encryption', setting.email_setting_encryption)
            setting.email_setting_username = data.get('email_setting_username', setting.email_setting_username)
            setting.email_setting_password = data.get('email_setting_password', setting.email_setting_password)
            setting.seo_setting_title = data.get('seo_setting_title', setting.seo_setting_title)
            setting.seo_setting_description = data.get('seo_setting_description', setting.seo_setting_description)
            setting.seo_setting_keywords = data.get('seo_setting_keywords', setting.seo_setting_keywords)
            setting.seo_setting_author = data.get('seo_setting_author', setting.seo_setting_author)
            setting.google_analytics_id = data.get('google_analytics_id', setting.google_analytics_id)
            setting.google_analytics_script = data.get('google_analytics_script', setting.google_analytics_script)
            google_analytics_enable = data.get('google_analytics_enable', setting.google_analytics_enable)
            setting.google_analytics_enable = True if google_analytics_enable == 'true' else False
            setting.recaptcha_key = data.get('recaptcha_key', setting.recaptcha_key)
            setting.recaptcha_secret = data.get('recaptcha_secret', setting.recaptcha_secret)
            recaptcha_enable = data.get('recaptcha_enable', setting.recaptcha_enable)
            setting.recaptcha_enable = True if recaptcha_enable == 'true' else False
            setting.social_facebook = data.get('social_facebook', setting.social_facebook)
            setting.social_twitter = data.get('social_twitter', setting.social_twitter)
            setting.social_instagram = data.get('social_instagram', setting.social_instagram)
            setting.social_youtube = data.get('social_youtube', setting.social_youtube)
            setting.social_linkedin = data.get('social_linkedin', setting.social_linkedin)
            setting.social_pinterest = data.get('social_pinterest', setting.social_pinterest)

            # Save the updated settings
            setting.save()
            serializer = SettingSerializer(setting)
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
        

class SliderImageUploadView(APIView):    
    def get(self, request, *args, **kwargs):
        images = SliderImage.objects.all()
        serializer = SliderImageSerializer(images, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request, *args, **kwargs):
        files = request.FILES.getlist('images')
        for file in files:
            SliderImage.objects.create(image=file)
        return Response({'message': 'Images uploaded successfully'}, status=status.HTTP_201_CREATED)  
    
class SliderImageDeleteView(APIView):
    def delete(self, request, pk, *args, **kwargs):
        try:
            image = SliderImage.objects.get(pk=pk)
            image.delete()
            return Response({'message': 'Image deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
        except SliderImage.DoesNotExist:
            return Response({'error': 'Image not found'}, status=status.HTTP_404_NOT_FOUND)    