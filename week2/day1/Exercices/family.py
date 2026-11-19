class Family:
    def __init__(self, last_name, members=None):
        self.last_name = last_name
        self.members = members if members is not None else []

    def born(self, **kwargs):
        self.members.append(kwargs)
        name = kwargs.get("name", "A new member")
        print(f"Congratulations! {name} has been born into the {self.last_name} family.")

    def is_18(self, name):
        for member in self.members:
            if member.get("name") == name:
                return member.get("age", 0) > 18
        return False

    def family_presentation(self):
        print(f"Family last name: {self.last_name}")
        for member in self.members:
            print(member)


members = [
    {"name": "Michael", "age": 35, "gender": "Male", "is_child": False},
    {"name": "Sarah", "age": 32, "gender": "Female", "is_child": False},
]

family = Family("Smith", members)
family.family_presentation()
print(f"Is Michael over 18? {family.is_18('Michael')}")

family.born(name="Little Tom", age=2, gender="Male", is_child=True)
family.family_presentation()
print(f"Is Little Tom over 18? {family.is_18('Little Tom')}")
