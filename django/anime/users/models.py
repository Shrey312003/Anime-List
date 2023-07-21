from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class List(models.Model):
    title = models.CharField(max_length=100,default=None)
    thumbnail = models.ImageField(blank=True)
    body = models.TextField(null=True)
    Score = models.PositiveSmallIntegerField(default=None)
    Author = models.ForeignKey(User,default=None,on_delete = models.CASCADE)
    slug = models.SlugField(default=None)
    
    def __str__(self):
        return self.title
    
    def snippet(self):
        return self.body[:20] + '...'