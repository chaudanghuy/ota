from django.urls import path

from . import views

urlpatterns = [
    # Status
    path("status", views.status_list),

    # Role
    path("roles", views.role_list),

    # Article
    path("articles", views.article_list),
    path("articles/<int:pk>", views.article_detail),

    # Category
    path("categories", views.category_list),
    path("categories/<int:pk>", views.category_detail),

    # Auth
    path("login", views.LoginView.as_view(), name="login"),
    path("register", views.RegistrationView.as_view(), name="register")
]