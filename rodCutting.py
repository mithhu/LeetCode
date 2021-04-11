def rodCutting(arr):
    row = len(arr) + 1
    column = len(arr) + 1

    l = [1, 2, 3, 4, 5, 6, 7, 8]

    K = [[float("-inf") for x in range(column)] for y in range(row)]
    for i in range(column):
        K[i][0] = 0
    for i in range(row):
        K[0][i] = 0

    for i in range(1, row):
        for j in range(1, column):
            if(l[i-1] <= j):
                K[i][j] = max(K[i-1][j], arr[i-1] + K[i][j - l[i-1]])
            else:
                K[i][j] = K[i-1][j]
    return K[-1][-1]


arr = [1, 5, 8, 9, 10, 17, 17, 20]
print(rodCutting(arr))
