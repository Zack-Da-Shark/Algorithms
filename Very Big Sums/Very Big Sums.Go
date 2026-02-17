package main

import "fmt"
import "strconv"

func main(){
    var sum int64 = 0
    for {
        fmt.Println("Type XXX to exit, else type a number to add to the sum")
        var input string
        fmt.Scanln(&input)
        if input == "XXX"{
            fmt.Printf("The final sum is: %d\n", sum)
            break
        }
        var num int64 = 0
        num, err := strconv.ParseInt(input, 10, 64)
        if err != nil {
            fmt.Println("You silly hot dog, that ain't a number!")
            continue
        }
        sum += num
        fmt.Printf("The current sum is: %d\n", sum)
    }
}