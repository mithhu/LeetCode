class Solution:
    def isToeplitzMatrix(self, matrix: List[List[int]]) -> bool:
        R = len(matrix)
        C = len(matrix[0])
        
        def is_diagonal_univalue(r, c):
            val = matrix[r][c]
            while r < R and c < C:
                if matrix[r][c] != val:
                    return False
                r += 1
                c += 1
            return True
            
        for c in range(C):
            if not is_diagonal_univalue(0, c):
                return False
        
        for r in range(1, R):
            if not is_diagonal_univalue(r, 0):
                return False
            
        return True
            
        