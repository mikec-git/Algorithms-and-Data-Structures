// Given a collection of distinct integers, return all possible permutations.

// Example:
// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

public class Solution {
  public IList<IList<int>> Permute(int[] nums) {
    var results = new List<IList<int>>();
    Recursive(nums, results, new List<int>());
    return results;    
  }
  
  public void Recursive(int[] nums, List<IList<int>> list, List<int> tempList) {
    if(tempList.Count == nums.Length) {
      list.Add(new List<int>(tempList));
      return;
    }
    
    for(var i = 0; i < nums.Length; i++) {      
      if(tempList.Contains(nums[i])) continue;
      tempList.Add(nums[i]);
      Recursive(nums, list, tempList);
      tempList.RemoveAt(tempList.Count-1);
    }
  }
}