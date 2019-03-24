// Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// Example:
// Input: [1,2,2]
// Output:
// [
//   [2],
//   [1],
//   [1,2,2],
//   [2,2],
//   [1,2],
//   []
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  let results = [];
  nums.sort();
  recursive(nums, results, [], {}, 0);
  return results;
};

let recursive = (nums, results, arr, seen, start) => {
  results.push([...arr]);
  
  for(let i = start; i < nums.length; i++) {
    if(i > 0 && nums[i] === nums[i-1] && !seen[i-1]) continue;
    seen[i] = true;
    arr.push(nums[i]);
    recursive(nums, results, arr, seen, i+1);
    arr.pop();
    seen[i] = false;
  }
}