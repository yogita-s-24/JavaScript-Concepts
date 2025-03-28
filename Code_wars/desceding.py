def descending_order(num):
    newNum = str(num)
    newDigits = []
    
    for char in newNum:
        newDigits.append(int(char))
            
    for i in range (len(newDigits)):
        for j in range(0, len(newDigits) - i - 1):
            if newDigits[j] < newDigits[j + 1]:
                        
                newDigits[j], newDigits[j+1] = newDigits[j+1], newDigits[j]
    result = 0
    for newDigit in newDigits:
        result = result * 10 + newDigit
    return result
    print(result)