from django.urls import path
from .views import (
    create_lost_item,
    get_all_lost_items,
    get_lost_item,
    update_lost_item,
    delete_lost_item
)

urlpatterns = [
    path('', get_all_lost_items, name='lost-list'),
    path('create/', create_lost_item, name='lost-create'),
    path('<int:pk>/', get_lost_item, name='lost-detail'),
    path('update/<int:pk>/', update_lost_item, name='lost-update'),
    path('delete/<int:pk>/', delete_lost_item, name='lost-delete'),
]