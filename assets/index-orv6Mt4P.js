import{j as e,o as a,k as s,e as i,b as n,a as r,c}from"./index-DfTTk35e.js";import{t}from"./topics.module-NnsBXvW6.js";const o=()=>e.jsxs("section",{className:`topicPage ${t.topicStyles}`,children:[e.jsx("div",{className:"pageHeader",children:e.jsxs("div",{className:"titleSection",children:[e.jsx("div",{className:"iconBox",children:e.jsx(a,{})}),e.jsxs("div",{children:[e.jsx("h2",{className:"title",children:"Dynamic Programming"}),e.jsx("p",{className:"subtitle",children:"Turn exponential into polynomial"})]})]})}),e.jsxs("div",{className:"intro",children:["Dynamic Programming (DP) is a technique for solving problems by breaking them into subproblems and reusing computed results. DP is usually used when a problem has"," ",e.jsx("strong",{children:"overlapping subproblems"})," and"," ",e.jsx("strong",{children:"optimal substructure"}),". The goal is simple: avoid recomputing the same work again and again."]}),e.jsxs("div",{className:"grid",children:[e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(s,{}),e.jsx("h3",{children:"Overlapping Subproblems"})]}),e.jsx("p",{children:"If the same subproblem appears multiple times, naive recursion repeats work. DP stores results so each subproblem is solved once."}),e.jsx("pre",{children:`// Fibonacci overlap example:
// fib(5) calls fib(4) and fib(3)
// fib(4) again calls fib(3) and fib(2)
// fib(3) repeats multiple times`}),e.jsx("p",{className:"mini",children:"Repeated work is the main DP signal."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(i,{}),e.jsx("h3",{children:"Memoization (Top-down)"})]}),e.jsx("p",{children:"Memoization keeps recursion but caches answers. If you ask for the same state again, return cached value."}),e.jsx("pre",{children:`// Fibonacci with memoization
function fibMemo(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n] !== undefined) return memo[n];

  memo[n] =
    fibMemo(n - 1, memo) +
    fibMemo(n - 2, memo);

  return memo[n];
}`}),e.jsx("p",{className:"mini",children:"Same recursion structure, but faster."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(n,{}),e.jsx("h3",{children:"Tabulation (Bottom-up)"})]}),e.jsx("p",{children:"Tabulation builds answers iteratively from base cases to the final answer using a DP table."}),e.jsx("pre",{children:`// Fibonacci with tabulation
function fibTab(n) {
  if (n <= 1) return n;

  const dp = Array(n + 1).fill(0);
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] =
      dp[i - 1] +
      dp[i - 2];
  }

  return dp[n];
}`}),e.jsx("p",{className:"mini",children:"Usually easier to control space usage."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(r,{}),e.jsx("h3",{children:"0/1 Knapsack (Core Idea)"})]}),e.jsxs("p",{children:["You either take an item or skip it (no partial items). DP state often uses"," ",e.jsx("strong",{children:"(index, remainingCapacity)"}),"."]}),e.jsx("pre",{children:`// 0/1 Knapsack (tabulation idea)

// dp[i][w] = max value using
// first i items with capacity w

// transition:
dp[i][w] = dp[i - 1][w];

// skip item

dp[i][w] = Math.max(
  dp[i][w],
  value[i] +
    dp[i - 1][w - weight[i]]
);

// take item`}),e.jsx("p",{className:"mini",children:'Classic example of "choice" DP.'})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(c,{}),e.jsx("h3",{children:"LIS Concept"})]}),e.jsx("p",{children:"LIS = Longest Increasing Subsequence. The DP idea: for each position, find the best sequence ending there."}),e.jsx("pre",{children:`// LIS DP (O(n^2) idea)

// dp[i] = length of LIS
// ending at i

dp[i] =
  1 + max(dp[j])

// for all j < i
// where arr[j] < arr[i]`}),e.jsx("p",{className:"mini",children:"Later optimized with binary search (O(n log n))."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(s,{}),e.jsx("h3",{children:"Fibonacci DP (Most Basic DP)"})]}),e.jsx("p",{children:"Fibonacci is the easiest way to understand DP. It shows overlap and caching clearly."}),e.jsx("pre",{children:`// Space optimized Fibonacci
function fibOpt(n) {
  if (n <= 1) return n;

  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }

  return b;
}`}),e.jsx("p",{className:"mini",children:"Same DP, but O(1) extra space."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(i,{}),e.jsx("h3",{children:"DP State Thinking"})]}),e.jsxs("p",{children:["DP is mostly about designing the right"," ",e.jsx("strong",{children:"state"}),"."]}),e.jsx("pre",{children:`DP checklist:

1) What changes during recursion?
   => state variables

2) What is the answer
   for that state?

3) What are the choices
   (transitions)?

4) What are base cases?

5) Can you reuse results
   for same state?`}),e.jsx("p",{className:"mini",children:"If state is wrong, DP becomes impossible."})]})]})]});export{o as default};
