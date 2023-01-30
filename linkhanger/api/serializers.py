from dataclasses import field
from django.forms import ValidationError
from rest_framework import serializers
from link.models import Link
from django.core.validators import URLValidator


class LinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Link
        exclude=['user']
    def create(self, validated_data):
        return Link.objects.create(**validated_data)

    # def validate(self, attrs):
    #     pass
        #     print('validate -------------------------------------------------', attrs)
        #     if attrs['title'] != None and attrs['url'] != None:
        #         attrs['is_valid'] = True
        #     return attrs

        # if attrs['is_live'] == True and attrs['is_valid'] == False:
        #     attrs['is_live'] = False

    def update(self, instance, validated_data):
        # print('update^^^^', validated_data.get('position'),instance.position)
        print("old",instance.position,'new',validated_data.get('position'))
        if validated_data.get('position') !=None and instance.position != validated_data.get('position'):
            print('updating------------------',validated_data.get('position'),instance.position)
            temp = Link.objects.get(position=validated_data.get('position'))
            temp.position = instance.position
            temp.save()
            instance.position = validated_data.get('position')
            print(temp.position,'new position of other one',instance.position,'new of ')
            
        if instance.title != None and instance.url != None:
            instance.is_valid = True
        else:
            instance.is_valid = False
        try:
            valid = URLValidator()
            valid(instance.url)
            instance.is_valid = True
        except ValidationError:
            instance.is_valid = False

        # if instance.is_live == True and instance.is_valid == False:
        #     instance.is_live = False

        instance.is_live = validated_data.get('is_live', instance.is_live)
        instance.is_valid = validated_data.get('is_valid', instance.is_valid)

        instance.title = validated_data.get('title', instance.title)
        instance.url = validated_data.get('url', instance.url)
        instance.thumbnail = validated_data.get(
            'thumbnail', instance.thumbnail)
        instance.priority = validated_data.get('priority', instance.priority)
        instance.schedule = validated_data.get('schedule', instance.schedule)
        instance.lock_type = validated_data.get(
            'lock_type', instance.lock_type)
        instance.date_of_birth = validated_data.get(
            'date_of_birth', instance.date_of_birth)
        instance.code = validated_data.get('code', instance.code)
        instance.redirect_link = validated_data.get(
            'redirect_link', instance.redirect_link)

        instance.save()

        return instance
