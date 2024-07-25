from rest_framework import serializers
from .models import Status, Category, Role, Permission, RoleHasPermission, User, Article, Token, Image, ContactMessage, Page, Setting

class StatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Status
        fields = '__all__'

class RoleSeriallizer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = '__all__'        

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class TokenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Token
        fields = '__all__'       

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = '__all__'              

    def create(self, validated_data):
        images_data = validated_data.pop('images', [])
        article = Article.objects.create(**validated_data)
        for image_data in images_data:
            image = Image.objects.create(**image_data)
            article.images.add(image)
        return article

class ArticleSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True, required=False)

    class Meta:
        model = Article
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = '__all__'

class PageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Page
        fields = '__all__'

class SettingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Setting
        fields = '__all__'                                                           