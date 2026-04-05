

from django.urls import path
from .views import *

urlpatterns = [
    path('lost/', search_lost_items),
    path('found/', search_found_items),
    path('match/<int:lost_id>/', find_matches),
]