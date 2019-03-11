// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).
// If the target is not found in the array, return [-1, -1].

// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if(target > nums[nums.length-1] || target < nums[0] || !nums) {
    return [-1, -1];
  }
  
  let result = [];
  binarySearch(nums, 0, nums.length-1, result, target);
  binarySearch(nums, result[0], nums.length-1, result, target);
  
  if(result.length === 0) {
    return [-1,-1];
  }
  
  return result;
};

const binarySearch = (nums, start, end, result, target) => {
  if(start > end || result.length === 2) {
    return;
  }
  
  let mid = Math.floor((start + end)/2);
  if(result.length === 0 && (nums[mid] === target && nums[mid-1] === target) || 
     nums[mid] > target) {
    binarySearch(nums, start, mid-1, result, target);
  } else if(result.length === 1 && (nums[mid] === target && nums[mid+1] === target) || 
            nums[mid] < target) {
    binarySearch(nums, mid+1, end, result, target);
  } else if(nums[mid] === target && 
            (result.length === 0 && nums[mid-1] !== target || 
             result.length === 1 && nums[mid+1] !== target)) {
    result.push(mid);
  } 
}