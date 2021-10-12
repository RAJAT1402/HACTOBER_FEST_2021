//Program for Heap Sort
#include<iostream>
#include <chrono>
using namespace std::chrono;
using namespace std;

void heapify(int arr[], int n, int i) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest])
      largest = left;

    if (right < n && arr[right] > arr[largest])
      largest = right;

    if (largest != i) {
      swap(arr[i], arr[largest]);
      heapify(arr, n, largest);
    }
  }

  // main function to do heap sort
  void heapSort(int arr[], int n) {
    // Build max heap
    for (int i = n / 2 - 1; i >= 0; i--)
      heapify(arr, n, i);

    for (int i = n - 1; i >= 0; i--) {
      swap(arr[0], arr[i]);

       heapify(arr, i, 0);
    }
  }

int main(){
int arr[10], n;
cout<<"\t\t\tSANIDHAY GROVER \n\t\t\t43-IT-19\n";
cout<<"Enter number of elements : ";
cin>>n;
cout<<"Enter Array :\n";
for(int i=0;i<n;i++){
    cin>>arr[i];
}
auto start = high_resolution_clock::now();
    heapSort(arr, n);

cout<<"Array after Sorting is : \n";
for(int i=0;i<n;i++){
    cout<<arr[i]<<"  ";
}
    auto stop = high_resolution_clock::now();
    auto duration = duration_cast<microseconds>(stop - start);
    cout<<endl<<"Time taken by Heap Sort: "<< duration.count() << " microseconds" << endl;
return 0;
}


