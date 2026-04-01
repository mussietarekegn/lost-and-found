from rest_framework import serializers
from .models import LostItem

class LostItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = LostItem
        fields = 'all'
        read_only_fields = ['user', 'created_at']

    def create(self, validated_data):
        request = self.context.get('request')
        validated_data['user'] = request.user  # Auto-assign authenticated user
        return super().create(validated_data)
#pls guys Make sure the Authentication module provides JWT or session auth so request.user exists.