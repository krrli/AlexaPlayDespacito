from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Game, Question, Response


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'url', 'username', 'email')




class ResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Response
        fields = ('name', 'artist', 'url', 'answer')



class QuestionSerializer(serializers.ModelSerializer):
    responses = ResponseSerializer(many=True, read_only=True)

    class Meta:
        model = Question
        fields = ('url', 'responses')


class GameSerializer(serializers.ModelSerializer):
    player1 = UserSerializer()
    player2 = UserSerializer()
    questions = QuestionSerializer(many=True, read_only=True)

    class Meta:
        model = Game
        fields = ('id', 'player1', 'player2', 'questions', 'created', 'status')
