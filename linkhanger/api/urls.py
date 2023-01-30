from django.contrib import admin
from django.urls import include, path

from api.apiviews import (FetchView, LinkCreateAPIView, LinkRetrieveUpdateDestoryAPIView,
                          )
from api.views import IndexView

urlpatterns = [
    path('', IndexView.as_view()),
    path('link/', LinkCreateAPIView.as_view()),
    path("link/<int:pk>/", LinkRetrieveUpdateDestoryAPIView.as_view()),
    path("fetch/<str:username>", FetchView.as_view())

]
