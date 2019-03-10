// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

// Example:
// Given array nums = [-1, 2, 1, -4], and target = 1.
// The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {  
  quickSort(nums, 0, nums.length-1);
  let sum = null;
  let minDiff = Math.pow(2,31) - 1;
  
  for(let i = 0; i < nums.length; i++) {
    if(i > 0 && nums[i] === nums[i-1]) { 
      continue;
    }
    
    let j = i+1;
    let k = nums.length-1;
    let complement = target - nums[i];
    
    while(j < k) { 
      let currentSum = nums[j] + nums[k];
      
      if(minDiff > Math.abs(currentSum - complement)) {
        sum = currentSum + nums[i];
        minDiff = Math.abs(currentSum - complement);
      }
      
      if(minDiff === 0) {
        return sum;
      }
      
      if(currentSum > complement) {
         k--;
      } else {
        j++;
      }
    }
  }
  return sum || 0;
};

const quickSort = (nums, start, end) => {
  if(start >= end) return;
  
  let pInd = randomPartition(nums, start, end);
  quickSort(nums, start, pInd-1);
  quickSort(nums, pInd+1, end);
}

const randomPartition = (nums, start, end) => {
  let rand = Math.floor(Math.random() * (end-start+1)) + start;
  let temp = nums[end];
  nums[end] = nums[rand];
  nums[rand] = temp;
  
  return partition(nums, start, end);
}

const partition = (nums, start, end) => {
  let pivot = nums[end];
  let pInd = start;
  let temp = null;
  
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