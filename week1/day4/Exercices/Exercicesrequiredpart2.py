import random
# Ex 4 

def describe_city( city,country="Morocco"):
    print(f"{city} is in {country}")
describe_city("casablanca","Morocco")


def check_random(number):
    rannumber = random.randint(1, 100)
    if number == rannumber:
        print("Success!")
    else:
        print("Fail!")
        print(f"Your number: {number}")
        print(f"Random number: {rannumber}")

number = int(input("Enter a number between 1 and 100: "))
check_random(number)

def make_shirt(size="L", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is {text}")

make_shirt("M", "Marhba bik")

make_shirt()

make_shirt(size="M")
make_shirt("S", "Marhba bik")
make_shirt(size="L", text="Python is awesome")
