from django.shortcuts import render,redirect
from django.contrib.auth.decorators import login_required
from . import forms
from .models import List
from django.urls import reverse
from django.utils.text import slugify
# Create your views here.

@login_required(login_url="/accounts/login/")
def Create(request):
    if(request.method == "POST"):
        form = forms.Anime_list(request.POST,request.FILES)
        if (form.is_valid()):
            instance = form.save(commit=False)
            instance.Author = request.user
            instance.slug = slugify(instance.Author) + ('-')+slugify(instance.title)
            instance.save()
            return redirect(reverse('users:anime-list'))
    else:
        form = forms.Anime_list()
    
    return render(request,"users/create.html",{"form":form})

@login_required(login_url="/accounts/login/")
def AnimeList(request):
    logged_in = request.user
    anime_list = List.objects.all()
    anime_list = List.objects.filter(Author = logged_in)
    return render(request,"users/anime_list.html",{'anime_list': anime_list})

def Details(request,slug):
    anime = List.objects.get(slug = slug)
    return render(request,'users/animes.html',{'anime':anime})
    
def Delete(request,pk):
    data= List.objects.get(pk=pk)
    if(request.method =="POST"):
        data.delete()
        return redirect(reverse('users:anime-list'))
    return render(request, 'users/delete.html', {'anime': data})