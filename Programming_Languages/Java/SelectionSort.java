import java.util.*;

public class SelectionSort{
      public static void main(String[] args){
	   Scanner scn=new Scanner(System.in);
           System.out.print("Enter the size of array:");
           int n=scn.nextInt();
	   int[] a=new int[n];
           System.out.println("Enter the elements of array:");
	   for(int i=0;i<n;i++){
	        a[i]=scn.nextInt();
	   }
	   long start = System.nanoTime();
       Sorting(a);
       display(a);
       long end = System.nanoTime();
       long elapsedTime = end - start; 
       System.out.println("Total Time:" + elapsedTime + " nano seconds");
      }
 
      public static void display(int[] a){
           System.out.println("Sorted aaray:");
	  for(int i=0;i<a.length;i++){
		System.out.println(a[i] + " ");
	  }
      }

      public static void Sorting(int[] a){
	   for(int i=0;i<=a.length - 1;i++){
		int min=i;
		for(int j=i + 1 ;j<a.length;j++){
		     if(isSmaller(a,j,min)){
			min=j;
		     }
		}
		Swap(a,i,min);
	   }
      }
      
      public static boolean isSmaller(int[] a, int i, int j){
 	 if(a[i] < a[j]){
	      return true;
	 }else{
	      return false;
	 }
      }     

      public static void Swap(int[] a, int i, int j){
	 int temp=a[i];
	 a[i]=a[j];
         a[j]=temp;
      }
}
