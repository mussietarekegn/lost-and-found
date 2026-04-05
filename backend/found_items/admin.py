from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import FoundItem

# Register LostItem to admin panel
admin.site.register(FoundItem)
