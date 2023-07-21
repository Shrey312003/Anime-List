# Generated by Django 4.2.1 on 2023-06-04 12:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="list",
            name="Score",
            field=models.PositiveSmallIntegerField(default=None),
        ),
        migrations.AddField(
            model_name="list",
            name="body",
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name="list",
            name="thumbnail",
            field=models.ImageField(blank=True, upload_to=""),
        ),
        migrations.AddField(
            model_name="list",
            name="title",
            field=models.CharField(default=None, max_length=100),
        ),
    ]
