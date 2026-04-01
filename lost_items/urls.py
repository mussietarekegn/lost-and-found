from django.urls import path
from .views import (
    LostItemCreateView,
    LostItemListView,
    LostItemDetailView,
    LostItemUpdateView,
    LostItemDeleteView
)

urlpatterns = [
    path('', LostItemListView.as_view(), name='lost-list'),
    path('create/', LostItemCreateView.as_view(), name='lost-create'),
    path('<int:pk>/', LostItemDetailView.as_view(), name='lost-detail'),
    path('update/<int:pk>/', LostItemUpdateView.as_view(), name='lost-update'),
    path('delete/<int:pk>/', LostItemDeleteView.as_view(), name='lost-delete'),
]