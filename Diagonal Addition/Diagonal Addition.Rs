fn diagonalDifference(arr: &[Vec<i32>]) -> i32 {
    let mut topL = 0;
    let mut topR = 0;
    let mut count = 0;
    while count < arr.len()
    {
        topL += arr[count][count];
        topR += arr[count][arr.len() - 1 - count];
        count+= 1;
    }
    
    let mut answer = topL - topR;
    if answer < 0
    {
        answer *= -1;
    }
    return answer
}