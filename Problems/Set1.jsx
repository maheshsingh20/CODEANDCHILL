import React, { useState } from "react";
import "./Set1.css";
import { Link } from "react-router-dom";

const topics = [
    { 
      title: "Arrays", 
      count: 36, 
      problems: [
        "Find the maximum subarray sum",
        "Sort an array of 0s, 1s, and 2s",
        "Find the missing number in an array",
        "Merge overlapping intervals",
        "Kadane's Algorithm"
      ] 
    },
    { 
      title: "Matrix", 
      count: 10, 
      problems: [
        "Search in a row-column sorted matrix",
        "Find the median in a row-wise sorted matrix",
        "Rotate a matrix by 90 degrees",
        "Spiral traversal of a matrix",
        "Find a specific element in a matrix"
      ] 
    },
    { 
      title: "Strings", 
      count: 43, 
      problems: [
        "Check if a string is a palindrome",
        "Longest repeating subsequence",
        "KMP algorithm for pattern searching",
        "Longest common prefix",
        "Check if strings are anagrams"
      ] 
    },
    { 
      title: "Searching and Sorting", 
      count: 36, 
      problems: [
        "Binary Search",
        "Merge Sort",
        "Quick Sort",
        "Search in a rotated sorted array",
        "Find the kth largest element"
      ] 
    },
    { 
      title: "Linked List", 
      count: 36, 
      problems: [
        "Reverse a linked list",
        "Detect and remove a cycle in a linked list",
        "Merge two sorted linked lists",
        "Find the middle of a linked list",
        "Flatten a multilevel linked list"
      ] 
    },
    { 
      title: "Bit Manipulation", 
      count: 10, 
      problems: [
        "Count set bits",
        "Find the only non-repeating element",
        "Check if a number is a power of 2",
        "XOR of all elements",
        "Swap two numbers without a temporary variable"
      ] 
    },
    { 
      title: "Greedy", 
      count: 35, 
      problems: [
        "Activity selection problem",
        "Fractional knapsack problem",
        "Huffman coding",
        "Minimum platforms required",
        "Job scheduling problem"
      ] 
    },
    { 
      title: "Backtracking", 
      count: 19, 
      problems: [
        "N-Queens problem",
        "Sudoku solver",
        "Rat in a maze problem",
        "Word search",
        "Generate all subsets of a set"
      ] 
    },
    { 
      title: "Dynamic Programming", 
      count: 60, 
      problems: [
        "Longest increasing subsequence",
        "0/1 Knapsack problem",
        "Matrix chain multiplication",
        "Longest common subsequence",
        "Subset sum problem"
      ] 
    },
    { 
      title: "Stacks and Queues", 
      count: 38, 
      problems: [
        "Implement a stack using two queues",
        "Find the next greater element",
        "Check if a string has balanced parentheses",
        "Sliding window maximum",
        "LRU cache implementation"
      ] 
    },
    { 
      title: "Binary Trees", 
      count: 35, 
      problems: [
        "Inorder, preorder, and postorder traversal",
        "Level order traversal",
        "Check if two trees are identical",
        "Diameter of a binary tree",
        "Convert a binary tree to its mirror"
      ] 
    },
    { 
      title: "Binary Search Tree", 
      count: 22, 
      problems: [
        "Search in a BST",
        "Insert a node in a BST",
        "Delete a node in a BST",
        "Find the lowest common ancestor in a BST",
        "Check if a tree is a BST"
      ] 
    },
    { 
      title: "Graphs", 
      count: 44, 
      problems: [
        "Breadth-first search (BFS)",
        "Depth-first search (DFS)",
        "Detect a cycle in a graph",
        "Shortest path using Dijkstra's algorithm",
        "Minimum spanning tree using Prim's algorithm"
      ] 
    },
    { 
      title: "Heap", 
      count: 18, 
      problems: [
        "Find the kth smallest element in an array",
        "Merge k sorted arrays",
        "Convert a binary tree into a heap",
        "Find the median in a data stream",
        "Top k frequent elements"
      ] 
    },
    { 
      title: "Trie", 
      count: 6, 
      problems: [
        "Insert and search in a Trie",
        "Longest prefix matching",
        "Word break problem using Trie",
        "Autocomplete feature using Trie",
        "Delete a word in a Trie"
      ] 
    }
  ];
  

const Set1 = () => {
  const [activeTopic, setActiveTopic] = useState(null);

  const toggleTopic = (index) => {
    setActiveTopic(activeTopic === index ? null : index);
  };

  return (
    <div className="problem-sheet-container">
      <h1>Problem Sheet</h1>
      {topics.map((topic, index) => (
        <div className="topic" key={index}>
          <div 
            className="topic-header" 
            onClick={() => toggleTopic(index)}
          >
            <h3>{topic.title}</h3>
            <span>({topic.count} problems)</span>
          </div>
          {activeTopic === index && (
            <div className="problem-list">
              {topic.problems.map((problem, idx) => (
                <div key={idx} className="problem-item">
                  <p>{problem}</p>
                  <Link to="/Twosum"><button className="view-button">View</button></Link>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Set1;
