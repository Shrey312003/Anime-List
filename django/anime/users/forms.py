from django import forms
from . import models

class Anime_list(forms.ModelForm):
    class Meta:
        model = models.List
        fields = [
            'title',
            'body' ,
            'thumbnail',
            'Score'
        ]

        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-control'}),
            'body': forms.Textarea(attrs={'class': 'form-control'}),

            # Add more fieldtes and their corresponding classes as needed
        }