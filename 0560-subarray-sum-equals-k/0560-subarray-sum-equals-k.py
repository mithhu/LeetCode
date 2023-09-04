class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        cur_sum = 0
        prefix_sum = { 0: 1}
        res = 0
        
        for n in nums:
            cur_sum += n
            diff = cur_sum - k
            
            res += prefix_sum.get(diff, 0)
            prefix_sum[cur_sum] = 1 + prefix_sum.get(cur_sum, 0)
        return res