from abc import ABC, abstractmethod

class Bank(ABC):
    def bank_info(self):
        print("Welcome to bank")

    @abstractmethod
    def interest(self):
        pass

class SBI(Bank):
    def interest(self):
        print("In sbi bank 5 rupees interest")

class axis(Bank):
    def interest(self):
        print("In sbi bank 8 rupees interest")

class hdfc(Bank):
    def interest(self):
        print("In hdfc bank 8 rupees interest")

SBI = SBI()
SBI.bank_info()
SBI.interest()

axis  = axis()
axis.bank_info()
axis.interest()



hdfc  = hdfc()
hdfc.bank_info()
