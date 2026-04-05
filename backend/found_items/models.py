from django.db import models
from users.models import User
CATAGORY_choise = [
        ('electronics','electronics'),
         ('cloth','cloth'),
        ('wallet','wallet'),
        ('others','others'),
]


class FoundItem(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='found_items/')
    location = models.CharField(max_length=100)
    category = models.CharField(max_length=50 , choices=CATAGORY_choise,null=True,blank=True)  # Could match categories in Matching module
    date_found = models.DateField()
    status = models.CharField(max_length=20, default='found')
    user = models.ForeignKey(User, on_delete=models.CASCADE,null=True,blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title