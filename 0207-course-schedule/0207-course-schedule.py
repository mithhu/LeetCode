class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        pre_map = {i: [] for i in range(numCourses)}
        for crs, pre in prerequisites:
            pre_map[crs].append(pre)
            
        visiting = set()
        
        def dfs(c):
            if c in visiting:
                return False
            
            if pre_map[c] == []:
                return True
            
            visiting.add(c)
            for nei in pre_map[c]:
                if not dfs(nei):
                    return False
                
            visiting.remove(c)
            pre_map[c] = []
            return True
        
        for c in range(numCourses):
            if not dfs(c):
                return False
        
        return True
        
        