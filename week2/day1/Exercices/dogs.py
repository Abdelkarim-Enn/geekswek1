class Dog:
    def __init__(self, name, age, weight):
        if age <= 0:
            raise Exception("Age must be greater than 0")
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        self_score = self.run_speed() * self.weight
        other_score = other_dog.run_speed() * other_dog.weight

        if self_score > other_score:
            return f"{self.name} wins the fight against {other_dog.name}"
        if other_score > self_score:
            return f"{other_dog.name} wins the fight against {self.name}"
        return f"{self.name} and {other_dog.name} tie in the fight"


dog1 = Dog("Rex", 5, 30)
dog2 = Dog("Teacup", 2, 8)
dog3 = Dog("Rocky", 4, 35)

for dog in (dog1, dog2, dog3):
    print(dog.bark())
    print(f"{dog.name} run speed: {dog.run_speed()}")

print(dog1.fight(dog2))
print(dog2.fight(dog3))
print(dog3.fight(dog1))
