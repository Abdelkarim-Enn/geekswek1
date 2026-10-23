#Ex1
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age
cat1 = Cat("Mimi", 3)
cat2 = Cat("Luna", 7)
cat3 = Cat("Simba", 5)
def find_oldest_cat(cats):
    oldest_cat = cats[0]

    for cat in cats:
        if cat.age > oldest_cat.age:
            oldest_cat = cat

    return oldest_cat

cats = [cat1, cat2, cat3]
oldest = find_oldest_cat(cats)
print(
    f"The oldest cat is {oldest.name}, "
    f"and is {oldest.age} years old."
)
#Ex2

class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        print(f"{self.name} jumps {self.height * 2} cm high!")


davids_dog = Dog("Rex", 50)

print(davids_dog.name)
print(davids_dog.height)
davids_dog.bark()
davids_dog.jump()

print()

sarahs_dog = Dog("Teacup", 20)

print(sarahs_dog.name)
print(sarahs_dog.height)
sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.height > sarahs_dog.height:
    print(f"The bigger dog is {davids_dog.name}")
elif sarahs_dog.height > davids_dog.height:
    print(f"The bigger dog is {sarahs_dog.name}")
else:
    print("Both dogs have the same height.")
#Ex3

class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)


stairway = Song([
    "The morning sun is shining",
    "The birds are singing",
    "A new day is beginning"
])

stairway.sing_me_a_song()

