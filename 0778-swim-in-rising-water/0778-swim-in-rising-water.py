class Solution:
    def swimInWater(self, grid: List[List[int]]) -> int:
        R = len(grid)
        C = len(grid[0])
        directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
        visit = set()
        min_heap = [(grid[0][0], 0, 0)]
        
        while min_heap:
            t, r, c = heapq.heappop(min_heap)
            
            if r == R - 1 and c == C - 1:
                return t
            
            for r1, c1 in directions:
                nr = r + r1
                nc = c + c1
                
                if nr < 0 or nc < 0 or nr == R or nc == C or (nr, nc) in visit:
                    continue
                visit.add((nr, nc))
                heapq.heappush(min_heap, (max(grid[nr][nc], t), nr, nc))
            
            
                              

        