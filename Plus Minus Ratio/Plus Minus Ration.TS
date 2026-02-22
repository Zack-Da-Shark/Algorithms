function plusMinus(arr: number[]): void {
    let pos: number = 0;
    let neg: number = 0;
    let zero: number = 0;
    let i : number;
    for(i = 0; i < arr.length; i++)
    {
        if(arr[i] > 0)
            pos++;
        else if(arr[i] < 0)
            neg++;
        else
            zero++;
    }   
    
    let size: number = arr.length;
    console.log(pos/size);
    console.log(neg/size);
    console.log(zero/size);

}