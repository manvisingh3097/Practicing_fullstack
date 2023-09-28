class Rectangle:
    def __init__(self, length , width):
        self.length = length
        self.width = width
    
    def Perimeter(self ):
        self.perimeter = 2* (self.length+self.width)
        return(self.perimeter)

    def Area(self ):
        self.Area = self.length*self.width
        return(self.Area)
    
    def display(self):
        print("The length of rectangle is:", self.length)
        print("The width of rectangle is:", self.width)
        print("The perimeter of rectangle is:", self.Perimeter())
        print("The Area of rectangle is:", self.Area())


length = int(input("Enter Length: "))
width = int(input("Enter Width: "))

rectangle = Rectangle(length, width)
rectangle.display()