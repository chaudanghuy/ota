from django.db import models

# Create your models here.

class Status(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField()

    def __str__(self):
        return self.name
    
class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField()
    description = models.TextField()
    seo_meta_title = models.CharField(max_length=100)
    seo_meta_keywords = models.CharField(max_length=100)
    image = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    
class Role (models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Permission(models.Model):
    name = models.CharField(max_length=100)
    guard_name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class RoleHasPermission(models.Model):
    role = models.ForeignKey(Role, on_delete=models.CASCADE)
    permission = models.ForeignKey(Permission, on_delete=models.CASCADE)


class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    avatar = models.CharField(max_length=100, default="avatar.png")
    password = models.TextField()
    role = models.ForeignKey(Role, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name    
    
class Token(models.Model):
    token = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    expires_at = models.DateTimeField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    is_used = models.BooleanField(default=False)    

class Article(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    status = models.ForeignKey(Status, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='images/', null=True, blank=True)
    images = models.ManyToManyField('Image', related_name='articles', blank=True)
    seo_meta_title = models.CharField(max_length=100)
    seo_meta_keywords = models.CharField(max_length=100)
    seo_meta_description = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class Image(models.Model):
    image = models.ImageField(upload_to='images/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)        

    
class ContactMessage(models.Model):
    title = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    content = models.TextField()
    send_date = models.DateTimeField(auto_now_add=True)
    is_seen = models.BooleanField(default=False)
    is_reply = models.BooleanField(default=False)

    def __str__(self):
        return self.title

class Page(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField()
    image = models.CharField(max_length=100)
    seo_meta_title = models.CharField(max_length=100)
    seo_meta_description = models.CharField(max_length=100)
    seo_meta_keywords = models.CharField(max_length=100)
    is_visibility = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)         

    def __str__(self):
        return self.title
    
class Setting(models.Model):
    site_timezone = models.CharField(max_length=100)
    site_logo = models.CharField(max_length=100)
    site_favicon = models.CharField(max_length=100)
    site_name = models.CharField(max_length=100)
    site_description = models.TextField()
    site_keywords = models.TextField()
    site_meta_title = models.CharField(max_length=100)
    site_meta_description = models.CharField(max_length=100)
    site_meta_keywords = models.CharField(max_length=100)
    site_meta_author = models.CharField(max_length=100)
    company_name = models.CharField(max_length=100)
    company_address = models.CharField(max_length=100)
    company_phone = models.CharField(max_length=100)
    company_email = models.CharField(max_length=100)
    company_logo = models.CharField(max_length=100)
    email_setting_driver = models.TextField()
    email_setting_host = models.CharField(max_length=100)
    email_setting_port = models.CharField(max_length=100)
    email_setting_encryption = models.CharField(max_length=100)
    email_setting_username = models.CharField(max_length=100)
    email_setting_password = models.CharField(max_length=100)
    seo_setting_title = models.CharField(max_length=100)
    seo_setting_description = models.CharField(max_length=100)
    seo_setting_keywords = models.CharField(max_length=100)
    seo_setting_author = models.CharField(max_length=100)
    seo_setting_image = models.CharField(max_length=100)
    google_analytics_id = models.CharField(max_length=100)
    google_analytics_script = models.TextField()
    google_analytics_enable = models.BooleanField(default=True)
    recaptcha_key = models.CharField(max_length=100)
    recaptcha_secret = models.CharField(max_length=100)
    recaptcha_enable = models.BooleanField(default=True)
    social_facebook = models.CharField(max_length=100)
    social_twitter = models.CharField(max_length=100)
    social_instagram = models.CharField(max_length=100)
    social_youtube = models.CharField(max_length=100)
    social_linkedin = models.CharField(max_length=100)
    social_pinterest = models.CharField(max_length=100)    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)          

    def __str__(self):
        return self.site_name