// Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

// Note:
// The solution set must not contain duplicate quadruplets.

// Example:
// Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

// A solution set is:
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if(!nums || nums.length < 4) {
    return [];
  }
  
  let result = [];
  quickSort(nums, 0, nums.length-1);
  
  for(let firstI = 0; firstI < nums.length; firstI++) {    
    for(let leftI = firstI + 1; leftI < nums.length; leftI++) {         
      let rightI = leftI + 1; 
      let finalI = nums.length - 1;
      
      while(rightI < finalI) {
        let sum = nums[firstI] + nums[leftI] + nums[rightI] + nums[finalI];  
        
        if(sum > target)      finalI--;
        else if(sum < target) rightI++;        
        else {
          result.push([nums[firstI], nums[leftI], nums[rightI], nums[finalI]]);
          while(rightI < finalI && nums[rightI] === nums[rightI+1]) rightI++;
          while(finalI > rightI && nums[finalI] === nums[finalI-1]) finalI--;
          rightI++;
          finalI--;
        };
      }      
      while(leftI < nums.length && nums[leftI] === nums[leftI+1]) leftI++;   
    }
    while(firstI < nums.length && nums[firstI] === nums[firstI+1]) firstI++;  
  }
   
  return result;
};

const quickSort = (nums, start, end) => {
  if(start >= end) return;
  let pInd = randomPartition(nums,start,end);
  quickSort(nums,start,pInd-1);
  quickSort(nums,pInd+1,end);
}

const randomPartition = (nums,start,end) => {
  let rand = Math.floor(Math.random() * (end-start+1)) + start;
  let temp = nums[end];
  nums[end] = nums[rand];
  nums[rand] = temp;
  
  return partition(nums,start,end);
}

const partition = (nums,start,end) => {
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