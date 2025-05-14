from link.models import Link
# from link.serializers import UserLinkSerializer
from rest_framework import permissions
from rest_framework.generics import (ListCreateAPIView, RetrieveUpdateDestroyAPIView)
from rest_framework.response import Response
from rest_framework.views import APIView

from api.serializers import LinkSerializer
from django.db.models import F
# from link.serializers import UserLinkSerializer


class LinkView(APIView):
    # authentication_classes = [authentication.Token]
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, format=None):
        # instance = UserLink.objects.filter(
        #     user=request.user.userprofile).order_by("-link__created_at")
        instance = Link.objects.filter(user= request.user.userprofile).order_by("position")
        serializer = LinkSerializer(instance, many=True)
        # print(serializer.data)
        return Response(serializer.data)


class LinkRetrieveUpdateDestoryAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Link.objects.all()
    lookup_url_kwarg="pk"
    serializer_class = LinkSerializer

    # def delete(self, request, *args, **kwargs):
    #     return super().delete(request, *args, **kwargs)
    # def update(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     data = {'status': request.data.get('status')}
    #     serializer = self.get_serializer(instance, data, partial=True)
    #     serializer.is_valid(raise_exception=True)
    #     self.perform_update(serializer)
    #     return Response(serializer.data)

    def update(self, request, *args, **kwargs):
        # print('update -----', request.data)
        instance = self.get_object()
        serializer = self.get_serializer(instance, request.data)
        serializer.is_valid(raise_exception=True)

        self.perform_update(serializer)

        return Response(serializer.data)


class LinkCreateAPIView(ListCreateAPIView):

    serializer_class = LinkSerializer

    def get_queryset(self):
        instance = Link.objects.filter(
            user=self.request.user.userprofile).order_by("position")
        return instance

    def create(self, request, *args, **kwargs):
        position = 0
        other_links = Link.objects.filter(user=self.request.user.userprofile)
        other_links.update(position=F('position')+1)
        instance = Link.objects.create(user=self.request.user.userprofile)
        ser = LinkSerializer(instance)
        return Response(ser.data)




class FetchView(APIView):
    serializer_class = LinkSerializer

    def get(self, *args, **kwargs):
        username = kwargs['username']
        instance = Link.objects.filter(user__user__username=username,is_live=True)
        print(instance)
        serializer = LinkSerializer(instance,many=True)
        print(serializer.data)
        return Response(serializer.data)
