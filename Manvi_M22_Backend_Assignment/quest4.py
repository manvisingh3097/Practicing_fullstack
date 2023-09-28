channels = ["Indie Folk", "RoadTravelled", "MusicStation", "Python", "JavaScript"]

givenwords = ["Music", "song", "folk"]

#looping through each elememt in channels and check if channels contains the given words and append thhe channels in the new list .

def containwa(channels , givenwords):
    newchannels = []
    for i in channels:
        for j in givenwords:
            if j.lower() in (i.lower()):
                newchannels.append(i)
    return newchannels

print(containwa(channels , givenwords))