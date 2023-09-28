# Read the number of test cases
T = int(input())

# Loop through each test case
for _ in range(T):
    # Read the number for this test case
    ni = int(input())
    
    # Compare the number with 7 and print the result
    if ni > 7:
        print("UP")
    elif ni < 7:
        print("DOWN")
    else:
        print("EQUAL")
