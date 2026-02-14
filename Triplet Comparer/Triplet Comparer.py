#!/bin/python3

import math
import os
import random
import re
import sys

def compareTriplets(a, b):
    alice = 0
    bob = 0
    for x, y in zip(a, b): #Use a zip to "combine" the 2 arrays, easy to get values
        if(x > y):
            alice += 1
        elif(y > x):
            bob += 1
        # Do nothing if the same
    results = [alice, bob]
    return results

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    a = list(map(int, input().rstrip().split()))

    b = list(map(int, input().rstrip().split()))

    result = compareTriplets(a, b)

    fptr.write(' '.join(map(str, result)))
    fptr.write('\n')

    fptr.close()
