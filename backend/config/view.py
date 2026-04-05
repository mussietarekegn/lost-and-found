from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    api_info = """
Welcome to the Lost & Found App API!

use postman api for testing tool and test the endpoints:
"""
    return HttpResponse(api_info, content_type="text/plain")