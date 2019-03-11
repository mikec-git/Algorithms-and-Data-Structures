// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
// If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).
// The replacement must be in-place and use only constant extra memory.

// Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  if(!nums || nums.length === 0) {
    return nums;
  }
  
  let maxOrder = true;
  for(let i = 1; i < nums.length; i++) {
    if(nums[i] > nums[i-1]) {
      maxOrder = false;
      break;
    }
  }
  
  if(maxOrder) {
    for(let i = 1; i < nums.length; i++) {
      let hole = i;
      let val = nums[i];
      
      while(hole > 0 && nums[hole-1] > val) {
        nums[hole] = nums[hole-1];
        hole--;
      }
      
      nums[hole] = val;
    }    
    return;
  }
  
  for(let i = nums.length-1; i > 0; i--) {
    if(nums[i-1] < nums[i]) {
      let ind = i;
      
      while(ind < nums.length) {
        if(nums[ind+1] <= nums[i-1] || ind === nums.length-1) {
          let temp = nums[i-1];
          nums[i-1] = nums[ind];
          nums[ind] = temp;
          break;
        }
        ind++;
      }
      
      ind = i-1;
      let endInd = nums.length;
      
      while(++ind < --endInd) {
        let temp = nums[ind];
        nums[ind] = nums[endInd];
        nums[endInd] = temp;
      }      
      return;
    } 
  }
};