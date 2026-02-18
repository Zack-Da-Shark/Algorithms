function diagonalDifference(arr: number[][]): number {
    let topL: number = 0;
    let topR: number = 0;
    let i : number;
    for(i = 0; i < arr.length; i++)
    {
        topL += arr[i][i];
        topR += arr[i][arr.length - i - 1]
    }
    
    let answer: number = topL - topR;
    if(answer < 0)
        answer *= -1;
    return answer;
}