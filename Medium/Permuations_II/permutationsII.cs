// Given a collection of numbers that might contain duplicates, return all possible unique permutations.

// Example:
// Input: [1,1,2]
// Output:
// [
//   [1,1,2],
//   [1,2,1],
//   [2,1,1]
// ]

public class Solution {
  public IList<IList<int>> PermuteUnique(int[] nums) {
    var list = new List<IList<int>>();
    Array.Sort(nums);
    Recursive(nums, list, new List<int>(), new bool[nums.Length]);
    return list;
  }
  
  public void Recursive(int[] nums, List<IList<int>> list, List<int> tempList, bool[] seen) {
    if(tempList.Count == nums.Length) {
      list.Add(new List<int>(tempList));
      return;
    } 
    for(var i = 0; i < nums.Length; i++) {
      if(seen[i] || i > 0 && nums[i] == nums[i-1] && !seen[i-1]) continue;
      seen[i] = true;
      tempList.Add(nums[i]);
      Recursive(nums, list, tempList, seen);
      seen[i] = false;
      tempList.RemoveAt(tempList.Count-1);
    }
  }
}