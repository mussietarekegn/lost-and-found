
from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    # Add extra profile fields here
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    is_admin_user = models.BooleanField(default=False)

    def __str__(self):
        return self.username
