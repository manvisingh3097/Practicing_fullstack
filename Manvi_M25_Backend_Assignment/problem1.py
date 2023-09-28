class Person:
    def __init__(self, name , age) :
        self.name = name
        self.age= age
    def display(self):
        print("Person name ", self.name)
        print("Person age", self.age)
        print("-------")

class Student(Person):
    def __init__(self, name , age, section):
        super().__init__(name,age)
        self.section = section
    
    def displayStudent( self  ):
        print("Student name ", self.name)
        print("Student age", self.age)
        print("Student section ",self.section)


s = Student("manvi","23","A")
s.display()
s.displayStudent()