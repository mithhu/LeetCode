class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        l = 1
        r = max(piles)
        res = r
        
        while l <= r:
            k = (l + r) // 2
            hour = 0
            
            for p in piles:
                hour += math.ceil(p / k)
            if hour <= h:
                res = min(res, k)
                r = k - 1
            else:
                l = k + 1
        return res