def plusMinus(arr):
    pos = 0
    neg = 0
    zero = 0
    for x in arr:
        if x > 0:
            pos = pos + 1
        elif x < 0:
            neg = neg + 1
        else:
            zero = zero + 1
    
    size = len(arr)
    results = (pos * 1000000/size)
    print(results / 1000000)
    results = (neg * 1000000/size)
    print(results / 1000000)
    results = (zero * 1000000/size)
    print(results / 1000000)