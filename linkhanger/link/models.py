from email.policy import default
from django.db import models
from django.contrib.auth.models import User
from django.core.validators import URLValidator

from userauth.models import UserProfile
# class LinkAdmin(models.Model):
#     user = models.ManyToManyField(User)
#     link = models.ForeignKey('Link')


class Link(models.Model):
    position = models.PositiveSmallIntegerField(default=0)
    is_live = models.BooleanField(default=False)
    is_valid = models.BooleanField(default=False)
    title = models.CharField(max_length=100, null=True, blank=True)
    url = models.URLField(validators=[URLValidator], null=True, blank=True)
    thumbnail = models.ImageField(null=True, blank=True)
    priority = models.BooleanField(default=False)
    schedule = models.DateTimeField(blank=True, null=True)
    TYPE = (('date_of_birth', 'date_of_birth'),
            ('sensitive_content', 'sensitive_content'), ('code', 'code'))
    lock_type = models.CharField(
        choices=TYPE, blank=True, max_length=20, null=True)
    date_of_birth = models.DateField(blank=True, null=True)
    code = models.CharField(max_length=10, null=True, blank=True, default='')
    redirect_link = models.URLField(null=True, blank=True, default='')
    created_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(UserProfile, on_delete=models.PROTECT)

    def __str__(self):
        if self.title :
            return  self.title
        else:
            return 'No Title'

    def clean(self):
        if self.title != None and self.url != None and self.is_live:
            self.is_valid = True
            self.is_live = True
        else:
            self.is_valid = False
            self.is_live = False


class Theme(models.Model):
    image = models.FileField(upload_to='themes')
    name = models.CharField(null=False, blank=False, max_length=100)

    def __str__(self):
        return self.name


# class UserLink
class UserTheme(models.Model):
    user = models.OneToOneField(UserProfile, on_delete=models.PROTECT)
    theme = models.ForeignKey(Theme, on_delete=models.PROTECT)
    # links = models.ManyToManyField(Link)


# class UserLink(models.Model):
#     user = models.ForeignKey(UserProfile, on_delete=models.PROTECT)
#     link = models.OneToOneField(Link, on_delete=models.PROTECT, default=1)
