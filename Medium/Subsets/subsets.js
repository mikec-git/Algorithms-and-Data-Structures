// Given a set of distinct integers, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.
// Example:
// Input: nums = [1,2,3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let result = [];
  recursive(nums, result, [], 0);
  return result;    
};
      
let recursive = (nums, result, arr, start) => {
  result.push([...arr]);
  for(let i = start; i < nums.length; i++) {
    arr.push(nums[i]);
    recursive(nums, result, arr, i+1);
    arr.pop();
  }   
}