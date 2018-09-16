import random

from django.contrib.auth.models import User
from rest_framework.response import Response

from .models import Game, Song, Question
from rest_framework import viewsets
from apd.serializers import UserSerializer, GameSerializer, ResponseSerializer, QuestionSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GameViewSet(viewsets.ModelViewSet):
    queryset = Game.objects.all().order_by('-created')
    serializer_class = GameSerializer

    # def create(self, request, *args, **kwargs):
    #     # Get challanger ID
    #     print(request.data)
    #     id = request.data
    #     challanger = User.objects.get(pk=id)
    #
    #     #Search oponent
    #     opponent = User.objects.first()
    #
    #
    #
    #     #Get 4 songs
    #     responses = []
    #     count = Song.objects.count()
    #     random_pk = random.randint(1, count)
    #     answer = Song.objects.get(pk=random_pk)
    #     answer['answer'] = True
    #     responses.append(answer)
    #
    #
    #
    #     #Insert fals choice
    #     while len(responses) < 4:
    #         random_pk = random.randint(1, count)
    #         response = Song.objects.get(pk=random_pk)
    #         response['answer'] = False
    #         responses.append(response)
    #
    #
    #     # Create question
    #     questions = []
    #     question = Question()
    #     question.url = answer.preview
    #     question.response = ResponseSerializer(responses, many=True)
    #     questions.append(question)
    #
    #
    #     # Create game
    #     game = Game()
    #     game.player1 = UserSerializer(challanger)
    #     game.player2 = UserSerializer(opponent)
    #     game.questions = QuestionSerializer(questions, many=True)
    #     game.status = 'open'
    #
    #     serializer = GameSerializer(game)
    #     return Response(serializer.data)

