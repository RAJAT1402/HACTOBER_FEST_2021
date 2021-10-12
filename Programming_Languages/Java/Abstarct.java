abstract class Vehicle{
    public abstract void vehicleInfo();
    public void vehicleGear(){
        System.out.println("Vehicle starts in 1st Gear!");
    }
}

class Car extends Vehicle{
    public void vehicleInfo(){
        System.out.println("---This Vehicle is of type Car---");
    }
    final void carInfo(){
        System.out.println("This car is honking!");
    }
}

public class Abstarct {
public static void main(String[] args) {
    System.out.println("\nThis is a program to implement abstarct class and final keyword concepts");
    Car c = new Car();
    c.vehicleInfo();
    c.vehicleGear();
    c.carInfo();
}

}
