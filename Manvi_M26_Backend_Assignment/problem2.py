# Read the weights as a list of integers
weights = list(map(int, input().split()))

# Calculate the sum of all weights
total_weight = sum(weights)

# Calculate the average by dividing the total weight by the number of students
average_weight = total_weight / len(weights)

# Print the average weight with exactly 6 decimal places
print(format(average_weight, ".6f"))
