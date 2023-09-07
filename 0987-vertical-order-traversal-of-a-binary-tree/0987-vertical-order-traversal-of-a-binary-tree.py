# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def verticalTraversal(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []
        level_items = collections.defaultdict(list)
        q = collections.deque([(root, 0, 0)])
        min_col = float("inf")
        max_col = float("-inf")
        
        res = []
        
        while q:
            node, row, col = q.popleft()
            min_col = min(min_col, col)
            max_col = max(max_col, col)
            
            level_items[col].append((node.val, row))
            if node.left:
                q.append((node.left, row + 1, col - 1))
            if node.right:
                q.append((node.right, row + 1, col + 1))
        
        
        for col in range(min_col, max_col + 1):
            items = level_items[col]
            items.sort(key=lambda x: (x[1], x[0]))
            items = [val for val, _ in items]
            res.append(items)
        return res