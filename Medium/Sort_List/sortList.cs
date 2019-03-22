// Sort a linked list in O(n log n) time using constant space complexity.

// Example 1:
// Input: 4->2->1->3
// Output: 1->2->3->4

// Example 2:
// Input: -1->5->3->4->0
// Output: -1->0->3->4->5

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) { val = x; }
 * }
 */

public class Solution {
  public ListNode SortList(ListNode head) {
    if(head != null && head.next != null) {
      var leftH = head; // Leftmost head - Smallest
      var rightH = default(ListNode); // Rightmost head - Largest
      var midH = default(ListNode); // For repeating nodes with head
      var current = head.next;      
      head.next = null;
      
      while(current != null) {
        var temp = current.next;
        if(current.val < head.val) {
          // Attach current to before left head node and set current to new left head
          current.next = leftH;
          leftH = current;
        } else if(current.val > head.val) {
          // Attach current to before right head node and set current to new right head
          current.next = rightH;
          rightH = current;
        } else {
          // Attach repeating node to its own list
          current.next = midH;
          midH = current;
        }
        current = temp;
      }
          
      leftH = SortList(leftH);
      rightH = SortList(rightH);
        
      if(midH != null) {
        // At this point, head is the last node of the "left" list, so connect with repeating mid node
        head.next = midH;
        // Set head ref to mid node and loop until end
        head = midH;
        while(head.next != null) {
          head = head.next;
        }
      }
      // Attach "right" list with end of head (after left or mid)
      head.next = rightH;
      // Reset head to the smallest "left" list node (since left list is still connected to the original head)
      head = leftH;      
    }
    
    return head;
  }
}

 // OR Merge list

public class Solution {
  public ListNode SortList(ListNode head) {
    if(head == null || head.next == null) return head;
    
    var start = head;
    var end = head.next.next;
    while(end != null && end.next != null) {
      start = start.next;
      end = end.next.next;
    }
    
    var mid = start.next;
    start.next = null;
    var left = SortList(head);
    var right = SortList(mid);    
    return Merge(left, right);
  }
  
  public ListNode Merge(ListNode left, ListNode right) {
    var dummy = new ListNode(0);
    var temp = dummy;
    while(left != null && right != null) {
      if(left.val <= right.val) {
        temp.next = left;
        left = left.next;
      } else {
        temp.next = right;
        right = right.next;
      }
      temp = temp.next;
    }
    
    while(left != null) {
      temp.next = left;
      left = left.next;
      temp = temp.next;
    }
    
    while(right != null) {
      temp.next = right;
      right = right.next;
      temp = temp.next;
    }
    
    temp.next = null;
    return dummy.next;
  }
}