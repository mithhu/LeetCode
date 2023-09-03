class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = {}
        
        for n in nums:
            if n not in count:
                count[n] = 0
            count[n] += 1
        
        
        freq = [[] for _ in range(len(nums) + 1)]
        
        for n, f in count.items():
            freq[f].append(n)
        
        
        res = []
        
        for arr in range(len(freq) -1, -1, -1):
            for n in freq[arr]:
                res.append(n)
                if len(res) == k:
                    return res
        
        
        
        