# Generated by Django 4.0.2 on 2022-05-05 07:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('link', '0006_link_user_alter_link_url'),
    ]

    operations = [
        migrations.CreateModel(
            name='Themes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='themes')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
    ]
