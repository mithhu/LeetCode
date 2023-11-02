class Solution:
    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:
        if grid[0][0] or grid[-1][-1]:
            return -1
        
        N = len(grid)
        q = deque();
        q.append((0, 0, 1))
        visited = set()
        visited.add((0, 0))
        
        directions = [[0, 1], [1, 0], [-1, 0], [0, -1], [1, -1], [1, 1], [-1, 1], [-1, -1]]
        
        
        while q:
            r, c, length = q.popleft()
            
            if r == N - 1 and c == N - 1:
                return length;
            
            for dr, dc in directions:
                nr = r + dr
                nc = c + dc
                
                if nr < 0 or nc < 0 or nr == N or nc == N or (nr, nc) in visited or grid[nr][nc]:
                    continue
                q.append((nr, nc, 1 + length))
                visited.add((nr, nc))
        return -1