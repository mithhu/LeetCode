# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def verticalOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []
        res = []
        min_x = float('inf')
        max_x = float('-inf')
        
        order_items = collections.defaultdict(list)
        
        queue = collections.deque([(0, root)])
        
        while queue:
            x, node = queue.popleft()
            order_items[x].append(node.val)
            
            min_x = min(min_x, x)
            max_x = max(max_x, x)
            
            if node.left:
                queue.append((x - 1, node.left))
            if node.right:
                queue.append((x + 1, node.right))
        
        
        for col in range(min_x, max_x + 1):
            res.append(order_items[col])
        
        return res
        