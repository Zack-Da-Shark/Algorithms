public class DiagonalAddition
{
    public static int diagonalDifference(List<List<Integer>> arr)
    {
        int topL = 0;
        int topR = 0;
        for(int i = 0; i < arr.size(); i++)
        {
            topL += arr.get(i).get(i); //Top left to bottom right
            topR += arr.get(i).get(arr.size() - 1 - i); //Top right to bottom left
        }
        int asnrwe = topL - topR;
        if(asnrwe < 0) //If negative
            asnrwe *= -1;
        return asnrwe;
    }

    //This is just the method, very modulabe, less bloatware code
}