import{j as e,k as s,a as i,l as a,e as n,F as r}from"./index-DfTTk35e.js";import{t as c}from"./topics.module-NnsBXvW6.js";const o=()=>e.jsxs("section",{className:`topicPage ${c.topicStyles}`,children:[e.jsx("div",{className:"pageHeader",children:e.jsxs("div",{className:"titleSection",children:[e.jsx("div",{className:"iconBox",children:e.jsx(s,{})}),e.jsxs("div",{children:[e.jsx("h2",{className:"title",children:"Recursion Patterns"}),e.jsx("p",{className:"subtitle",children:"Backtracking, divide and conquer, subsets, permutations"})]})]})}),e.jsx("div",{className:"intro",children:"Recursion is a technique where a function solves a problem by calling itself on smaller inputs. The power of recursion comes from patterns. Once you understand these patterns, many “hard” problems become predictable."}),e.jsxs("div",{className:"grid",children:[e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(i,{}),e.jsx("h3",{children:"Backtracking (Intro)"})]}),e.jsx("p",{children:"Backtracking explores multiple choices, builds a partial solution, and undoes steps when a path fails. Think: “try, recurse, undo”."}),e.jsx("pre",{children:`// Backtracking skeleton
function backtrack(path, choices) {
  // 1) check if done
  // 2) loop over choices
  // 3) choose
  // 4) recurse
  // 5) undo
}`}),e.jsx("p",{className:"mini",children:"Used in: permutations, combinations, sudoku, n-queens, subsets."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(a,{}),e.jsx("h3",{children:"Divide and Conquer"})]}),e.jsx("p",{children:"Divide the problem into smaller subproblems, solve them recursively, then combine results."}),e.jsx("pre",{children:`// Example idea: Merge Sort
// divide: split array into two halves
// conquer: sort each half
// combine: merge two sorted halves`}),e.jsx("p",{className:"mini",children:"Common: merge sort, quick sort, binary search."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(n,{}),e.jsx("h3",{children:"Subset Generation"})]}),e.jsx("p",{children:"For each element, you have two choices: include it or skip it. That creates a binary decision tree."}),e.jsx("pre",{children:`// Generate all subsets (power set)
function subsets(nums) {
  const res = [];

  function dfs(i, path) {
    if (i === nums.length) {
      res.push([...path]);
      return;
    }

    // choice 1: skip nums[i]
    dfs(i + 1, path);

    // choice 2: include nums[i]
    path.push(nums[i]);
    dfs(i + 1, path);
    path.pop(); // undo
  }

  dfs(0, []);

  return res;
}`}),e.jsx("p",{className:"mini",children:"Time: O(2^n) subsets. Space: recursion depth O(n)."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(r,{}),e.jsx("h3",{children:"Permutations"})]}),e.jsx("p",{children:"Permutations are about arranging elements. Backtracking picks one unused element at a time."}),e.jsx("pre",{children:`// Permutations of nums
function permutations(nums) {
  const res = [];
  const used = Array(nums.length).fill(false);

  function dfs(path) {
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;

      used[i] = true;
      path.push(nums[i]);

      dfs(path);

      path.pop();     // undo
      used[i] = false;
    }
  }

  dfs([]);

  return res;
}`}),e.jsx("p",{className:"mini",children:"Time: O(n!) permutations. Space: O(n) recursion + used array."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(s,{}),e.jsx("h3",{children:"Tail Recursion (Concept)"})]}),e.jsx("p",{children:"Tail recursion happens when the recursive call is the last operation in the function. Some languages can optimize it, reducing stack usage. JavaScript engines usually do not rely on it."}),e.jsx("pre",{children:`// Tail recursion style (concept)
function factorialTail(n, acc = 1) {
  if (n <= 1) return acc;
  return factorialTail(n - 1, acc * n);
}`}),e.jsx("p",{className:"mini",children:"In JS, prefer iterative approach when depth can be large."})]})]})]});export{o as default};
