class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        row = [1] * n
        
        for i in range(m - 1):
            new_row = [1] * n
            for c in range(n-2, -1, -1):
                new_row[c] = new_row[c + 1] + row[c]
            row = new_row
        
        return row[0]
        