class MovingAverage:

    def __init__(self, size: int):
        self.size = size
        self.sum = 0
        self.arr = collections.deque([])
        self.count = 0
        

    def next(self, val: int) -> float:
        self.count += 1
        self.arr.append(val)
        self.sum += val
        if self.count > self.size: 
            leftval = self.arr[0]
            self.sum -= leftval
            self.arr.popleft()
        
        return self.sum / min(self.count, self.size)
        


# Your MovingAverage object will be instantiated and called as such:
# obj = MovingAverage(size)
# param_1 = obj.next(val)