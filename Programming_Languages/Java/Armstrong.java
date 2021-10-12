import java.util.*;
public class Armstrong {
    public static void main(String[] args){
        Scanner scn = new Scanner(System.in);
        System.out.print("Enter a number :  ");
        int n = scn.nextInt();
        int temp = n;
        int rev = 0;
        while(temp!=0){
            rev += Math.pow(temp%10,3);
            temp/=10;
        }
        if(rev == n){
            System.out.println("Armstrong Number : ");
        }
        else{
            System.out.println("Not an Armstrong Number");
        }
        scn.close();
    }
}
