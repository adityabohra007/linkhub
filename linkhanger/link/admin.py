from django.contrib import admin

from link.models import Link, Theme,  UserTheme

# Register your models here.

admin.site.register(Link)
admin.site.register(Theme)
admin.site.register(UserTheme)
