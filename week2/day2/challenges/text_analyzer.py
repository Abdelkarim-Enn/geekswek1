class TextAnalyzer:
    def __init__(self, text):
        if not isinstance(text, str):
            raise Exception("Text must be a string")
        if not text.strip():
            raise Exception("Text cannot be empty")

        self.text = text

    def __str__(self):
        return f"TextAnalyzer object with {self.word_count()} words"

    def __len__(self):
        return len(self.text)

    def word_count(self):
        return len(self.text.split())

    def count_word(self, word):
        if not isinstance(word, str) or not word.strip():
            raise Exception("Word cannot be empty")

        target = word.strip().lower()
        words = self.text.lower().split()

        return words.count(target)
