#include <vector>;
#include <iostream>;
using namespace std;

void plusMinus(vector<int> arr) {
    int pos = 0;
    int neg = 0;
    int zero = 0;
    for(int a : arr)
    {
        if(a > 0)      //Positive
            pos++;
        else if(a < 0) //Negative
            neg++;
        else           //Actually 0
            zero++;
    }
    
    int size = arr.size();
    double results = (pos * 1000000/size);
    cout << (results / 1000000) << "\n";
    results = (neg * 1000000/size);
    cout << (results / 1000000) << "\n";
    results = (zero * 1000000/size);
    cout << (results / 1000000) << "\n";
}