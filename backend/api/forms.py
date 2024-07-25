from django import forms
from .models import Article, Image

class ArticleForm(forms.ModelForm):
    class Meta:
        model = Article
        fields = '__all__'            
