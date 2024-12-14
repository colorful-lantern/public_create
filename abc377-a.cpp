// atcoder abc377-a.cpp

#include <iostream>
using namespace std;

int main(void){
    char X,Y,Z;
    cin >> X >> Y >> Z;
    int cnt = 0;
    if(X=='A'||Y=='A'||Z=='A'){
        cnt++;
    }
    if(X=='B'||Y=='B'||Z=='B'){
        cnt++;
    }
    if(X=='C'||Y=='C'||Z=='C'){
        cnt++;
    }
    if(cnt==3){
        cout << "Yes";
    }else{
        cout << "No";
    }
}
