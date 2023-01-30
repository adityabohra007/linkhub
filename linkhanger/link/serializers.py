from dataclasses import fields
from rest_framework import serializers
from django.contrib.auth.models import User
from link.models import Link, Theme, UserTheme
from userauth.serializers import UserProfileSerializer


class LinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Link
        fields = "__all__"


class ThemeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Theme
        fields = "__all__"


class UserThemeSerializer(serializers.ModelSerializer):
    theme = ThemeSerializer()

    class Meta:
        model = UserTheme
        fields = ['theme']


# class UserLinkSerializer(serializers.ModelSerializer):
#     link = LinkSerializer()

#     class Meta:
#         model = UserLink
#         fields = ['link']
