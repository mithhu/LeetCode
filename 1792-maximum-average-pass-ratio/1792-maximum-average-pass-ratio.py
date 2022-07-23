class Solution(object):
    def maxAverageRatio(self, classes, extraStudents):
        def profit(a, b):
            return (a + 1) / (b + 1) - a / b

        maxHeap = []
        for a, b in classes:
            a, b = a * 1.0, b * 1.0  # Convert int to double
            maxHeap.append((-profit(a, b), a, b))
        heapq.heapify(maxHeap)  # Heapify maxHeap cost O(N)

        for _ in range(extraStudents):
            d, a, b = heapq.heappop(maxHeap)
            heapq.heappush(maxHeap, (-profit(a + 1, b + 1), a + 1, b + 1))

        return sum(a / b for d, a, b in maxHeap) / len(classes)