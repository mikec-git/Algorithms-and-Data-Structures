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
    HeapSort(nums);
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
  
  public void HeapSort(int[] nums) {
    for(var i = capacity-1; i >= 1; i--) {
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

// OR (JS)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// const findKthLargest = function(nums, k) {
//   quickSelect(nums, nums.length-k, 0, nums.length-1);
//   return nums[nums.length-k];
// };

// const quickSelect = (nums, k, lo, hi) => {
//   if(lo >= hi) return nums[lo];
  
//   let rand = Math.floor(Math.random()*(hi-lo+1)) + lo;
//   swap(nums, rand, hi);
  
//   let pInd = partition(nums, lo, hi);
  
//   if(pInd === k) {
//     return nums[k];
//   } else if(pInd > k) {
//     return quickSelect(nums, k, lo, pInd-1);
//   } else {
//     return quickSelect(nums, k, pInd+1, hi);
//   }
// };

// const partition = (nums, lo, hi) => {
//   let pivot = nums[hi];
//   let pInd = lo;
  
//   for(let i = lo; i < hi; i++) {
//     if(nums[i] <= pivot) {
//       swap(nums, i, pInd);
//       pInd++;
//     }
//   }
  
//   swap(nums, pInd, hi);
  
//   return pInd;
// };

// const swap = (arr, i, j) => {
//   [arr[i], arr[j]] = [arr[j], arr[i]];
// };