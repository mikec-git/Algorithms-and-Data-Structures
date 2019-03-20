// Given two arrays, write a function to compute their intersection.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]

// Note:
// Each element in the result must be unique.
// The result can be in any order.

public class Solution {
  public int[] Intersection(int[] nums1, int[] nums2) {    
    if(nums1.Length < nums2.Length) return SetIntersect(nums2, nums1);
    return SetIntersect(nums1,nums2);
  }
  
  public int[] SetIntersect(int[] nums1, int[] nums2) {
    var hashSet = new HashSet<int>();
    for(var i = 0; i < nums1.Length; i++) {
      hashSet.Add(nums1[i]);
    }
    
    var seen = new HashSet<int>();
    for(var j = 0; j < nums2.Length; j++) { 
      if(hashSet.Contains(nums2[j]) && !seen.Contains(nums2[j])) {
        seen.Add(nums2[j]);
      }
    }
    
    return seen.ToArray();
  }
}

