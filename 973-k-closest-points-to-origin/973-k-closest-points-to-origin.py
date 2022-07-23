class Solution:
    def kClosest(self, points: List[List[int]], K: int) -> List[List[int]]:
        maxH = []
        for i in range(len(points)):
            value = -(points[i][0]**2 + points[i][1]**2)
            heapq.heappush(maxH, (value, (points[i][0], points[i][1])))
            if len(maxH) > K:
                heapq.heappop(maxH)
        res = []
        while len(maxH)>0:
            res.append(maxH[0][1])
            heapq.heappop(maxH)
        return res
