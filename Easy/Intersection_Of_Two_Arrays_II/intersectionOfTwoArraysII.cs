// Given two arrays, write a function to compute their intersection.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]

// Note:
// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.

// Follow up:
// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

public class Solution {
  public int[] Intersect(int[] nums1, int[] nums2) {
    if(nums1.Length == 0 || nums2.Length == 0 || nums1 == null || nums2 == null) return new int[0]; 
    var hashT = new Dictionary<int,int>();
    var result = new List<int>();
    
    for(var i = 0; i < nums1.Length; i++) {
      if(!hashT.ContainsKey(nums1[i])) hashT[nums1[i]] = 1;
      else hashT[nums1[i]]++;
    }      

    for(var j = 0; j < nums2.Length; j++) {
      if(hashT.ContainsKey(nums2[j]) && hashT[nums2[j]] > 0) {
        hashT[nums2[j]]--;
        result.Add(nums2[j]);
      }
    }
    
    return result.ToArray(); 
  }
}

// OR 

public class Solution {
  public int[] Intersect(int[] nums1, int[] nums2) {
    if(nums1.Length == 0 || nums2.Length == 0 || nums1 == null || nums2 == null) return new int[0]; 
    MergeSort(nums1);
    MergeSort(nums2);
    
    var i = 0;
    var j = 0;
    var list = new List<int>();
    
    while(i < nums1.Length && j < nums2.Length) {
      if(nums1[i] == nums2[j]) {
        list.Add(nums1[i]);
        i++;
        j++;
      } else if(nums1[i] < nums2[j]) {
        i++;
      } else {
        j++;
      }
    }
    
    return list.ToArray();
  }
  
  public void MergeSort(int[] arr) {
    var n = arr.Length;
    if(n <= 1) return;
    
    var mid = n/2;
    var left = new int[mid];
    var right = new int[n - mid];
    
    for(var i = 0; i < mid; i++) {
      left[i] = arr[i];
    }
    for(var j = mid; j < n; j++) {
      right[j-mid] = arr[j];
    }
    
    MergeSort(left);
    MergeSort(right);
    Merge(arr, left, right);
  }
  
  public void Merge(int[] arr, int[] left, int[] right) {
    int i = 0;
    int j = 0;
    int k = 0;
    
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
      i++;
      k++;
    }
    
    while(j < right.Length) {
      arr[k] = right[j];
      j++;
      k++;
    }
  }
}