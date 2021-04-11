# class Solution:
def getHint(secret: str, guess: str) -> str:
    guess_map = {}
    secret_map = {}
    idx1 = 0
    A = 0
    B = 0
    # idx2 = 0
    while idx1 < len(secret):
        if secret[idx1] == guess[idx1]:
            A += 1
        else:
            if idx1 in guess_map:
                guess_map[idx1] += 1
            else:
                guess_map[idx1] = 1
            if idx1 in secret_map:
                secret_map += 1
            else:
                secret_map[idx1] = 1
        idx1 += 1

    for i in guess_map:
        B += min(guess_map[i], secret_map[i])
    return str(A)+"A"+str(B)+"B"


print(getHint("1122", "1222"))
