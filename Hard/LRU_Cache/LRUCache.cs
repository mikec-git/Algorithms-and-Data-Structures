// Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

// Follow up:
// Could you do both operations in O(1) time complexity?

// Example:
// LRUCache cache = new LRUCache( 2 /* capacity */ );

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4

public class LRUCache {  
  private DoublyLinked head, tail;
  private Dictionary<int, DoublyLinked> map;
  private int capacity;
  private int contains = 0;
  
  public class DoublyLinked {
    public int val, key;
    public DoublyLinked prev, next;
    
    public DoublyLinked(int val) {
      this.val = val;      
    }
  }
  
  public LRUCache(int capacity) {
    this.map = new Dictionary<int, DoublyLinked>();
    this.capacity = capacity;
    this.head = new DoublyLinked(0);
    this.tail = new DoublyLinked(0);
    
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  public int Get(int key) {
    if(map.ContainsKey(key)) {
      MoveToHead(map[key]);
      return map[key].val;
    }
    
    return -1;
  }

  public void Put(int key, int value) {
    if(map.ContainsKey(key)) {
      map[key].val = value;
      MoveToHead(map[key]);
    } else {
      var node = new DoublyLinked(value);
      node.key = key;
      contains++;
      map[key] = node;
      AddNode(node);
      
      if(contains > capacity) {
        PopTail();
      }      
    }
  }
  
  public void MoveToHead(DoublyLinked node) {
    RemoveNode(node);
    AddNode(node);
  }
  
  public void AddNode(DoublyLinked node) {
    // Insert after head dummy node
    node.prev = head;
    node.next = head.next;
    head.next = node;
    node.next.prev = node;
  }
  
  public void RemoveNode(DoublyLinked node) {
    // Remove node from position in list    
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
  
  public void PopTail() {
    map.Remove(tail.prev.key);
    DoublyLinked prevTail = tail.prev.prev;
    prevTail.next = tail;
    tail.prev = prevTail;
    contains--;
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.Get(key);
 * obj.Put(key,value);
 */