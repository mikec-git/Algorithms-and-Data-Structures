// For an undirected graph with tree characteristics, we can choose any node as the root. The result graph is then a rooted tree. Among all possible rooted trees, those with minimum height are called minimum height trees (MHTs). Given such a graph, write a function to find all the MHTs and return a list of their root labels.

// Format
// The graph contains n nodes which are labeled from 0 to n - 1. You will be given the number n and a list of undirected edges (each edge is a pair of labels).

// You can assume that no duplicate edges will appear in edges. Since all edges are undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges.

// Example 1 :
// Input: n = 4, edges = [[1, 0], [1, 2], [1, 3]]

//         0
//         |
//         1
//        / \
//       2   3 

// Output: [1]

// Example 2 :
// Input: n = 6, edges = [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]

//      0  1  2
//       \ | /
//         3
//         |
//         4
//         |
//         5 

// Output: [3, 4]
// Note:

// According to the definition of tree on Wikipedia: “a tree is an undirected graph in which any two vertices are connected by exactly one path. In other words, any connected graph without simple cycles is a tree.”
// The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf.

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
  if(n === 0 || !edges || !edges.length) {
    return [0];
  } else if(edges.length === 1) {
    return edges[0];
  }
  
  let graph = {};  
  for(let i = 0; i < n; i++) {
    graph[i] = [];
  }
  
  for(let edge of edges) {
    graph[edge[0]].push(edge[1]);
    graph[edge[1]].push(edge[0]);
  }
  
  let leafNodes = [];
  for(let node = 0; node < n; node++) {
    if(graph[node].length === 1) {
      leafNodes.push(node)
    }
  }
  
  let results = [];  
  while(n > 2) {
    let leafCount = leafNodes.length;
    n -= leafCount;
    let newLeafs = [];
    
    for(let i = 0 ; i < leafCount; i++) {
      let currLeaf = leafNodes[i];
      let newLeaf = graph[currLeaf].shift();
      
      let nextNodes = graph[newLeaf];      
      let leafToDeleteInd = nextNodes.indexOf(currLeaf);
      
      nextNodes.splice(leafToDeleteInd, 1);
      
      if(nextNodes.length === 1) newLeafs.push(newLeaf);
    }
    
    leafNodes = newLeafs;  
  }
  
  return leafNodes;  
};