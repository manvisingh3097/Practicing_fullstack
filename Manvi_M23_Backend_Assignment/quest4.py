#find longest play time for each video

videos = {'Tuple in Python': [13.0, 134.5, 89.3, 98.4],

         'Lists in Python': [72.0, 83.5, 90.3, 98.4],

         'Dictionary in Python': [41.0, 114.5, 62.3, 198.4]  }

for k,v in videos.items():
    maxtime = 0
    for i in v:
        if i > maxtime:
            maxtime=i
    print(maxtime)