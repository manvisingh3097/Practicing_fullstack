inputwa = [10.5, 45.67, 32.3, 9.28, 7.3, 55.67, 123.4, 11.2, 6.25, 3.9]

maxwa = inputwa[0]

for i in inputwa:
    if i > maxwa :
        maxwa = i
    else:
        continue
print(maxwa)