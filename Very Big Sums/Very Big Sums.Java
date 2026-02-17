import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

class IDKAGOODNAME
{
    public static void main(String[] args)
    //Simple read from user input
    {
        Scanner input = new Scanner(System.in);
        long sum = 0;
        while(true)
        {
            System.out.println("Type XXX to exit, else type a number to add to the sum");
            String line = input.nextLine();
            if(line.equals("XXX"))
            {
                System.out.println("The final sum is: " + sum);
                break;
            }
            else
            {
                try 
                {
                    sum += Long.parseLong(line);
                    System.out.println("Current sum: " + sum);
                } 
                catch (NumberFormatException e) 
                {
                    System.out.println("Invalid input you silly donut");
                }
            }
        }
    }
}