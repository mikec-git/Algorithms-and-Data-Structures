// Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
// You should preserve the original relative order of the nodes in each of the two partitions.

// Example:
// Input: head = 1->4->3->2->5->2, x = 3
// Output: 1->2->2->4->3->5

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) { val = x; }
 * }
 */
public class Solution {
  public ListNode Partition(ListNode head, int x) {
    if(head == null || head.next == null) return head;
    
    var before = new ListNode(0);
    var after = new ListNode(0);
    var beforePointer = before;
    var afterPointer = after;
    
    while(head != null) {     
      if(head.val < x) {
        before.next = head;
        before = before.next;
      } else {
        after.next = head;
        after = after.next;
      }
      head = head.next;
    }
    after.next = null;
    before.next = afterPointer.next;
    
    return beforePointer.next;
  }
}