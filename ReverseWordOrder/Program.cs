using System;

namespace ReverseWordOrder
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Please enter words and I'll reverse their order: ");
            string s = Console.ReadLine();
            string[] words = s.Split(" ");
            Console.Write("The reversed order of the words are: ");
            for(int i = words.Length-1; i>=0;i--){
                Console.Write(words[i] + " ");
            }
        }
    }
}
