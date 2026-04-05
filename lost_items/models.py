from django.db import models
# Create your models here.
from django.contrib.auth.models import User  # Make sure your Auth module uses Django User
CATAGORY_choise = [
        ('electronics','electronics'),
         ('cloth','cloth'),
        ('wallet','wallet'),
        ('others','others'),
]

class LostItem(models.Model):
  
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='lost_items/')
    category = models.CharField(max_length=50 , choices=CATAGORY_choise)  # Could match categories in Matching module
    location = models.CharField(max_length=100)
    date_lost = models.DateField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # Connects to Authentication module
    created_at = models.DateTimeField(auto_now_add=True)

    def str(self):
        return self.title