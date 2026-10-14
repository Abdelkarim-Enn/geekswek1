import random
#Exercice 1

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
print(dict(zip(keys,values)))
#Exercice 2

family = {}

for i in range(3):
    name = input("Enter your name: ")
    age =  int(input("Enter your age: "))
    family[name] = age

total_cost = 0

for name, age in family.items():
    if age < 3:
        price = 0
    elif age <= 12:
        price = 10
    else:
        price = 15

    print(name, "ticket:", price, "$")
    total_cost += price
print("Total cost:", total_cost, "$")

#Exercice 3

brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": ["blue"],
        "Spain": ["red"],
        "US": ["pink", "green"]
    }
}
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

# 1. Change the number of stores to 2
brand["number_stores"] = 2

# 2. Print a sentence about the types of clothes
clothes = ", ".join(brand["type_of_clothes"])
print(f"Zara sells clothes for {clothes}.")

# 3. Add a new key: country_creation
brand["country_creation"] = "Spain"
if "international_competitors" in brand:
   brand["international_competitors"].append("Desigual")
del brand["creation_date"]
print(brand["international_competitors"][-1])
print(brand["major_color"]["US"])
print(len(brand))
print(brand.keys())
brand.update(more_on_zara)
print(brand["number_stores"])
