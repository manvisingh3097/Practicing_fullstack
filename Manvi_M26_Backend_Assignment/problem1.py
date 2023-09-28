Array: [42, 564, 5775, 34, 123, 454, 1, 5, 45, 3556, 23442]

def count_digits(num):
    count = 0
    while num > 0:
        num //= 10
        count += 1
    return count

def even_digit_elements(arr):
    result = []
    for num in arr:
        if count_digits(num) % 2 == 0:
            result.append(num)
    return result

# Read the number of test cases
T = int(input())
for _ in range(T):
    # Read the number of elements and the array
    n, *arr = map(int, input().split())
    
    # Find elements with even number of digits
    result = even_digit_elements(arr)
    
    # Print the result for this test case
    print(" ".join(map(str, result)))
