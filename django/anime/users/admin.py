from django.contrib import admin
from .models import List
# Register your models here.
admin.site.register(List)

# class MemberAdmin(admin.ModelAdmin):
#     list_display = ("Author", "title")
#     prepopulated_fields = {"slug": ("Author", "title")}
  
# admin.site.register(List, MemberAdmin)