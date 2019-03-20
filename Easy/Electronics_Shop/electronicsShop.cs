// Monica wants to buy a keyboard and a USB drive from her favorite electronics store. The store has several models of each. Monica wants to spend as much as possible for the  items, given her budget.

// Given the price lists for the store's keyboards and USB drives, and Monica's budget, find and print the amount of money Monica will spend. If she doesn't have enough money to both a keyboard and a USB drive, print -1 instead. She will buy only the two required items.

// For example, suppose she has  to spend. Three types of keyboards cost . Two USB drives cost . She could purchase a , or a . She chooses the latter. She can't buy more than  items so she can't spend exactly .

// Function Description
// Complete the getMoneySpent function in the editor below. It should return the maximum total price for the two items within Monica's budget, or  if she cannot afford both items.

// getMoneySpent has the following parameter(s):
// keyboards: an array of integers representing keyboard prices
// drives: an array of integers representing drive prices
// b: the units of currency in Monica's budget

// Input Format
// The first line contains three space-separated integers , , and , her budget, the number of keyboard models and the number of USB drive models. 
// The second line contains  space-separated integers , the prices of each keyboard model. 
// The third line contains  space-separated integers , the prices of the USB drives.

// Constraints
// The price of each item is in the inclusive range .

// Output Format
// Print a single integer denoting the amount of money Monica will spend. If she doesn't have enough money to buy one keyboard and one USB drive, print -1 instead.

// Sample Input 0
// 10 2 3
// 3 1
// 5 2 8
// Sample Output 0
// 9

// Explanation 0
// She can buy the  keyboard and the  USB drive for a total cost of .

// Sample Input 1
// 5 1 1
// 4
// 5
// Sample Output 1
// -1

// Explanation 1
// There is no way to buy one keyboard and one USB drive because , so we print .

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

class Solution {

  /*
  * Complete the getMoneySpent function below.
  */
  static int getMoneySpent(int[] keyboards, int[] drives, int b) {
    MergeSort(keyboards);
    MergeSort(drives);

    var spent = -1;
    for(var i = keyboards.Length-1; i >= 0; i--) {
      for(var j = drives.Length-1; j >= 0; j--) {
        var total = keyboards[i] + drives[j];
        if(total <= b && spent < total) spent = total;
      }
    }
    return spent;
  }

  static void Main(string[] args) {
      TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

      string[] bnm = Console.ReadLine().Split(' ');

      int b = Convert.ToInt32(bnm[0]);

      int n = Convert.ToInt32(bnm[1]);

      int m = Convert.ToInt32(bnm[2]);

      int[] keyboards = Array.ConvertAll(Console.ReadLine().Split(' '), keyboardsTemp => Convert.ToInt32(keyboardsTemp))
      ;

      int[] drives = Array.ConvertAll(Console.ReadLine().Split(' '), drivesTemp => Convert.ToInt32(drivesTemp))
      ;
      /*
        * The maximum amount of money she can spend on a keyboard and USB drive, or -1 if she can't purchase both items
        */

      int moneySpent = getMoneySpent(keyboards, drives, b);

      textWriter.WriteLine(moneySpent);

      textWriter.Flush();
      textWriter.Close();
  }

  static void MergeSort(int[] arr) {
    int n = arr.Length;
    if(n <= 1) return;
    int mid = n/2;

    var left = new int[mid];
    var right = new int[n-mid];
    for(var i = 0; i < mid; i++) {
      left[i] = arr[i];
    }
    for(var i = mid; i < n; i++) {
      right[i-mid] = arr[i];
    }

    MergeSort(left);
    MergeSort(right);
    Merge(arr, left, right);
  }

  static void Merge(int[] arr, int[] left, int[] right) {
    var i = 0;
    var j = 0;
    var k = 0;

    while(i < left.Length && j < right.Length) {
      if(left[i] <= right[j]) {
        arr[k] = left[i];
        i++;
      } else {
        arr[k] = right[j];
        j++;
      }
      k++;
    }

    while(i < left.Length) {
      arr[k] = left[i];
      k++;
      i++;
    }
    while(j < right.Length) {
      arr[k] = right[j];
      k++;
      j++;
    }
  }
}
