from django.contrib import admin
from django.urls import path,include
from . import views

app_name = "users"

urlpatterns = [
    path("create/",views.Create,name="create"),
    path("anime-list/",views.AnimeList,name="anime-list"),
    path("<slug:slug>/",views.Details,name="anime-details"),
    path("delete/<int:pk>",views.Delete,name="delete-data")
]