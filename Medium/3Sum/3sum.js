// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:
// The solution set must not contain duplicate triplets.

// Example:
// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let results = [];
  if(nums.length < 3 || !nums) {
    return results;
  }
  
  quickSort(nums, 0, nums.length-1);
  
  for(let i = 0; i < nums.length; i++) {
    if(i > 0 && nums[i] === nums[i-1]) {
      continue;
    }
    
    let j = i+1;
    let k = nums.length-1;
    while(j < k) {
      if(-nums[i] === nums[j] + nums[k]) {        
        results.push([nums[i], nums[j], nums[k]]);
        while(j < k && nums[j] === nums[j+1]) j++;
        while(j < k && nums[k] === nums[k-1]) k--;
        j++;
        k--;
      } else if(-nums[i] > nums[j] + nums[k]) {
        j++;
      } else {
        k--;
      }
    }
  }  
  
  return results;
};

function quickSort(nums, start, end) {
  if(start >= end) {
    return;
  }
  let pInd = randomizedPartition(nums, start, end);
  quickSort(nums, start, pInd-1);
  quickSort(nums, pInd+1, end);
}

function randomizedPartition(nums, start, end) {
  let temp = nums[end];
  let randInd = Math.floor(Math.random() * (end-start+1)) + start;
  
  nums[end] = nums[randInd];
  nums[randInd] = temp;  
  return partition(nums, start, end);
}

function partition(nums, start, end) {
  let pivot = nums[end];
  let pInd = start;
  let temp;
  
  for(let i = start; i < end; i++) {
    if(nums[i] <= pivot) {
      temp = nums[i];
      nums[i] = nums[pInd];
      nums[pInd] = temp;
      pInd++;
    }
  }
  
  nums[end] = nums[pInd];
  nums[pInd] = pivot;
  
  return pInd;
}