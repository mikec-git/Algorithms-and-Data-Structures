// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  
  const outputList = new ListNode(null);
  let outputListTemp = outputList;
  let l1Temp = l1;
  let l2Temp = l2;
  let gte10 = false;
  let sum = null;
  
  while(l1Temp && l1Temp.val >= 0 && l2Temp && l2Temp.val >= 0) {
    sum = gte10 ? l1Temp.val + l2Temp.val + 1 : l1Temp.val + l2Temp.val;    
    gte10 = sum >= 10 ? true : false;
    outputListTemp.val = gte10 ? sum - 10 : sum;
        
    l1Temp = l1Temp.next;
    l2Temp = l2Temp.next;    
    
    if(l1Temp || l2Temp) {
      outputListTemp = setNextTempNode(outputListTemp, gte10, sum);
    }    
  }
  
  while(l1Temp && l1Temp.val >= 0) {
    sum = gte10 ? l1Temp.val + 1 : l1Temp.val;
    gte10 = sum >= 10 ? true : false;
    outputListTemp.val = gte10 ? sum - 10 : sum;
        
    l1Temp = l1Temp.next;    
    
    if(l1Temp) {
      outputListTemp = setNextTempNode(outputListTemp, gte10, sum);
    }    
  }
  
  while(l2Temp && l2Temp.val >= 0) {
    sum = gte10 ? l2Temp.val + 1 : l2Temp.val;
    gte10 = sum >= 10 ? true : false;
    outputListTemp.val = gte10 ? sum - 10 : sum;
       
    l2Temp = l2Temp.next;
    
    if(l2Temp) {
      outputListTemp = setNextTempNode(outputListTemp, gte10, sum);
    }    
  }
  
 if(gte10) {
    outputListTemp.next = new ListNode(1);
  }      
  
  return outputList;
};

function setNextTempNode(outputListTemp, gte10, sum) {
  outputListTemp.next = new ListNode(null);
  return outputListTemp.next;    
}
