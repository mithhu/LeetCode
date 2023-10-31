class Solution:
    def minimumSemesters(self, n: int, relations: List[List[int]]) -> int:
        graph = {i: [] for i in range(1, n + 1)}
        
        for node1, node2 in relations:
            graph[node1].append(node2)
        
        visited = {}
        
        def dfs(curr_node):
            if curr_node in visited:
                return visited[curr_node]
            else:
                visited[curr_node] = -1
            
            max_len = 1
            
            
            for end_node in graph[curr_node]:
                length = dfs(end_node)
                
                if length == -1:
                    return -1
                else:
                    max_len = max(max_len, length + 1)
            
            visited[curr_node] = max_len
            return max_len
        
        max_len = -1
        
        for node in graph:
            length = dfs(node)
            if length == -1:
                return -1
            else:
                max_len = max(max_len, length)
        
        return max_len
            
        