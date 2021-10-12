//Program for Selection Sort
#include<iostream>
using namespace std;
int main(){
    cout<<"\t\t\tSANIDHAY GROVER \n\t\t\t43-IT-19\n";
    int n = 5;
    int p[] = {5, 4, 6, 2, 7};
    int m[5][5] = {0};
    int s[5][5] = {0};
    int j, minimum ,q;
    for(int d=1;d<n-1;d++){
        for(int i=1;i<n-d;i++){
            j = i+d;
            minimum = 3277;
            for(int k=i;k<=j-1;k++){
                q = m[i][k] + m[k+1][j] + p[i-1]*p[k]*p[j];
                if(q < minimum){
                    minimum = q;
                    s[i][j] = k;
                }
            }
            m[i][j] = minimum;
        }
    }
    cout<<endl<<"Minimum number of multiplications required are : "<<m[1][n-1];
}
