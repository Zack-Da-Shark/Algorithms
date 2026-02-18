def diagonalDifference(arr):
    topL = 0
    topR = 0
    i = 0
    
    while i < len(arr):
        topL = topL + arr[i][i]
        topR = topR + arr[i][len(arr) - 1 - i]
        i = i + 1
    answer = topL - topR
    if answer < 0:
        answer = answer *-1
    return answer