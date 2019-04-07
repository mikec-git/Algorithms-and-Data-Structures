public class MyHashMap {  
  public Node[] list;
    
  /** Initialize your data structure here. */
  public MyHashMap() {
    var len = 1000;
    list = new Node[len];
    Array.Clear(list, 0, list.Length);
  }

  /** value will always be non-negative. */
  public void Put(int key, int val) {
    var hash = key % list.Length;
    var linked = list[hash];
    
    if(linked != null) {
      while(linked.next != null && linked.key != key) {
        linked = linked.next;
      }
      
      if(linked.key == key) linked.val = val;
      else linked.next = new Node(key, val);
    } else {
      list[hash] = new Node(key, val);      
    }    
  }

  /** Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key */
  public int Get(int key) {
    var hash = key % list.Length;
    var linked = list[hash];
    
    while(linked != null) {
      if(linked.key == key) return linked.val;
      linked = linked.next;
    }
    
    return -1;
  }

  /** Removes the mapping of the specified value key if this map contains a mapping for the key */
  public void Remove(int key) {
    var hash = key % list.Length;
    Node linked = list[hash];    
    Node prev = null;
    
    while(linked != null) {
      if(linked.key == key) {
        if(prev == null) list[hash] = linked.next;
        else prev.next = linked.next;
        break;
      }
      
      prev = linked;
      linked = linked.next;
    }
  }
}

public class Node {
  public int val, key;
  public Node next;

  public Node(int key, int val) {
    this.val = val;
    this.key = key;
    next = null;
  }
}


/**
 * Your MyHashMap object will be instantiated and called as such:
 * MyHashMap obj = new MyHashMap();
 * obj.Put(key,value);
 * int param_2 = obj.Get(key);
 * obj.Remove(key);
 */