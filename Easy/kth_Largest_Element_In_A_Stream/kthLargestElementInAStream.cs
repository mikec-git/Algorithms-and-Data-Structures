// Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Your KthLargest class will have a constructor which accepts an integer k and an integer array nums, which contains initial elements from the stream. For each call to the method KthLargest.add, return the element representing the kth largest element in the stream.

// Example:
// int k = 3;
// int[] arr = [4,5,8,2];
// KthLargest kthLargest = new KthLargest(3, arr);
// kthLargest.add(3);   // returns 4
// kthLargest.add(5);   // returns 5
// kthLargest.add(10);  // returns 5
// kthLargest.add(9);   // returns 8
// kthLargest.add(4);   // returns 8

// Note: 
// You may assume that nums' length ≥ k-1 and k ≥ 1.

public class KthLargest {
  private int[] kNums;
  private int k;
  
  public KthLargest(int k, int[] nums) {
    kNums = new int[k];
    for(var i = 0; i < k; i++) {
      if(i < nums.Length) kNums[i] = nums[i];
      else kNums[i] = Int32.MinValue;
    }
    
    BuildHeap(kNums);
    
    for(var i = k; i < nums.Length; i++) {
      Add(nums[i]);
    }    
  }

  public int Add(int val) {
    if(val > kNums[0]) {
      kNums[0] = val;
      Heapify(kNums, 0, kNums.Length);
    }
    return kNums[0];
  }
  
  public void BuildHeap(int[] arr) {
    for(var i = arr.Length/2; i >= 0; i--) {
      Heapify(arr, i, arr.Length);
    }
  }
  
  public void Heapify(int[] arr, int i, int size) {
    var larger = i;
    var left = i*2+1;
    var right = i*2+2;
    
    if(left < size && arr[left] < arr[larger]) larger = left;
    if(right < size && arr[right] < arr[larger]) larger = right;
    
    if(larger != i) {
      Swap(arr, i, larger);
      Heapify(arr, larger, size);
    }
  }
    
  public void Swap(int[] arr, int i, int j) {
    var swap = arr[i];
    arr[i] = arr[j];
    arr[j] = swap;
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * KthLargest obj = new KthLargest(k, nums);
 * int param_1 = obj.Add(val);
 */
