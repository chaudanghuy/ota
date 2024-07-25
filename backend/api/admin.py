from django.contrib import admin
from api.models import Status, Category, Role, Permission, RoleHasPermission, User, Article, Token

# Register your models here.
admin.site.register(Role);
admin.site.register(Category);
admin.site.register(Status);