from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from . import calculate

@api_view(["POST"])
def fv_table_view(request, format=None):
    try:
        calculateResponse = calculate.create_fv_table(
            request.data['startingCapitalAmount'], 
            request.data['additionAmount'], 
            request.data['numberOfPeriods'], 
            request.data['typeOfPeriod'])
        return JsonResponse(calculateResponse, safe=False)
    except ValueError as e:
        return Response(e.args[0], status.HTTP_400_BAD_REQUEST)

