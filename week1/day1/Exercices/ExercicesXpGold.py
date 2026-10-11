import random
# Exercice 1
#methode 1
season = int(input("Enter your number Month :"))
if season == 1 or season == 2 or season == 12 :
    print("Winter")
elif season == 3 or season == 4 or season == 5 :    
    print("Spring")
elif season == 6 or season == 7 or season == 8 :
    print("Summer")  
elif season == 9 or season == 10 or season == 11 :
    print("Autumn")    
else :
    print("Nothing.........")
#methode 
season = int(input("Enter your number Month :"))
if season in range(3,6):
    print("Spring")
elif season in range(5,9):
    print("Summer")
elif season in range(8,12): 
     print("Autumn")   
elif season in [12,1,2]:
    print("Winter")     
else :
    print("Nothing.......!!!")    
#Exercice 2
#Q1
for num1 in range(1,21):
    print(num1)
#Q2
for i , num2 in enumerate(range(1,21)):
    if i %2 == 0 :
        print(num2)
print("finished!!!!") 
#Exercice 3
name = input("what is your name ?:" )
while name != "abdelkarim":
      name = input("what is your name ?:" )
print("correct")
#Exercice 4 
names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
name = input("what is your name ?:")
if name in names:
    print(names.index(name))
else :
    print("mkynach f la list")
#Exercice 5
num1 = int(input("Input the 1st number: "))    
num2 = int(input("Input the 2st number: "))    
num3 = int(input("Input the 3st number: "))  
print("The greatest number is:", max(num1,num2,num3))
#Exrcice 6
win = 0
lose = 0
while True:
    answer = input("Choose a number from 1 to 9 ")
    if answer == "quit":
        print("You quit the game")
        break
    answer = int(answer)
    random_number = random.randint(1,9)
    if answer == random_number:
        print("Winner")
        win += 1
    else:
        print("loser")
        lose += 1
print(f"number the winn ", {win})
print(f"number the lose ", {lose})
            




     
          
       



    




          