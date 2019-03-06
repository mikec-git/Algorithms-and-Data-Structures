/**
  Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

  Example:
  Input: 1->2->4, 1->3->4
  Output: 1->1->2->3->4->4
 */

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
var mergeTwoLists = function(l1, l2) {
  let combinedList = new ListNode(null);
  let tempList = combinedList;
  
  while(l1 || l2) { 
    if(l1 && l2) {
      
      tempList.val = l1.val <= l2.val ? l1.val : l2.val;          
      tempList.next = new ListNode(null);
      tempList = tempList.next;      
      
      if(l1.val <= l2.val) { 
        l1 = l1.next;
      } else {        
        l2 = l2.next;        
      }      
    } else if(l1) {
      tempList.val = l1.val;
      
      if(l1.next) {
        tempList.next = new ListNode(null);
        tempList = tempList.next;
      }    
      
      l1 = l1.next;
    } else if(l2) {
      tempList.val = l2.val;
      
      if(l2.next) {
        tempList.next = new ListNode(null);
        tempList = tempList.next;
      }    
      
      l2 = l2.next;
    }
  }
  
  return combinedList.val === null ? null : combinedList;
};