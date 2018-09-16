from django.db import models
from django.contrib.auth.models import User


class Response(models.Model):
    name = models.CharField(max_length=255, null=False)
    artist = models.CharField(max_length=255, null=False)
    url = models.CharField(max_length=1000, null=False)
    answer = models.BooleanField(default=False)


class Question(models.Model):
    url = models.CharField(max_length=255, null=False)
    responses = models.ManyToManyField(Response, related_name='responses')



class Game(models.Model):
    player1 = models.ForeignKey(User, related_name='player1', on_delete='SET_NULL')
    player2 = models.ForeignKey(User, related_name='player2', on_delete='SET_NULL')
    questions = models.ManyToManyField(Question, related_name='questions')
    created = models.DateTimeField(auto_now_add=True, blank=True)
    status = models.CharField(max_length=255, null=False)

    def __str__(self):
        return "{} vs {}".format(self.player1, self.player2)


class Song(models.Model):
    name = models.CharField(max_length=255)
    artists = models.CharField(max_length=255)
    preview = models.CharField(max_length=2000)

    def __str__(self):
        return "{} - {}".format(self.name, self.artists)