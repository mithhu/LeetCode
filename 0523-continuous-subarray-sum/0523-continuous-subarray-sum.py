class Solution:
    def checkSubarraySum(self, nums: List[int], k: int) -> bool:
        remainder_map = { 0: -1}
        pref_sum = 0
        
        for i, num in enumerate(nums):
            pref_sum += num
            r = pref_sum % k
            
            if r not in remainder_map:
                remainder_map[r] = i
            elif i - remainder_map[r] >= 2:
                return True
        return False
        