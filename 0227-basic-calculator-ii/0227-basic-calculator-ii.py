class Solution:
    def calculate(self, s: str) -> int:
        i = 0
        curr = 0
        res = 0
        prev = 0
        curr_oper = "+"
        
        while i < len(s):
            curr_char = s[i]
            if curr_char.isdigit():
                while i < len(s) and s[i].isdigit():
                    curr = curr * 10 + int(s[i])
                    i += 1
                i -= 1
                
                if curr_oper == "+":
                    res += curr
                    prev = curr
                
                elif curr_oper == "-":
                    res -= curr
                    prev = -curr
                
                elif curr_oper == "*":
                    res -= prev 
                    res += curr * prev
                    prev = curr * prev
                    
                
                else:
                    res -= prev 
                    res += int(prev / curr)
                    prev = int(prev / curr)
                
                curr = 0
            elif curr_char != " ":
                curr_oper = curr_char
            i += 1
        return res
        