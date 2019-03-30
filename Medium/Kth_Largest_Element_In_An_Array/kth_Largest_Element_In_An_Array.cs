// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Example 1:
// Input: [3,2,1,5,6,4] and k = 2
// Output: 5

// Example 2:
// Input: [3,2,3,1,2,4,5,5,6] and k = 4
// Output: 4

// Note: 
// You may assume k is always valid, 1 ≤ k ≤ array's length.

public class Solution {
  private int capacity;
  
  public int FindKthLargest(int[] nums, int k) {
    capacity = nums.Length;
    BuildMaxHeap(nums);
    ExtractMax(nums);
    return nums[capacity-k];    
  }
  
  public void BuildMaxHeap(int[] nums) {
    for(int i = nums.Length/2-1; i >= 0; i--) {
      MaxHeapify(nums, i, capacity);
    }
  }
  
  public void MaxHeapify(int[] nums, int i, int size) {
    var largest = i;
    var left = 2*i+1;
    var right = 2*i+2;
    
    if(left < size && nums[largest] < nums[left])   largest = left;
    if(right < size && nums[largest] < nums[right]) largest = right;
    
    if(largest != i) {
      Swap(nums, i, largest);
      MaxHeapify(nums, largest, size);
    }
  }
  
  public void ExtractMax(int[] nums) {
    for(var i = capacity-1; i >= 0; i--) {
      Swap(nums, 0, i);
      MaxHeapify(nums, 0, i);
    }
  }
  
  public void Swap(int[] nums, int i, int j) {
    var temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
}