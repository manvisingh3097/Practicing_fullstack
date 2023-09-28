#sort playtimes in ascending order

video = ["List in Python", [34.5, 19.2, 381.3, 56.2, 16.1]]



# print(sorted(video[1], reverse=True))
(video[1].sort(reverse=True))
print(video[1])


#.sort means we are sorting the original list and not returning anything
#sorted means we are creating a new sorted list and returning new list