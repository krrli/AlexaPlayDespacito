from django.contrib import admin
from .models import Game, Question, Response, Song

admin.site.register(Game)
admin.site.register(Question)
admin.site.register(Response)
admin.site.register(Song)