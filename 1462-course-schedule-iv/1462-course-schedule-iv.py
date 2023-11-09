class Solution:
    def checkIfPrerequisite(self, numCourses: int, prerequisites: List[List[int]], queries: List[List[int]]) -> List[bool]:
        adj = {}
        for i in range(numCourses):
            adj[i] = []
        
        for p, c in prerequisites:
            adj[c].append(p)
        
        
        prereq_map = {}
        
        def dfs(crs):
            if crs not in prereq_map:
                prereq_map[crs] = set()
                for pre in adj[crs]:
                    prereq_map[crs] = prereq_map[crs].union(dfs(pre))
                    # prereq_map[crs] |= dfs(pre)
            prereq_map[crs].add(crs)
            return prereq_map[crs]
        
        for crs in range(numCourses):
            dfs(crs)
        
        res = []
        for u, v in queries:
            res.append(u in prereq_map[v])
        return res
