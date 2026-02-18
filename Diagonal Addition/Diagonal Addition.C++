#include <vector>
using namespace std;
int diagonalDifference(vector<vector<int>> arr) 
{
    int topL = 0;
    int topR = 0;
    
    for(int i = 0; i < arr.size(); i++)
    {
        topL += arr.at(i).at(i);
        topR += arr.at(i).at(arr.size() - 1 - i);
    }
    
    int answer = topL - topR;
    if(answer < 0)
        answer *= -1;
    return answer;
}