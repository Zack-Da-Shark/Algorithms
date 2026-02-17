#include <iostream>
#include <string>

using namespace std;
int main()
{
    long sum = 0;
    while(true)
    {
        string s;
        cout << "Type XXX to exit, else type a number to add to the sum" << endl;
        cin >> s;
        if(s == "XXX")
        {
            cout << "The final sum is: " << sum << endl;
            break;
        }
        else
        {
            try 
            {
                //Convert string to long using the stol function
                sum += stol(s);
                cout << "The current sum is: " << sum << endl;
            }
            catch (const invalid_argument& e)
            {
                cout << "Invalid input you silly pizza" << endl;
            }
        }
    }
}