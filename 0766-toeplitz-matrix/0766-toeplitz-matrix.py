class Solution:
    def isToeplitzMatrix(self, matrix: List[List[int]]) -> bool:
        r = 0
        c = 0
        R = len(matrix)
        C = len(matrix[0])
        
        while r < R and c < C:
            val = matrix[r][c]
            i, j = r, c
            
            while i < R and j < C:
                if matrix[i][j] != val:
                    return False
                i += 1
                j += 1
            c += 1
        
        r = 1
        c = 0
        while r < R and c < C:
            val = matrix[r][c]
            i, j = r, c
            
            while i < R and j < C:
                if matrix[i][j] != val:
                    return False
                i += 1
                j += 1
            r += 1
        return True
            
        