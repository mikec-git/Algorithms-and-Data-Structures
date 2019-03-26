// Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

// Example 1:
// Input: [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

// Example 2:
// Input: [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

public class Solution {  
  public int MaxProduct(int[] nums) {
    int r = nums[0];

    // imax/imin stores the max/min product of
    // subarray that ends with the current number A[i]
    for (int i = 1, imax = r, imin = r; i < nums.Length; i++) {
        // multiplied by a negative makes big number smaller, small number bigger
        // so we redefine the extremums by swapping them
      
        if (nums[i] < 0) {
          var temp = imax;
          imax = imin;
          imin = temp;
        }
      
        // max/min product for the current number is either the current number itself
        // or the max/min by the previous number times the current one
        imax = Math.Max(nums[i], imax * nums[i]);
        imin = Math.Min(nums[i], imin * nums[i]);

        // the newly computed max value is a candidate for our global result
        r = Math.Max(r, imax);
    }
    return r;
  }
}