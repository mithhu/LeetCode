class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        q = collections.deque()
        fresh = 0
        time = 0
        visited = set()
        R = len(grid)
        C = len(grid[0])

        for r in range(R):
            for c in range(C):
                if grid[r][c] == 1:
                    fresh += 1
                if grid[r][c] == 2:
                    q.append((r, c))
                    visited.add((r, c))

        directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
        while fresh > 0 and q:
            for i in range(len(q)):
                r, c = q.popleft()

                for dr, dc in directions:
                    row, col = r + dr, c + dc
                    # if in bounds and nonrotten, make rotten
                    # and add to q
                    if row < 0 or col < 0 or row == R or col == C or grid[row][col] != 1 or (row, col) in visited:
                        continue
                    
                    q.append((row, col))
                    visited.add((row, col))
                    fresh -= 1
            time += 1
        return time if fresh == 0 else -1
