class Employee:
    def __init__(self , name , salary, dept):
        self.name = name
        self.__salary = salary
        self.dept  = dept

    def show(self):
        print("Name : " , self.name , "Salary :" , self.__salary , 'Dept:', self.dept)
    
    def update_name (self, update_name ):
        self.name = update_name



instancename = input("Name:")
instancedept = input("dept:")
instancesalary = input("salary:")
update_name = input("update_name: ")
s = Employee( instancename , instancesalary , instancedept)
s.show()
s.update_name(update_name)
s.show()
try:
    print(s.__salary)
except Exception as e:
    print(e)


