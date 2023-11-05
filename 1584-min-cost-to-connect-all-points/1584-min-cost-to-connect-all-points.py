class Solution:
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        N = len(points)
        adj = {i: [] for i in range(N)}
        
        for i in range(N):
            x1, y1 = points[i]
            for j in range(i+1, N):
                x2, y2 = points[j]
                dist = abs(x1 - x2) + abs(y1 - y2)
                adj[i].append((j, dist))
                adj[j].append((i, dist))
        
        visited = set()
        res = 0
        min_h = [(0, 0)]
        
        while len(visited) < N:
            w, n = heapq.heappop(min_h)
            if n in visited:
                continue
            
            visited.add(n)
            res += w
            
            for n1, w1 in adj[n]:
                if n1 not in visited:
                    heapq.heappush(min_h, (w1, n1))
        
        return res
            
                
        
        