playDuration = 120

subscribers = 5400567

amount = 10

def playtime(playDuration , subscribers):
    if (playDuration > 1000  and subscribers > 1000000 ):
        return amount + 40
    elif (playDuration > 500 and subscribers > 500000):
        return amount + 30
    elif (playDuration > 100 and subscribers > 100000):
        return amount + 20
    
print (playtime(120 , 5400567))