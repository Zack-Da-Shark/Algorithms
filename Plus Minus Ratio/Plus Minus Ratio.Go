func plusMinus(arr []int32) {
    var pos int8 = 0
    var neg int8 = 0
    var zero int8 = 0
    
    for i := 0; i < len(arr); i++{
        if arr[i] > 0{
            pos++
        } else if arr[i] < 0{
            neg++
        } else{
            zero++
        }
    }
    
    var size int = len(arr)
    fmt.Println(float64(pos) / float64(size))
	fmt.Println(float64(neg) / float64(size))
	fmt.Println(float64(zero) / float64(size))
}