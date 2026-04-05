from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.create_found_item),
    path('', views.get_all_found_items),
    path('<int:pk>/', views.get_found_item),
    path('update/<int:pk>/', views.update_found_item),
    path('delete/<int:pk>/', views.delete_found_item),
]