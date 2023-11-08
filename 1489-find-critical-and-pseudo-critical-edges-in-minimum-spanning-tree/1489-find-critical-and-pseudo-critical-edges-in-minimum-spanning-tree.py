class UnionFind:
    def __init__(self, n):
        self.par = [i for i in range(n)]
        self.rank = [1] * n 

    def find(self, v):
        while v != self.par[v]:
            self.par[v] = self.par[self.par[v]]
            v = self.par[v]
        return v

    def union(self, n1, n2):
        p1 = self.find(n1) 
        p2 = self.find(n2)
        if p1 == p2:
            return False
        if self.rank[p1] > self.rank[p2]:
            self.par[p2] = p1
            self.rank[p1] += self.rank[p2]
        else:
            self.par[p1] = p2
            self.rank[p2] += self.rank[p1]
        return True 

class Solution:
    def findCriticalAndPseudoCriticalEdges(self, n: int, edges: List[List[int]]) -> List[List[int]]:

        for i, e in enumerate(edges):
            e.append(i)
        
        edges.sort(key=lambda e:e[2])
        
        mst_weight = 0
        uf = UnionFind(n)
        
        for n1, n2, w1, i in edges:
            if uf.union(n1, n2):
                mst_weight += w1
        
        critical, pseudo = [], []
        for n1, n2, w, i in edges:
            #critical -> skip this idx
            weight = 0
            uf = UnionFind(n)
            
            for v1, v2, v_w, j in edges:
                if i != j and uf.union(v1, v2):
                    weight += v_w                
                    
            if n != max(uf.rank) or weight > mst_weight:
                critical.append(i)
                continue
            
            #psuedo
            uf = UnionFind(n)
            uf.union(n1, n2)
            weight = w
            for v1, v2, v_w, j in edges:
                if uf.union(v1, v2):
                    weight += v_w
            if weight == mst_weight:
                pseudo.append(i)
        return [critical, pseudo]
                