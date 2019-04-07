// Design a HashSet without using any built-in hash table libraries.

// To be specific, your design should include these functions:
// add(value): Insert a value into the HashSet. 
// contains(value) : Return whether the value exists in the HashSet or not.
// remove(value): Remove a value in the HashSet. If the value does not exist in the HashSet, do nothing.

// Example:
// MyHashSet hashSet = new MyHashSet();
// hashSet.add(1);         
// hashSet.add(2);         
// hashSet.contains(1);    // returns true
// hashSet.contains(3);    // returns false (not found)
// hashSet.add(2);          
// hashSet.contains(2);    // returns true
// hashSet.remove(2);          
// hashSet.contains(2);    // returns false (already removed)

// Note:
// All values will be in the range of [0, 1000000].
// The number of operations will be in the range of [1, 10000].
// Please do not use the built-in HashSet library.

public class MyHashSet {
  public class ListNode {
    public int key;
    public ListNode next;
    
    public ListNode(int key) {
      this.key = key;
    }
  }
  
  private ListNode[] list;
  
  /** Initialize your data structure here. */
  public MyHashSet() {
    var len = 500;
    list = new ListNode[len];
    Array.Clear(list, 0, len);
  }

  public void Add(int key) {
    var hash = key % list.Length;
    var linked = list[hash];
    
    if(linked != null) {
      while(linked.next != null && linked.key != key) {
        linked = linked.next;
      }

      if(linked.key == key) return;
      linked.next = new ListNode(key);
    } else {
      list[hash] = new ListNode(key);
    }
  }

  public void Remove(int key) {
    var hash = key % list.Length;    
    var linked = list[hash];
    ListNode prev = null;
    
    while(linked != null) {
      if(linked.key == key) {
        if(prev == null) list[hash] = linked.next;
        else prev.next = linked.next; 
        return;
      }
      
      prev = linked;
      linked = linked.next;
    }    
  }

  /** Returns true if this set contains the specified element */
  public bool Contains(int key) {
    var hash = key % list.Length;    
    var linked = list[hash];
    
    while(linked != null) {
      if(linked.key == key) return true;
      linked = linked.next;
    }
    
    return false;
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * MyHashSet obj = new MyHashSet();
 * obj.Add(key);
 * obj.Remove(key);
 * bool param_3 = obj.Contains(key);
 */