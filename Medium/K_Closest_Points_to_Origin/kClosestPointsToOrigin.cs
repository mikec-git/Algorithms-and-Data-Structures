// We have a list of points on the plane.  Find the K closest points to the origin (0, 0).
// (Here, the distance between two points on a plane is the Euclidean distance.)

// You may return the answer in any order.  The answer is guaranteed to be unique (except for the order that it is in.) 

// Example 1:
// Input: points = [[1,3],[-2,2]], K = 1
// Output: [[-2,2]]

// Explanation: 
// The distance between (1, 3) and the origin is sqrt(10).
// The distance between (-2, 2) and the origin is sqrt(8).
// Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
// We only want the closest K = 1 points from the origin, so the answer is just [[-2,2]].

// Example 2:
// Input: points = [[3,3],[5,-1],[-2,4]], K = 2
// Output: [[3,3],[-2,4]]
// (The answer [[-2,4],[3,3]] would also be accepted.)
 
// Note:
// 1 <= K <= points.length <= 10000
// -10000 < points[i][0] < 10000
// -10000 < points[i][1] < 10000

public class Solution {
  private int[][] pts;
  
  public int[][] KClosest(int[][] points, int K) {
    pts = points;
    QuickSelect(0, points.Length-1, K);
    
    int[][] results = new int[K][];
    Array.Copy(points, results, K);
    return results;
  }
  
  public void QuickSelect(int i, int j, int K) {
    if(i >= j) return;
    
    var mid = RandomPartition(i, j);
    var leftLen = mid - i + 1;
    
    if(K < leftLen) {
      QuickSelect(i, mid-1, K);
    } else if(K > leftLen) {
      QuickSelect(mid+1, j, K-leftLen);
    }
  }
  
  public int RandomPartition(int i, int j) {
    var r = new Random();
    var rand = r.Next(i, j);
    Swap(i, rand);    
    return Partition(i, j);
  }
  
  public int Partition(int i, int j) {
    var io = i;
    var pivot = GetDist(pts[i]);
    i++;
    
    while(true) {
      while(i < j && GetDist(pts[i]) <= pivot) i++;
      while(i <= j && GetDist(pts[j]) >= pivot) j--;
      if(i >= j) break;
      Swap(i, j);
    }
    
    Swap(io, j);
    return j;    
  }
  
  public int GetDist(int[] pt) {
    return pt[0]*pt[0] + pt[1]*pt[1];
  }
  
  public void Swap(int i, int j) {
    var temp = pts[i];
    pts[i] = pts[j];
    pts[j] = temp;
  }
}