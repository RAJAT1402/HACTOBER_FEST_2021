// import java.io.*;

import java.util.*;

public class BinarySearch {

  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    System.out.println("Enter size of array");
    int n = scn.nextInt();
      int[] arr = new int[n];
      System.out.println("Enter Elements of array");
      for(int i=0; i<n; i++){
          arr[i] = scn.nextInt();
      }
      System.out.println("Enter no. you find from array ");
      int data = scn.nextInt(); 
    
    int l = 0;
    int h = arr.length - 1;

    while (l <= h) {
      int m = (l + h) / 2;
      if (data > arr[m]) {
        l = m + 1;
      } else if (data < arr[m]) {
        h = m - 1;
      } else {
        System.out.println(m);
        return;
      }
    }
    System.out.println("Element not found");
   
  }
}
