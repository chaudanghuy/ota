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
    path("article/images/<int:pk>", views.article_detail_image),
    path("article/images/delete/<int:pk>", views.article_detail_image_delete),

    # Projects
    path("projects/<str:slug>", views.project_list),
    path("project/<str:slug>", views.project_detail),

    # Category
    path("categories", views.category_list),
    path("categories/<int:pk>", views.category_detail),

    # Pages
    path("pages", views.page_list),
    path("pages/<int:pk>", views.page_detail),

    # Contacts
    path("contacts", views.contact_message_list),
    path("contacts/<int:pk>", views.contact_message_detail),

    # Send contact
    path("contact", views.send_contact_message),

    # Setting
    path("setting", views.setting_detail),

    # Slider
    path("slider", views.SliderImageUploadView.as_view(), name="slider-upload"),
    path('slider/<int:pk>', views.SliderImageDeleteView.as_view(), name='slider-image-delete'),

    # Auth
    path("login", views.LoginView.as_view(), name="login"),
    path("register", views.RegistrationView.as_view(), name="register")
]