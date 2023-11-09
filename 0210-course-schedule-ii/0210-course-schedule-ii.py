class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        adj = {}
        for i in range(numCourses):
            adj[i] = []
        
        for c, p in prerequisites:
            adj[c].append(p)
        
        visit = set()
        path = set()
        result = []
        
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
            result.append(c)
            return True
        
        for c in range(numCourses):
            if not dfs(c):
                return []
        return result
        