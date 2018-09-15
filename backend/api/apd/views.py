from django.contrib.auth.models import User
from .models import Game
from rest_framework import viewsets
from apd.serializers import UserSerializer, GameSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GameViewSet(viewsets.ModelViewSet):
    queryset = Game.objects.all().order_by('-created')
    serializer_class = GameSerializer

