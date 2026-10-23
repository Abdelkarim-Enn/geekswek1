
class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            print(f"{new_animal} was added to the zoo.")
        else:
            print(f"{new_animal} is already in the zoo.")

    def get_animals(self):
        print(f"Animals in {self.name}:")
        for animal in self.animals:
            print(animal)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"{animal_sold} was removed from the zoo.")
        else:
            print(f"{animal_sold} was not found.")

    def sort_animals(self):
        groups = {}

        for animal in sorted(self.animals):
            first_letter = animal[0].upper()

            if first_letter not in groups:
                groups[first_letter] = []

            groups[first_letter].append(animal)

        return groups

    def get_groups(self):
        groups = self.sort_animals()

        for letter, animals in groups.items():
            print(f"{letter}: {', '.join(animals)}")


new_york_zoo = Zoo("New York Zoo")

new_york_zoo.add_animal("Giraffe")
new_york_zoo.add_animal("Bear")
new_york_zoo.add_animal("Ape")
new_york_zoo.add_animal("Baboon")
new_york_zoo.add_animal("Cat")
new_york_zoo.add_animal("Cougar")
new_york_zoo.add_animal("Emu")
new_york_zoo.add_animal("Eel")

new_york_zoo.get_animals()

print("\nGrouped animals:")
new_york_zoo.get_groups()

print()
new_york_zoo.sell_animal("Bear")

print("\nAnimals after selling:")
new_york_zoo.get_animals()
