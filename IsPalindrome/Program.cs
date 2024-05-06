using System;

namespace IsPalindrome
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Please enter a word: ");
            string str = Console.ReadLine();
            char[] reversed = str.ToCharArray();
            Array.Reverse(reversed);
            string reversedString = new string(reversed).ToUpper();
            string upper = str.ToUpper();
            if(reversedString == upper){
            Console.WriteLine(str + " is a palindrome");
            }else{
            Console.WriteLine(str + " is not a palindrome");
            }
        }
    }
}
