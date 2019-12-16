from django.conf.urls import url

from .views import *

app_name = 'controller'

urlpatterns = [
    url(r'^controller/$', ControllerGetBuckets.as_view(), name='controller_get_buckets'),
]
