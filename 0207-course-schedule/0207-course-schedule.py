class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        adj = {}
        for i in range(numCourses):
            adj[i] = []
        
        for c, p in prerequisites:
            adj[c].append(p)
        
        visit = set()
        path = set()
        
        def dfs(c):
            if c in path:
                return False
            
            if c in visit:
                return True
            
            path.add(c)
            visit.add(c)
            for nei in adj[c]:
                if not dfs(nei):
                    return False
            
            path.remove(c)
            return True
        
        for c in range(0, numCourses):
            if not dfs(c):
                return False
        return True
        
        
        
        