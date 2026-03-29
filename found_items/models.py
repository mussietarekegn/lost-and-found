from django.db import models
from users.models import User

class FoundItem(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    location = models.CharField(max_length=100)
    date_found = models.DateField()
    status = models.CharField(max_length=20, default='found')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)