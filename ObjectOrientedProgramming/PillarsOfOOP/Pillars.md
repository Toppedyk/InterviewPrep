The four pillars of object-oriented programming (OOP) are:

Encapsulation: Encapsulation is the bundling of data (attributes) and methods (functions) that operate on the data into a single unit called a class. It hides the internal state of an object and only exposes the necessary functionality through methods.

Inheritance: Inheritance is the mechanism by which one class can inherit properties and behavior from another class. The class that is inherited from is called the base class or parent class, and the class that inherits is called the derived class or child class. This allows for code reuse and the creation of hierarchies of related classes.

Polymorphism: Polymorphism allows objects of different classes to be treated as objects of a common superclass. It enables methods to behave differently based on the object they are called on. There are two types of polymorphism: compile-time polymorphism (achieved through method overloading and operator overloading) and runtime polymorphism (achieved through method overriding).

Abstraction: Abstraction is the concept of hiding the complex implementation details and showing only the essential features of the object. It allows us to focus on what an object does rather than how it does it. Abstraction is typically achieved through abstract classes and interfaces.

EXAMPLES:
Encapsulation:
Example: Consider a Car class that encapsulates properties such as speed, color, and fuelLevel, along with methods like accelerate(), brake(), and refuel(). These methods control how the car's state is changed while hiding the internal details of how speed is increased, fuel is consumed, etc.
`
public class Car
{
private double speed;
private string color;
private double fuelLevel;

    public void Accelerate(double acceleration)
    {
        // Increase speed based on acceleration
    }

    public void Brake(double deceleration)
    {
        // Decrease speed based on deceleration
    }

    public void Refuel(double amount)
    {
        // Increase fuel level
    }

}
`

Inheritance:
Example: Consider a Shape base class with common properties and methods shared by various geometric shapes. We can then derive specific shapes like Circle and Rectangle from the Shape class, inheriting its properties and methods.
`
public class Shape
{
public virtual double CalculateArea()
{
return 0;
}
}

public class Circle : Shape
{
public double Radius { get; set; }

    public override double CalculateArea()
    {
        return Math.PI * Radius * Radius;
    }

}

public class Rectangle : Shape
{
public double Width { get; set; }
public double Height { get; set; }

    public override double CalculateArea()
    {
        return Width * Height;
    }

}
`Polymorphism:
Example: Consider a Animal base class with a MakeSound() method. We can then create derived classes like Dog and Cat that override the MakeSound() method to produce different sounds.
`
public class Animal
{
public virtual void MakeSound()
{
Console.WriteLine("Animal makes a sound");
}
}

public class Dog : Animal
{
public override void MakeSound()
{
Console.WriteLine("Dog barks");
}
}

public class Cat : Animal
{
public override void MakeSound()
{
Console.WriteLine("Cat meows");
}
}
`

Abstraction:
Example: Consider an Account abstract class that defines methods like Deposit() and Withdraw(), but leaves the implementation details to its subclasses like SavingsAccount and CheckingAccount.
`
public abstract class Account
{
public abstract void Deposit(double amount);
public abstract void Withdraw(double amount);
}

public class SavingsAccount : Account
{
public override void Deposit(double amount)
{
// Implementation specific to savings account
}

    public override void Withdraw(double amount)
    {
        // Implementation specific to savings account
    }

}

public class CheckingAccount : Account
{
public override void Deposit(double amount)
{
// Implementation specific to checking account
}

    public override void Withdraw(double amount)
    {
        // Implementation specific to checking account
    }

}
`
