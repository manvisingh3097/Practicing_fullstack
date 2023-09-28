Channels = ["Indie Folk Central", "RoadTravelledLess", "Netflix", "PlayStation" , "RoadTravelledLess", "Python is Awesome" , "JavaScript" ]

#Output: ["Indie Folk Central" , "RoadTravelledLess" , "Python is Awesome"]

#iterating through each string and count the no. of characters in each string , if th e no. i> than 15 , return the string.
visited = []

def names(channels):
    for i in channels:
        if len(i)>15 and i not in visited:
            visited.append(i) 
            print(i)

    
names(Channels)

