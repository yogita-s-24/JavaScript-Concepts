def get_missing_element(seq): 
    seq.sort()
    print(seq)
    
    for i in range(0, 10):
        if i not in seq:
            return i