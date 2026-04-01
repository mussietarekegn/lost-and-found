

from django.db import models
from lost_items.models import LostItem
from found_items.models import FoundItem

class Match(models.Model):
    lost_item = models.ForeignKey(LostItem, on_delete=models.CASCADE)
    found_item = models.ForeignKey(FoundItem, on_delete=models.CASCADE)

    similarity_score = models.FloatField()  # how close they match
    is_confirmed = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Match: {self.lost_item.title} ↔ {self.found_item.title}"