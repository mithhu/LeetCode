class Solution:
    def removeInvalidParentheses(self, s: str) -> List[str]:
        self.longest_string = -1
        self.res = set()
        self.dfs(s, 0, [], 0, 0)
        
        return self.res
    
    def dfs(self, s, curr_idx, curr_res, l_count, r_count):
        if curr_idx == len(s):
            if l_count == r_count:
                if len(curr_res) > self.longest_string:
                    self.res = set()
                    self.res.add("".join(curr_res))
                    self.longest_string = len(curr_res)
                
                elif len(curr_res) == self.longest_string:
                    self.res.add("".join(curr_res))
            return
        
        curr_char = s[curr_idx]
        
        if curr_char == "(":
            curr_res.append(curr_char)
            self.dfs(s, curr_idx + 1, curr_res, l_count + 1, r_count)
            curr_res.pop()
            
            self.dfs(s, curr_idx + 1, curr_res, l_count, r_count)
        
        elif curr_char == ")":
            self.dfs(s, curr_idx + 1, curr_res, l_count, r_count)
            
            if l_count > r_count:
                curr_res.append(curr_char)
                self.dfs(s, curr_idx + 1, curr_res, l_count, r_count + 1)
                curr_res.pop()
        else:
            curr_res.append(curr_char)
            self.dfs(s, curr_idx + 1, curr_res, l_count, r_count)
            curr_res.pop()
            
        