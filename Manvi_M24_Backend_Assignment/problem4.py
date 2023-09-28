class Employee:
    def __init__(self , name , salary, dept):
        self.name = name
        self.__salary = salary
        self.dept  = dept

    def show(self):
        print("Name : " , self.name , "Salary :" , self.__salary , 'Dept:', self.dept)
        

instancename = input("Name:")
instancedept = input("dept:")
instancesalary = input("salary:")
s = Employee( instancename , instancesalary , instancedept)
s.show()
        