// You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Follow up:
// What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

// Example:
// Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 8 -> 0 -> 7

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) { val = x; }
 * }
 */
public class Solution {  
  public ListNode AddTwoNumbers(ListNode l1, ListNode l2) {
    var len1 = 0;
    var len2 = 0;
    var temp1 = l1;
    var temp2 = l2;
    
    while(temp1 != null) {
      temp1 = temp1.next;      
      len1++;
    }
    
    while(temp2 != null) {
      temp2 = temp2.next;      
      len2++;
    }
    
    temp1 = l1;
    temp2 = l2;
    while(len1 > len2) {
      var temp = temp2;
      temp2 = new ListNode(0);
      temp2.next = temp;
      len1--;
    }
    
    while(len2 > len1) {
      var temp = temp1;
      temp1 = new ListNode(0);
      temp1.next = temp;
      len2--;
    }
    
    var carry = AddTwoLists(temp1, temp2);
    if(carry) {
      var temp = temp1;
      temp1 = new ListNode(1);
      temp1.next = temp;
    }
    
    return temp1;
  }
  
  public bool AddTwoLists(ListNode l1, ListNode l2) {
    if(l1 == null || l2 == null) return false;
    
    var carry = AddTwoLists(l1.next, l2.next);
    var val = carry ? l1.val + l2.val + 1 : l1.val + l2.val;
    l1.val = val >= 10 ? val - 10 : val;    
    return val >= 10;    
  }
}

// OR 

public class Solution {  
  public ListNode AddTwoNumbers(ListNode l1, ListNode l2) {
    var s1 = new Stack<int>();
    var s2 = new Stack<int>();
    
    while(l1 != null) {
      s1.Push(l1.val);
      l1 = l1.next;
    }
    
    while(l2 != null) {
      s2.Push(l2.val);
      l2 = l2.next;
    }
    
    ListNode sum = null;
    var carry = 0;
    while(s1.Count > 0 || s2.Count > 0 || carry > 0) {
      var val1 = s1.Count > 0 ? s1.Pop() : 0;
      var val2 = s2.Count > 0 ? s2.Pop() : 0;
      var tot = val1 + val2 + carry;      
      carry = tot/10; 
      tot %= 10;
      
      var node = new ListNode(tot);
      node.next = sum;
      sum = node;
    }
        
    return sum;
  }
}