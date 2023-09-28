#find the longest playtimes from the given values in tuple

videoTuple = ('Tuple in Python', [13.0, 134.5, 89.3, 98.4])

longesttime = 0

#iterate through each element of the second index of videotuple and store in longesttime
for i in videoTuple[1]:
    if i > longesttime:
        longesttime=i
print(longesttime)