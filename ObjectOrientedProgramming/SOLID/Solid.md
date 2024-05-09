The SOLID principles are a set of five design principles in object-oriented programming intended to make software designs more understandable, flexible, and maintainable. Each letter in "SOLID" stands for a different principle:

Single Responsibility Principle (SRP):
A class should have only one reason to change, meaning it should have only one responsibility.
Breaking down functionality into smaller, cohesive classes can make the code easier to understand and maintain.
Example: Suppose you have a User class that handles both user authentication and user profile management. Instead, you could split it into two separate classes: AuthenticationService and UserProfileService.

`
// Before
public class User
{
public bool Authenticate(string username, string password)
{
// Authentication logic
}

    public void UpdateProfile(UserProfile userProfile)
    {
        // Profile update logic
    }

}

// After
public class AuthenticationService
{
public bool Authenticate(string username, string password)
{
// Authentication logic
}
}

public class UserProfileService
{
public void UpdateProfile(UserProfile userProfile)
{
// Profile update logic
}
}
`Open/Closed Principle (OCP):
Software entities should be open for extension but closed for modification.
Once a class is written, it should be stable and not modified, but new functionality should be added through inheritance or composition.
Example: Instead of modifying existing code to add new features, you should create new classes that extend existing functionality.
`
// Before
public class Shape
{
public virtual double Area()
{
// Calculate area
}
}

// After
public abstract class Shape
{
public abstract double Area();
}

public class Circle : Shape
{
public override double Area()
{
// Calculate circle area
}
}

public class Rectangle : Shape
{
public override double Area()
{
// Calculate rectangle area
}
}

`Liskov Substitution Principle (LSP):
Subtypes must be substitutable for their base types without altering the correctness of the program.
Inheritance hierarchies should not break functionality when substituting a base class with its derived class.
Example: If you have a Bird base class and a Duck subclass, code that works with Bird should also work with Duck.`
// Before
public class Rectangle
{
public virtual double Area(double width, double height)
{
return width \* height;
}
}

public class Square : Rectangle
{
public override double Area(double width, double height)
{
if (width != height)
{
throw new ArgumentException("Width and height must be equal for squares.");
}
return base.Area(width, height);
}
}

// After
public abstract class Shape
{
public abstract double Area();
}

public class Rectangle : Shape
{
private double Width { get; }
private double Height { get; }

    public Rectangle(double width, double height)
    {
        Width = width;
        Height = height;
    }

    public override double Area()
    {
        return Width * Height;
    }

}

public class Square : Shape
{
private double Side { get; }

    public Square(double side)
    {
        Side = side;
    }

    public override double Area()
    {
        return Side * Side;
    }

}
`Interface Segregation Principle (ISP):
Clients should not be forced to depend on interfaces they do not use.
Instead of large interfaces that contain multiple methods, smaller, specific interfaces should be preferred.
Example: Instead of having a single Worker interface with methods for every possible task, you could have separate interfaces such as Workable, Eatable, and Sleepable.`
// Before
public interface IWorker
{
void Work();
void Eat();
void Sleep();
}

// After
public interface IWorkable
{
void Work();
}

public interface IEatable
{
void Eat();
}

public interface ISleepable
{
void Sleep();
}
`

Dependency Inversion Principle (DIP):
High-level modules should not depend on low-level modules. Both should depend on abstractions.
Abstractions should not depend on details. Details should depend on abstractions.
Example: Instead of directly instantiating dependencies, they should be passed in through interfaces or abstractions.
`
// Before
public class Worker
{
private readonly Logger \_logger;

    public Worker()
    {
        _logger = new Logger();
    }

    public void DoWork()
    {
        _logger.Log("Working...");
    }

}

// After
public interface ILogger
{
void Log(string message);
}

public class Logger : ILogger
{
public void Log(string message)
{
// Log message
}
}

public class Worker
{
private readonly ILogger \_logger;

    public Worker(ILogger logger)
    {
        _logger = logger;
    }

    public void DoWork()
    {
        _logger.Log("Working...");
    }

}
`
