class Solution:
    def findBuildings(self, heights: List[int]) -> List[int]:
        if not heights:
            return []
        
        max_h = heights[-1]
        res = collections.deque([len(heights) - 1])
        
        for i in range(len(heights) - 2, -1, -1):
            curr_h = heights[i]
            if curr_h > max_h:
                max_h = curr_h
                res.appendleft(i)
        return res
        