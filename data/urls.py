from django.conf.urls import url
from django.urls import path, include

from data import views

urlpatterns = [
    url(r'^api/get-returns/$', views.fv_table_view),  # for REST API test
]
