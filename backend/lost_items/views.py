from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import LostItem
from .serializers import LostItemSerializer

@api_view(['POST'])
def create_lost_item(request):
    serializer = LostItemSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)

@api_view(['GET'])
def get_all_lost_items(request):
    items = LostItem.objects.all()
    serializer = LostItemSerializer(items, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_lost_item(request, pk):
    try:
        item = LostItem.objects.get(id=pk)
    except LostItem.DoesNotExist:
        return Response({"error": "Not found"})
    
    serializer = LostItemSerializer(item)
    return Response(serializer.data)

@api_view(['PUT'])
def update_lost_item(request, pk):
    try:
        item = LostItem.objects.get(id=pk)
    except LostItem.DoesNotExist:
        return Response({"error": "Not found"})

    serializer = LostItemSerializer(item, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)

@api_view(['DELETE'])
def delete_lost_item(request, pk):
    try:
        item = LostItem.objects.get(id=pk)
    except LostItem.DoesNotExist:
        return Response({"error": "Not found"})

    item.delete()
    return Response({"message": "Deleted successfully"})