// Given an array of strings, group anagrams together.

// Example:
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

// Note:
// All inputs will be in lowercase.
// The order of your output does not matter.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = {};
  for(let i = 0; i < strs.length; i++) {    
    let chars = [...strs[i]];
    quickSort(chars, 0, chars.length-1);
    
    let key = chars.join('');
    if(!map[key]) {
      map[key] = [];
    }
    
    map[key].push(strs[i]);
  }
  return Object.values(map);
};

const quickSort = (arr, start, end) => {
  if(start >= end) return;
  
  let pInd = randomPartition(arr, start, end);
  quickSort(arr, start, pInd-1);
  quickSort(arr, pInd+1, end);
}

const randomPartition = (arr, start, end) => {
  let rand = Math.floor(Math.random() * (end-start+1)) + start;
  let temp = arr[rand];
  arr[rand] = arr[end];
  arr[end] = temp;
  return partition(arr,start,end);  
}

const partition = (arr, start, end) => {
  let pivot = arr[end];
  let pInd = start;
  
  for(let i = start; i < end; i++) {
    if(arr[i] <= pivot) {
      let temp = arr[i];
      arr[i] = arr[pInd];
      arr[pInd] = temp;
      pInd++;
    }
  }
  
  arr[end] = arr[pInd];
  arr[pInd] = pivot;
  return pInd;
}