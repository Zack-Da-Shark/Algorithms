sum = 0
while(True):
    #Using Try keyword to handle exceptions
    try:
        line = input("Type XXX to exit, else type a number to add to the sum ")
        if line == "XXX":
            print("The final sum is: " + str(sum))
            break
        #An else is unnecessary
        sum += int(line)
        #Converting the sum to string using str
        print('The current sum is: ' + str(sum))
    except ValueError:
        print("Please enter a valid integer")
    except EOFError:
        print("There seems to be an error in the input")
