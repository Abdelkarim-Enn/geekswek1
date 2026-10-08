#Exercice1
print("Hello world\nHello world\nHello world\nHello world")
#Exercice2
print((99 ** 3) * 8)
#Exercice3
name = input("What is your name? ")

if name == "Abdelkarim":
    print("We have the same name")
else:
    print("We have different names")

 #Exercice4   
height = int(input("What is your height in cm? "))

if height > 145:
    print("You are tall enough to ride!")
else:
    print("You need to grow some more to ride.")
 #Exercice5

my_fav_numbers = {2, 7, 22}
my_fav_numbers.add(10)
my_fav_numbers.add(30)
my_fav_numbers.remove(30)

friend_fav_numbers = {3, 8, 12}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(my_fav_numbers)
print(friend_fav_numbers)
print(our_fav_numbers)
#Exercise 6
#No, it is not possible to add more integers directly to a tuple because tuples are immutable.

# #Exercise 7

basket = ["Banana", "Apples", "Oranges", "Blueberries"]

basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi") 
basket.insert(0, "Apples")
print(basket.count("Apples"))

basket.clear()

print(basket)

#Exercise 8
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]


while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

finished_sandwiches = []

while sandwich_orders:
    sandwich = sandwich_orders.pop(0)
    finished_sandwiches.append(sandwich)

for sandwich in finished_sandwiches:
    print(f"I made your {sandwich}.")