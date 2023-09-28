class Book:
    def __init__(self, title, author, price):
        self.title = title
        self.author = author
        self.price = price
    
    def view(self) :
        print(self.title)
        print(self.author)
        print(self.price)

if __name__ == "__main__":
    book_title = input("Enter Book Name: ")
    book_author = input("Enter Author: ")
    book_price = float(input("Enter Price: $"))

    book = Book(book_title, book_author, book_price)
    book.view()