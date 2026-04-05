from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    api_info = """
Welcome to the Lost & Found App API!

Available API endpoints:

Lost Items:
- GET all: api/list/
- GET one: api/<id>/
- POST create: api/create/
- PUT update: api/<id>/update/
- DELETE delete: api/<id>/delete/

Found Items:
- GET all: api/list/
- GET one: api/<id>/
- POST create: api/create/
- PUT update: api/<id>/update/
- DELETE delete: api/<id>/delete/

Use a tool like Postman to test these endpoints.
"""
    return HttpResponse(api_info, content_type="text/plain")