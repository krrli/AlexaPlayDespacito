from django.db import models
from django.contrib.auth.models import User


class Response(models.Model):
    title = models.CharField(max_length=255, null=False)
    correct = models.BooleanField(null=False)

    def __str__(self):
        return "{} - {}".format(self.title, self.correct)


class Question(models.Model):
    url = models.CharField(max_length=255, null=False)
    points = models.IntegerField(default=0, null=False)
    responses = models.ManyToManyField(Response, related_name='responses')

    def __str__(self):
        return str(self.points)

class Game(models.Model):
    player1 = models.ForeignKey(User, related_name='player1', on_delete='SET_NULL')
    player2 = models.ForeignKey(User, related_name='player2', on_delete='SET_NULL')
    questions = models.ManyToManyField(Question, related_name='questions')
    created = models.DateTimeField(auto_now_add=True, blank=True)
    status = models.CharField(max_length=255, null=False)

    def __str__(self):
        return "{} vs {}".format(self.player1, self.player2)