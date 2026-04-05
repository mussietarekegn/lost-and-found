from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
# Create your views here.

from .models import LostItem
from .serializers import LostItemSerializer

# Createing Lost Item
class LostItemCreateView(generics.CreateAPIView):
    queryset = LostItem.objects.all()
    serializer_class = LostItemSerializer
    permission_classes = [IsAuthenticated]  # Only logged-in users can post

# List all Lost Items
class LostItemListView(generics.ListAPIView):
    queryset = LostItem.objects.all()
    serializer_class = LostItemSerializer

# Retrieve single Lost Item
class LostItemDetailView(generics.RetrieveAPIView):
    queryset = LostItem.objects.all()
    serializer_class = LostItemSerializer

# Update Lost Item
class LostItemUpdateView(generics.UpdateAPIView):
    queryset = LostItem.objects.all()
    serializer_class = LostItemSerializer
    permission_classes = [IsAuthenticated]

# Delete Lost Item
class LostItemDeleteView(generics.DestroyAPIView):
    queryset = LostItem.objects.all()
    serializer_class = LostItemSerializer
    permission_classes = [IsAuthenticated]