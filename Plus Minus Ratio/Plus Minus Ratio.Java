public static void plusMinus(List<Integer> arr) {
    int pos = 0;
    int neg = 0;
    int zero = 0;
    for(int a: arr)
    {
        if(a > 0)      //Positive
            pos++;
        else if(a < 0) //Negative
            neg++;
        else           //Actually 0
            zero++;
    }
    //Just need to do some mathematical magics now
    int size = arr.size();
    double results = (pos * 1000000/size);
    System.out.println(results / 1000000);
    results = (neg * 1000000/size);
    System.out.println(results / 1000000);
    results = (zero * 1000000/size);
    System.out.println(results / 1000000);
}