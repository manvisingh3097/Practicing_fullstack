inputwa = [110.5, 145.67, 32.3, 119.28, 7.3, 55.67, 123.4, 11.2, 226.25, 3.9]

hourswa = 120

count = 0

#looping through the each no. in inputwa and checking if any given time is greater then the provided hours and if it is,
# increment rhe count by one

for i in  inputwa:
    if(i > hourswa):
        count += 1
    else:
        continue
print(count)

