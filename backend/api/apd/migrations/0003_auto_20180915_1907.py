# Generated by Django 2.1.1 on 2018-09-15 19:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('apd', '0002_game_questions'),
    ]

    operations = [
        migrations.RenameField(
            model_name='question',
            old_name='song_uri',
            new_name='uri',
        ),
    ]