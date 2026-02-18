func diagonalDifference(arr [][]int32) int32 {
    var topL int32 = 0;
    var topR int32 = 0;
    for i := 0; i < len(arr); i++ {
        topL += arr[i][i];
        topR += arr[i][len(arr) - 1 - i];
    }
    
    var answer int32 = topL - topR;
    if answer < 0{
        answer *= -1;
    }
    return answer
}