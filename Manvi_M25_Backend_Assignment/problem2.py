class Rectangle:
    def __init__(self, length , width):
        self.length = length
        self.width = width

    def Perimeter(self):
        return 2*(self.length + self.width)
    
    def Area(self):
        return (self.length * self.width)
    
    def display(self):
        print("Length of rectangle is", self.length)
        print("Width of rectangle is ", self.width )
        print("Perimeter of a rectangle is :", self.Perimeter())
        print("Area of a rectangle is :", self.Area())
        

class cuboid(Rectangle):
    def __init__(self, length, width, height):
        super().__init__(length, width)
        self.height=height  
    
    def volume(self):
        print ("the volume of my_cuboid is", self.length*self.width*self.height)

s = Rectangle(7,5)
s.display()
c = cuboid(7,5,2)
c.volume()
    
