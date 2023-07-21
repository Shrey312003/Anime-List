from django import forms
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from django.contrib.auth.forms import UserCreationForm

# class Signup_form(forms.Form):
#     class meta(UserCreationForm.Meta):
#         # Username = forms.CharField(max_length=100, widget=forms.TextInput(attrs={"class":"form-control"}))

        # Password = forms.CharField(widget = forms.PasswordInput(attrs={"class":"form-control"}))

        # def clean_password(self):
        #     password = self.cleaned_data.get('Password')
        #     try:
        #         validate_password(password)
        #     except ValidationError as e:
        #         raise forms.ValidationError(str(e))
        #     return password
        
    
        # widgets = {
        #     'username': forms.TextInput(attrs={'class': 'form-control'}),
        #     'password1': forms.PasswordInput(attrs={'class': 'form-control'}),
        #     'password2': forms.PasswordInput(attrs={'class': 'form-control'}),
        # }

