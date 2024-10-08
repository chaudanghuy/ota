# Generated by Django 5.0.7 on 2024-07-25 11:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_sliderimage'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='address',
            field=models.TextField(blank=True, default=''),
        ),
        migrations.AddField(
            model_name='article',
            name='area',
            field=models.CharField(blank=True, default='', max_length=100),
        ),
        migrations.AddField(
            model_name='article',
            name='completed_year',
            field=models.IntegerField(blank=True, default=0),
        ),
    ]
