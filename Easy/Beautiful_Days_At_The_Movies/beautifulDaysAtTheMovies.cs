// Lily likes to play games with integers. She has created a new game where she determines the difference between a number and its reverse. For instance, given the number , its reverse is . Their difference is . The number  reversed is , and their difference is .

// She decides to apply her game to decision making. She will look at a numbered range of days and will only go to a movie on a beautiful day.

// Given a range of numbered days,  and a number , determine the number of days in the range that are beautiful. Beautiful numbers are defined as numbers where  is evenly divisible by . If a day's value is a beautiful number, it is a beautiful day. Print the number of beautiful days in the range.

// Function Description:
// Complete the beautifulDays function in the editor below. It must return the number of beautiful days in the range.

// beautifulDays has the following parameter(s):

// i: the starting day number
// j: the ending day number
// k: the divisor
// Input Format

// A single line of three space-separated integers describing the respective values of i, j, and k.

// Constraints
// Output Format
// Print the number of beautiful days in the inclusive range between  and .

// Sample Input
// 20 23 6

// Sample Output
// 2

// Explanation
// Lily may go to the movies on days , , , and . We perform the following calculations to determine which days are beautiful:
// Day  is beautiful because the following evaluates to a whole number: 
// Day  is not beautiful because the following doesn't evaluate to a whole number: 
// Day  is beautiful because the following evaluates to a whole number: 
// Day  is not beautiful because the following doesn't evaluate to a whole number: 
// Only two days,  and , in this interval are beautiful. Thus, we print  as our answer.

using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Collections;
using System.ComponentModel;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.Text.RegularExpressions;
using System.Text;
using System;

class Solution {

    // Complete the beautifulDays function below.
    static int beautifulDays(int i, int j, int k) {
        var count = 0;
        for(var m = 0; m < j-i+1; m++) {
            var temp = 0;
            int orig = i+m;
            while(orig > 0) {
                temp = temp * 10 + orig%10;
                orig /= 10;
            }
            
            if(Math.Abs(i+m-temp) % k == 0) count++;
        }

        return count;
    }

    static void Main(string[] args) {
        TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

        string[] ijk = Console.ReadLine().Split(' ');

        int i = Convert.ToInt32(ijk[0]);

        int j = Convert.ToInt32(ijk[1]);

        int k = Convert.ToInt32(ijk[2]);

        int result = beautifulDays(i, j, k);

        textWriter.WriteLine(result);

        textWriter.Flush();
        textWriter.Close();
    }
}
