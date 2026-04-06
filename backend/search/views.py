
from rest_framework.decorators import api_view
from rest_framework.response import Response
from lost_items.models import LostItem
from found_items.models import FoundItem


@api_view(['GET'])
def search_lost_items(request):
    query = request.GET.get('q')
    location = request.GET.get('location')

    items = LostItem.objects.all()

    if query:
        items = items.filter(title__icontains=query)

    if location:
        items = items.filter(location__icontains=location)

    data = list(items.values())
    return Response(data)

@api_view(['GET'])
def search_found_items(request):
    query = request.GET.get('q')
    location = request.GET.get('location')

    items = FoundItem.objects.all()

    if query:
        items = items.filter(title__icontains=query)

    if location:
        items = items.filter(location__icontains=location)

    return Response(list(items.values()))
from difflib import SequenceMatcher
from .models import Match

def similarity(a, b):
    return SequenceMatcher(None, a, b).ratio()


@api_view(['GET'])
def find_matches(request, lost_id):
    try:
        lost_item = LostItem.objects.get(id=lost_id)
    except LostItem.DoesNotExist:
        return Response({"error": "Lost item not found"}, status=404)

    found_items = FoundItem.objects.all()
    matches = []

    for found in found_items:
        if abs((lost_item.date_lost - found.date_found).days) > 7:
         continue   
        score = (
            similarity(lost_item.title, found.title) +
            similarity(lost_item.location, found.location)
        ) / 2

        if score > 0.5:  # threshold
            match = Match.objects.create(
                lost_item=lost_item,
                found_item=found,
                similarity_score=score
            )
            matches.append({
                "found_item": found.title,
                "score": score
            })

    return Response(matches)