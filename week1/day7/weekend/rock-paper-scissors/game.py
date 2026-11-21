import random


class Game:
    ITEMS = ("rock", "paper", "scissors")
    WINNING_MOVES = {"rock": "scissors", "paper": "rock", "scissors": "paper"}
    OUTCOMES = {"win": "You win!", "draw": "You drew!", "loss": "You lose!"}

    def get_user_item(self):
        while True:
            item = input("Choose rock, paper or scissors: ").strip().lower()
            if item in self.ITEMS:
                return item
            print("Invalid choice. Please enter rock, paper or scissors.")

    def get_computer_item(self):
        return random.choice(self.ITEMS)

    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return "draw"
        if self.WINNING_MOVES[user_item] == computer_item:
            return "win"
        return "loss"

    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)

        print(
            f"You selected {user_item}. "
            f"The computer selected {computer_item}. "
            f"{self.OUTCOMES[result]}"
        )

        return result
