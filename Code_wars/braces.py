def validBraces(s):
    stack = []
    matching_braces = {')': '(', '}': '{', ']': '['}

    for char in s:
        if char in matching_braces.values():  
            stack.append(char)
        elif char in matching_braces:  
            if not stack or stack[-1] != matching_braces[char]:
                return False
            stack.pop()

    return not stack 