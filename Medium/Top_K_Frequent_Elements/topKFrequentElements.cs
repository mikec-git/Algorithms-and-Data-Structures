// Given a non-empty array of integers, return the k most frequent elements.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

// Note:
// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

public class Solution {
  private List<int> results;
  private Dictionary<int,int> countMap;
  
  public IList<int> TopKFrequent(int[] nums, int k) {    
    results = new List<int>();
    countMap = new Dictionary<int,int>();
    
    foreach(var num in nums) {
      if(!countMap.ContainsKey(num)) countMap[num] = 1;
      else countMap[num]++;
    }
    
    var newNums = new List<int>(countMap.Keys);
    BuildMaxHeap(newNums);
    ExtractMax(newNums, k);
    
    return results;
  }
  
  public void BuildMaxHeap(List<int> nums) {
    for(var i = nums.Count/2; i >= 0; i--) {
      MaxHeapify(nums, i, nums.Count);
    }
  }
  
  public void MaxHeapify(List<int> nums, int i, int size) {
    var largest = i;
    var left = i*2+1;
    var right = i*2+2;
    
    if(left < size && countMap[nums[left]] > countMap[nums[largest]]) {
      largest = left;
    }
    
    if(right < size && countMap[nums[right]] > countMap[nums[largest]]) {
      largest = right;
    }
    
    if(largest != i) {
      Swap(nums, i, largest);
      MaxHeapify(nums, largest, size);
    }
  }
  
  public void ExtractMax(List<int> nums, int k) {
    for(var i = nums.Count-1; i >= nums.Count-k; i--) {
      results.Add(nums[0]);
      Swap(nums, 0, i);
      MaxHeapify(nums, 0, i);
    }
  }
  
  public void Swap(List<int> nums, int i, int j) {
    var temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
}