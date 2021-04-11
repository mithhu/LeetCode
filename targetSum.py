class Solution:
    def findTargetSumWays(self, nums: List[int], S: int) -> int:
        total = 0
        count = 0
        for i in range(len(nums)):
            total += nums[i]
            if nums[i] == 0:
                count += 1

        if S > total:
            return 0
        if (total - S) % 2 != 0:
            return 0

        s1 = int((total - S) // 2)
        row = len(nums) + 1
        column = s1 + 1
        K = [[0 for i in range(column)] for w in range(row)]
        for i in range(column):
            K[0][i] = 0
        for i in range(row):
            K[i][0] = 1

        for i in range(1, row):
            for j in range(1, column):
                if(nums[i-1] == 0):
                    K[i][j] = K[i-1][j]
                elif(nums[i-1] <= j):
                    K[i][j] = K[i-1][j] + K[i-1][j - nums[i-1]]
                else:
                    K[i][j] = K[i-1][j]
        return (2**count)*K[-1][-1]
