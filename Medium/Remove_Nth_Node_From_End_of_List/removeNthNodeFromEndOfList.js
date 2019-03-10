// Given a linked list, remove the n-th node from the end of list and return its head.

// Example:
// Given linked list: 1->2->3->4->5, and n = 2.
// After removing the second node from the end, the linked list becomes 1->2->3->5.

// Note:
// Given n will always be valid.

// Follow up:
// Could you do this in one pass?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if(!head) {
    return head;
  } 
  
  let count = 0;
  let tempNode = head;
  while(tempNode) {
    tempNode = tempNode.next;
    count++;
  }
  
  tempNode = head;
  let prevNode = null;
  for(let i = 0; i < count; i++) {
    if(i === count-n) {
      if(!prevNode) {
        return tempNode.next;
      } else {
        prevNode.next = tempNode.next;   
        break;
      }
    } else {
      prevNode = tempNode;
      tempNode = tempNode.next;   
    }    
  }
  
  return head;
};

// OR 

var removeNthFromEnd = function(head, n) {
  if(!head) {
    return head;
  } 
  
  let count = 0;
  let dummy = new ListNode(0);
  dummy.next = head;
  let tempNode = dummy;
  let prevNode = dummy;
  
  for(let i = 0; i <= n; i++) {
    tempNode = tempNode.next;
  }
  
  while(tempNode) {
    tempNode = tempNode.next;
    prevNode = prevNode.next;
  }
  
  prevNode.next = prevNode.next.next;
  return dummy.next;
};