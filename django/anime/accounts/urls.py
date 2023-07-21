from django.contrib import admin
from django.urls import path,include
from . import views

app_name = "accounts"

urlpatterns = [
    path("login/",views.Login,name="login"),
    path("signup/",views.Signup,name="signup"),
    path("logout/",views.Logout,name="logout"),
]