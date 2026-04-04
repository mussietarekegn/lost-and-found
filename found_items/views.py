from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import FoundItem
from .serializers import FoundItemSerializer

@api_view(['POST'])
def create_found_item(request):
    serializer = FoundItemSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)

@api_view(['GET'])
def get_all_found_items(request):
    items = FoundItem.objects.all()
    serializer = FoundItemSerializer(items, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_found_item(request, pk):
    try:
        item = FoundItem.objects.get(id=pk)
    except FoundItem.DoesNotExist:
        return Response({"error": "Not found"})
    
    serializer = FoundItemSerializer(item)
    return Response(serializer.data)
