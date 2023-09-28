class Calculate:
    def addition(self , *args):
        if not args:
            return 0
        return sum(args)
        
cal = Calculate()
print("sum value:",cal.addition())
print("sum value:",cal.addition(4,5))
print("sum value:",cal.addition(5,5))