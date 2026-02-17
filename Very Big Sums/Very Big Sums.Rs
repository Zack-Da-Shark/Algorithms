use std::io;

fn main()
{
    let mut sum: i64 = 0;
    let mut input = String::new();
    loop
    {
        //Clear out value for new input
        input.clear();
        println!("Type XXX to exit, else type a number to add to the sum ");
        io::stdin().read_line(&mut input).expect("Failed to read line");
        if input.trim() == "XXX"
        {
            println!("The final sum is {}", sum);
            break;
        }
        else
        {
            match input.trim().parse::<i64>() {
                Ok(num) => {
                    sum += num;
                    println!("The current sum is {}", sum);
                },
                Err(_) => {
                    println!("Invalid input you silly biscuit");
                }
            }
        }
    }
}