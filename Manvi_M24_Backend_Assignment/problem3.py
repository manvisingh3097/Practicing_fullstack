class BankAccount:
    def __init__(self , accountNumber , name , balance ):
        self.account_number = accountNumber
        self.name=name
        self.balance  = balance

    def Deposit(self , amount):
        self.balance = self.balance + amount
        return self.balance
    
    def Withdrawal(self , amount):
        self.balance = self.balance - amount
        return self.balance
    
    def display(self):
        print("Account number:" , self.account_number)
        print("Acc Holder name:" , self.name)
        print("Account Balance:" , self.balance)
    
    
AccountNumber = int(input("Enter Account Numbe: "))
Name = input("Enter Account holder Name: ")
initialbalance = int(input("Enter balance: "))
account = BankAccount(AccountNumber , Name , initialbalance)
account.Withdrawal(100)
account.display()
