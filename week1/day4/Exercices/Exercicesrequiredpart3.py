import random
#Ex 7


def get_random_temp(season):
    if season == "winter":
        lower = -10
        upper = 16
    elif season == "spring":
        lower = 10
        upper = 25
    elif season == "summer":
        lower = 20
        upper = 40
    elif season == "autumn":
        lower = 5
        upper = 20
    else:
        print("Invalid season!")
        return None

    return random.uniform(lower, upper)


def main():
    season = input(
        "Choose a season (summer, autumn, winter, spring): "
    ).lower().strip()

    temperature = get_random_temp(season)

    if temperature is None:
        return

    print(
        f"The temperature right now is "
        f"{temperature:.1f} degrees Celsius."
    )

    if temperature < 0:
        print("Brrr, that's freezing! Wear some extra layers today.")
    elif temperature < 16:
        print("Quite chilly! Don't forget your coat.")
    elif temperature <= 23:
        print("Mild weather. Enjoy your day!")
    elif temperature <= 32:
        print("It's warm outside. Stay hydrated!")
    else:
        print("It's really hot! Stay cool.")


main()
# Ex 8

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]


def ask_questions():
    correct_answers = 0
    incorrect_answers = 0
    wrong_answers = []

    for item in data:
        print(item["question"])
        user_answer = input("Your answer: ").strip()

        if user_answer.lower() == item["answer"].lower():
            print("Correct! Well done!")
            correct_answers += 1
        else:
            print("Incorrect!")
            incorrect_answers += 1

            wrong_answers.append({
                "question": item["question"],
                "your_answer": user_answer,
                "correct_answer": item["answer"]
            })

        print()

    return correct_answers, incorrect_answers, wrong_answers


def show_results(correct_answers, incorrect_answers, wrong_answers):
    print("===== QUIZ RESULTS =====")
    print(f"Correct answers: {correct_answers}")
    print(f"Incorrect answers: {incorrect_answers}")

    if wrong_answers:
        print("\n===== WRONG ANSWERS =====")

        for item in wrong_answers:
            print(f"Question: {item['question']}")
            print(f"Your answer: {item['your_answer']}")
            print(f"Correct answer: {item['correct_answer']}")
            print()

    if incorrect_answers > 3:
        print("You had more than 3 wrong answers!")


def main():
    while True:
        correct, incorrect, wrong = ask_questions()

        show_results(correct, incorrect, wrong)

        if incorrect > 3:
            play_again = input(
                "Do you want to play again? (yes/no): "
            ).strip().lower()

            if play_again == "yes":
                print("\nLet's play again!\n")
                continue

        break


main()


