class Pagination:
    def __init__(self, items=None, page_size=10):
        if items is None:
            items = []
        self.items = items
        self.page_size = page_size
        self.current_idx = 0
        self.total_pages = (len(items) + page_size - 1) // page_size

    def get_visible_items(self):
        start = self.current_idx * self.page_size
        return self.items[start : start + self.page_size]

    def go_to_page(self, page_num):
        page_num = int(page_num)
        if page_num < 1 or page_num > self.total_pages:
            print(f"Invalid page: {page_num}. Please choose a page between 1 and {self.total_pages}")
            return self
        self.current_idx = page_num - 1
        return self

    def first_page(self):
        self.current_idx = 0
        return self

    def last_page(self):
        if self.total_pages > 0:
            self.current_idx = self.total_pages - 1
        return self

    def next_page(self):
        if self.current_idx < self.total_pages - 1:
            self.current_idx += 1
        return self

    def previous_page(self):
        if self.current_idx > 0:
            self.current_idx -= 1
        return self

    def display_current_page(self):
        return "\n".join(str(item) for item in self.get_visible_items())


alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

print(p.get_visible_items())

p.next_page()
print(p.get_visible_items())

p.last_page()
print(p.get_visible_items())

p.go_to_page(7)
print(p.current_idx + 1)

p.go_to_page(0)
print(p.current_idx + 1)

print(p.first_page().next_page().get_visible_items())
print(p.display_current_page())
