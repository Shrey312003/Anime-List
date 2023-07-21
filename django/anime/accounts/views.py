from django.shortcuts import render,redirect
from . import forms
from django.contrib.auth.forms import UserCreationForm,AuthenticationForm
from django.contrib.auth import login,logout

# Create your views here.

# def Login(request) :
#     return render(request, "accounts/Login.html")

def Signup(request):
    if(request.method == "POST"):
        form = forms.UserCreationForm(request.POST)

        if(form.is_valid()):
            form.save()
            return redirect('accounts:login')
    else:
        form = forms.UserCreationForm()

    return render(request, "accounts/Signup.html",{"form" : form})

def Login(request):
    if(request.method == "POST"):
        form = AuthenticationForm(data = request.POST)

        if(form.is_valid()):
            user = form.get_user()
            login(request,user)

            if 'next' in request.POST:
                return redirect(request.POST.get('next'))
            else:
                return redirect("/")
    else:
        form = AuthenticationForm()

    return render(request, "accounts/Login.html",{"form" : form})

def Logout(request):
    if(request.method == "POST"):
        logout(request)
    return redirect('home')
