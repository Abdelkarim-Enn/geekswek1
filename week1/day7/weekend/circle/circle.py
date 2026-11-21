import math


class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is None and diameter is None:
            raise ValueError("Provide a radius or a diameter.")
        if radius is not None and diameter is not None:
            raise ValueError("Provide either a radius or a diameter, not both.")

        if radius is not None:
            self.radius = radius
        else:
            self.diameter = diameter

    @property
    def radius(self):
        return self._radius

    @radius.setter
    def radius(self, value):
        if not isinstance(value, (int, float)):
            raise TypeError("Radius must be a number.")
        if value <= 0:
            raise ValueError("Radius must be positive.")
        self._radius = value

    @property
    def diameter(self):
        return self._radius * 2

    @diameter.setter
    def diameter(self, value):
        self.radius = value / 2

    def area(self):
        return math.pi * self._radius ** 2

    def __str__(self):
        return f"Circle(radius={self.radius}, diameter={self.diameter})"

    def __repr__(self):
        return self.__str__()

    def __add__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return Circle(radius=self.radius + other.radius)

    def __gt__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return self.radius > other.radius

    def __lt__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return self.radius < other.radius

    def __eq__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return math.isclose(self.radius, other.radius)


if __name__ == "__main__":
    circle1 = Circle(radius=3)
    circle2 = Circle(diameter=8)
    circle3 = Circle(radius=5)

    print(circle1)
    print(f"Area: {circle1.area():.2f}")
    print(f"Circle 1 + Circle 2: {circle1 + circle2}")
    print(f"Circle 3 is bigger than Circle 1: {circle3 > circle1}")
    print(f"Circle 1 equals Circle 1: {circle1 == Circle(diameter=6)}")

    circles = [circle3, circle1, circle2]
    print("Sorted:", sorted(circles))
