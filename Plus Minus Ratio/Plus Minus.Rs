fn plusMinus(arr: &[i32]) {
    let mut pos = 0;
    let mut neg = 0;
    let mut zero = 0;
    
    for x in arr
    {
        if x > &0
        {
            pos += 1;
        }
        else if x < &0
        {
            neg += 1;
        }
        else
        {
            zero += 1;
        }
    }
    
    //Below was done by AI since the documentation was not providing clear ways on how to get decimals
    // convert counts and size to floats for precise division
    let size = arr.len() as f64;
    let pos_f = pos as f64;
    let neg_f = neg as f64;
    let zero_f = zero as f64;

    // print ratios with six decimal places
    println!("{:.6}", pos_f / size);
    println!("{:.6}", neg_f / size);
    println!("{:.6}", zero_f / size);
}