
def isValid( s: str) -> bool:
    obj = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    queue = []
    for i in s:
        if i in obj:
            # print(obj[i] == queue[-1])
            if obj[i] == queue[-1]: 
                queue.pop()
            else:
                return "false"
        else:
            queue.append(i)
    print(len(queue))
    return "true" if len(queue) == 0 else "false"

print(isValid("(]"))