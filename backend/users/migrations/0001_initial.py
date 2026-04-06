from django.db import migrations, models

class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(primary_key=True)),
                ('username', models.CharField(max_length=150, unique=True)),
                ('email', models.EmailField(unique=True)),
                # ...other fields...
            ],
        ),
    ]
