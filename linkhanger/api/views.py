from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.


class IndexView(APIView):

    def get(self, request):
        return Response({'data': 'success'})


# class FetchUsername(APIView):
#     def get(self):
