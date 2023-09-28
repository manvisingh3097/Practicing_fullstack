def is_sum_product_number(n):
    digits = [int(digit) for digit in str(n)]
    sum_of_digits = sum(digits)
    product_of_digits = 1
    for digit in digits:
        product_of_digits *= digit
    return n == sum_of_digits * product_of_digits

# Read the number of test cases
T = int(input())

# Loop through each test case
for _ in range(T):
    # Read the number for this test case
    num = int(input())
    
    # Check if the number is a Sum-Product Number
    if is_sum_product_number(num):
        print("Yes")
    else:
        print("No")
