def points(games):
    total_point = 0
    
    for game in games:
        x = int(game[0])
        y = int(game[2])
        
#         print(x,y)
        
        if x > y:
            total_point += 3
        elif x == y:
            total_point += 1
    return total_point