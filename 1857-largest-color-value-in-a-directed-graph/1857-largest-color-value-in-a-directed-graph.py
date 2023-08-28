class Solution:
    def largestPathValue(self, colors: str, edges: List[List[int]]) -> int:
        adj = defaultdict(list)
        for src, dst in edges:
            adj[src].append(dst)
        
        res = 0
        n = len(colors)
        count = [[0] * 26 for _ in range(n)]
        visit = set()
        cycle = set()
        
        def dfs(node):
            if node in cycle:
                return float("inf")
            if node in visit:
                return 0
            
            visit.add(node)
            cycle.add(node)
            
            idx = ord(colors[node]) - ord("a")
            count[node][idx] = 1
            
            for nei in adj[node]:
                if dfs(nei) == float("inf"):
                    return float("inf")
                for c in range(26):
                    count[node][c] = max(count[node][c], (1 if c == idx else 0) + count[nei][c])
            cycle.remove(node)
            return max(count[node])
        
        
        for n in range(n):
            res = max(res, dfs(n))
        
        return -1 if res == float("inf") else res