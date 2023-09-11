class Solution:
    def isToeplitzMatrix(self, matrix: List[List[int]]) -> bool:
        # r = 0
        # c = 0
        R = len(matrix)
        C = len(matrix[0])
        
        r = 0
        for c in range(C):
            val = matrix[r][c]
            i, j = r, c
            
            while i < R and j < C:
                if matrix[i][j] != val:
                    return False
                i += 1
                j += 1
        
        c = 0
        for r in range(1, R):
            val = matrix[r][c]
            i, j = r, c
            
            while i < R and j < C:
                if matrix[i][j] != val:
                    return False
                i += 1
                j += 1
        return True
            
        