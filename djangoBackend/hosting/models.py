from django.db import models
from pets.models import Pet
from users.models import User

# Create your models here.

class Hosting (models.Model):
    owner = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
    )
    pet = models.OneToOneField(
        Pet,
        on_delete=models.CASCADE,
    )
    start_date = models.DateField()
    end_date = models.DateField()
    observations = models.CharField(max_length=255)
    cost = models.FloatField()
    approved = models.BooleanField(default=False)

    def __str__(self):
        return str(self.owner) + " - " + str(self.pet) + " - " + str(self.start_date)

    def get_duration(self):
        return self.end_date - self.start_date
    
    def set_cost(self):
        return self.get_duration()*(50+self.pet.weight)