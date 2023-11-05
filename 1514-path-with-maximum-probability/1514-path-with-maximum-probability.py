class Solution:
    def maxProbability(self, n: int, edges: List[List[int]], succProb: List[float], start_node: int, end_node: int) -> float:
        adj = {}
        for i in range(n):
            adj[i] = []
        
        for i in range(len(edges)):
            s, d = edges[i]
            p = succProb[i]
            adj[s].append((d, p))
            adj[d].append((s, p))
        
        
        visited = set()
        max_heap = [(-1, start_node)]
        
        while max_heap:
            p, v = heapq.heappop(max_heap)
            if v == end_node:
                return p * -1
            
            visited.add(v)
            
            for nei, p_n in adj[v]:
                if nei not in visited:
                    heapq.heappush(max_heap, (p * p_n, nei))
        return 0
        
        
            
        