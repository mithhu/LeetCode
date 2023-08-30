class Solution:
    def numRescueBoats(self, people: List[int], limit: int) -> int:
        res = 0
        l = 0
        r = len(people) - 1
        
        people.sort()
        
        while (l <= r):
            remain = limit - people[r]
            r -= 1
            res += 1
            
            # if r > l:
            #     break
            
            if l <= r and remain >= people[l]:
                l += 1
        return res