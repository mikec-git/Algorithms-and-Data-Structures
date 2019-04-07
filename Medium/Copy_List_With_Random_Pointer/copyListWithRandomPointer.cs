// A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.
// Return a deep copy of the list.

// Example 1:
// Input:
// {"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}

// Explanation:
// Node 1's value is 1, both of its next and random pointer points to Node 2.
// Node 2's value is 2, its next pointer points to null and its random pointer points to itself.
 
// Note:
// You must return the copy of the given head as a reference to the cloned list.

/*
// Definition for a Node.
public class Node {
    public int val;
    public Node next;
    public Node random;

    public Node(){}
    public Node(int _val,Node _next,Node _random) {
        val = _val;
        next = _next;
        random = _random;
}
*/
public class Solution {
  public Node CopyRandomList(Node head) {
    if(head == null) return null;
    var temp = head;
    Node next, c;

    // Create clone nodes adjacent to original
    while(temp != null) {
      next = temp.next;
      c = new Node(temp.val, null, null);
      temp.next = c;
      c.next = next;
      temp = next;      
    }

    temp = head;

    // Set random pointers to point to the mirror random which are adjacent to the original
    while(temp != null) {
      if(temp.random != null) temp.next.random = temp.random.next;
      temp = temp.next.next;
    }    

    var dummy = new Node();
    var clone = dummy;
    temp = head;

    while(temp != null) {
      clone.next = temp.next;
      temp.next = temp.next.next;
      clone = clone.next;
      temp = temp.next;
    }

    return dummy.next;
  }
}