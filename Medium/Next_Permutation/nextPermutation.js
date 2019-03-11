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
  
  for(let i = nums.length-1; i >= 0; i--) {
    if(i === 0 || i > 0 && nums[i-1] < nums[i]) {
      let ind = i;
      // Account for case where array is reverse-sorted
      let swapInd = i > 0 ? i-1 : 0;
      let endInd = i > 0 ? nums.length : nums.length-1;
      
      while(ind < nums.length) {
        if(i > 0 && nums[ind+1] <= nums[swapInd] || ind === nums.length-1) {
          let temp = nums[swapInd];
          nums[swapInd] = nums[ind];
          nums[ind] = temp;
          break;
        }
        ind++;
      }      
      
      while(++swapInd < --endInd) {
        let temp = nums[swapInd];
        nums[swapInd] = nums[endInd];
        nums[endInd] = temp;
      }      
      return;
    } 
  }
};