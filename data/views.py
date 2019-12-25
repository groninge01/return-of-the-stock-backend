from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.generic import TemplateView


# Create your views here.
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.utils import json
from rest_framework import serializers
from rest_framework import viewsets
from rest_framework.decorators import parser_classes
from rest_framework.parsers import JSONParser

from data.models import Customer

from . import calculate


class HomePageView(TemplateView):
    def get(self, request, **kwargs):
        return render(request, 'index.html', context=None)

class LinksPageView(TemplateView):
    def get(self, request, **kwargs):
        return render(request, 'links.html', context=None)

@api_view(["POST"])
def fv_table_view(request, format=None):
    try:
        calculateResponse = calculate.create_fv_table(
            request.data['startingCapitalAmount'], 
            request.data['additionAmount'], 
            request.data['returnPercentage'], 
            request.data['numberOfPeriods'], 
            request.data['typeOfPeriod'])
        return JsonResponse(calculateResponse, safe=False)
    except ValueError as e:
        return Response(e.args[0], status.HTTP_400_BAD_REQUEST)

