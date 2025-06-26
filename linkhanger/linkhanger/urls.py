"""linkhanger URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.conf import settings
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from graphene_django.views import GraphQLView
from django.views.decorators.csrf import csrf_exempt
# from userauth.views import LoginView

urlpatterns = (
    [
        path("admin/", admin.site.urls),
        # path("api/dj-rest-auth/login", LoginView.as_view(), name="rest_login"),
        path("api/dj-rest-auth/", include("dj_rest_auth.urls")),
        path("api/", include("api.urls")),
        path(r"graphql", csrf_exempt(GraphQLView.as_view(graphiql=True))),
    ]
    + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    + [path("", include("frontend.urls"))]
)
