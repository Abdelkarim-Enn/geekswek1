from family import Family


class TheIncredibles(Family):
    def use_power(self, name):
        for member in self.members:
            if member.get("name") == name:
                if member.get("age", 0) > 18:
                    print(f"{name} uses their power: {member.get('power')}")
                else:
                    print(f"{name} is not old enough to use their power")
                return
        print(f"{name} is not a member of the {self.last_name} family")

    def incredible_presentation(self):
        print("Here is our powerful family")
        super().family_presentation()


members = [
    {
        "name": "Michael",
        "age": 35,
        "gender": "Male",
        "is_child": False,
        "power": "fly",
        "incredible_name": "MikeFly",
    },
    {
        "name": "Sarah",
        "age": 32,
        "gender": "Female",
        "is_child": False,
        "power": "read minds",
        "incredible_name": "SuperWoman",
    },
]

incredibles = TheIncredibles("Incredibles", members)
incredibles.incredible_presentation()
incredibles.use_power("Michael")

incredibles.born(
    name="Baby Jack",
    age=1,
    gender="Male",
    is_child=True,
    power="Unknown Power",
    incredible_name="BabyJack",
)

incredibles.incredible_presentation()
incredibles.use_power("Baby Jack")
