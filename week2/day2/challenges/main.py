from text_analyzer import TextAnalyzer


def main():
    text = "Python is fun and Python is powerful"
    analyzer = TextAnalyzer(text)

    print(analyzer)
    print(len(analyzer))
    print(analyzer.word_count())
    print(analyzer.count_word("Python"))

    print("\nTesting exceptions:")

    try:
        TextAnalyzer("")
    except Exception as error:
        print(f"Empty text error: {error}")

    try:
        analyzer.count_word("")
    except Exception as error:
        print(f"Empty word error: {error}")


if __name__ == "__main__":
    main()
