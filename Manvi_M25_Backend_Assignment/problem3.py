class vehicle():
    def __init__(self , name,color,price):
        self.name = name
        self.color = color
        self.price = price

    def max_speed(self ):
        print("Vehicle max speed is 150")


    def gears(self ):
        print("Vehicle have 6 gear")

    def show(self):
        print(self.name , self.color , self.price)

class car(vehicle):
    def max_speed(self ):
        print("car max speed is 240")

    def gears(self ):
        print("car have 7 gear")

class bus(vehicle):

    def max_speed(self ):
        print("Bus max speed is 200")


    def gears(self ):
        print("Bus have 8 gear")


c = car("BMW" , "Red" , 2000)
c.show()
c.max_speed()
c.gears()

b= bus("Tavera x1 " , "white " , 75000)
b.show()
b.max_speed()
b.gears()