# Read the number of test cases
T = int(input())

# Loop through each test case
for _ in range(T):
    # Read the number for this test case
    num = input()
    
    # Calculate the sum of digits
    digit_sum = sum(int(digit) for digit in num)
    
    # Print the sum of digits for this test case
    print(digit_sum)
