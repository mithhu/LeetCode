class Solution:
    def shortestBridge(self, grid: List[List[int]]) -> int:
        N = len(grid)
        visit = set()
        directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
        
        def is_invalid(r, c):
            return r < 0 or c < 0 or r == N or c == N
        
        
        def dfs(r, c):
            if is_invalid(r,c) or not grid[r][c] or (r, c) in visit:
                return
            visit.add((r, c))
            for dr, dc in directions:
                dfs(r + dr, c + dc)
        
        
        def bfs():
            q = deque(visit)
            res = 0;
            while q:
                for i in range(len(q)):
                    r, c = q.popleft()
                    for dr, dc in directions:
                        cur_r = dr + r
                        cur_c = dc + c
                        if is_invalid(cur_r, cur_c) or (cur_r, cur_c) in visit:
                            continue
                        if grid[cur_r][cur_c]:
                            return res
                        q.append([cur_r, cur_c])
                        visit.add((cur_r, cur_c))
                res += 1
        
        
        
        
        for r in range(N):
            for c in range(N):
                if grid[r][c]:
                    dfs(r, c)
                    return bfs()
        