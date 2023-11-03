class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        adj = {}
        
        for i in range(1, n + 1):
            adj[i] = []
        
        for s, d, w in times:
            adj[s].append((d, w))
        
        
        visited = set()
        t = 0
        min_heap = [(0, k)]
        
        while min_heap:
            w1, n1 = heapq.heappop(min_heap)
            if n1 in visited:
                continue
            t = w1
            visited.add(n1)
            
            for n2, w2 in adj[n1]:
                if n2 not in visited:
                    heapq.heappush(min_heap, (w1 + w2, n2))
        
        return t if n == len(visited) else -1
            
        
        