import{j as e,e as s,c as t,F as n,i,l as r}from"./index-DfTTk35e.js";import{t as a}from"./topics.module-NnsBXvW6.js";const o=()=>e.jsxs("section",{className:`topicPage ${a.topicStyles}`,children:[e.jsx("div",{className:"pageHeader",children:e.jsxs("div",{className:"titleSection",children:[e.jsx("div",{className:"iconBox",children:e.jsx(s,{})}),e.jsxs("div",{children:[e.jsx("h2",{className:"title",children:"Stack & Queue Based Problems"}),e.jsx("p",{className:"subtitle",children:"Classic interview patterns using LIFO and FIFO"})]})]})}),e.jsxs("div",{className:"intro",children:["Stacks and queues show up everywhere: parsing, matching brackets, “next greater” problems, and graph traversals. The key is recognizing whether you need ",e.jsx("strong",{children:"LIFO"})," (stack) or"," ",e.jsx("strong",{children:"FIFO"})," (queue) behavior."]}),e.jsxs("div",{className:"grid",children:[e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(t,{}),e.jsx("h3",{children:"Monotonic Stack"})]}),e.jsxs("p",{children:["A monotonic stack keeps elements in increasing or decreasing order. It helps you find the next greater/smaller element in",e.jsx("strong",{children:" O(n)"}),"."]}),e.jsx("pre",{children:`// Monotonic decreasing stack (stores indices)
// Useful for next greater element problems
// Idea: keep stack values strictly decreasing

// While current element is greater,
// pop until stack top is greater again`}),e.jsx("p",{className:"mini",children:"Common trick: store indices, not values."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(n,{}),e.jsx("h3",{children:"Next Greater Element"})]}),e.jsx("p",{children:"For each element, find the next element to the right that is greater. Naive is O(n²). Monotonic stack solves it in O(n)."}),e.jsx("pre",{children:`function nextGreaterElements(nums) {
  const res = new Array(nums.length).fill(-1);
  const st = []; // stack of indices

  for (let i = 0; i < nums.length; i++) {
    while (
      st.length &&
      nums[i] > nums[st[st.length - 1]]
    ) {
      const idx = st.pop();
      res[idx] = nums[i];
    }

    st.push(i);
  }

  return res;
}

// Example:
// [2, 1, 2, 4, 3]
// -> [4, 2, 4, -1, -1]`}),e.jsx("p",{className:"mini",children:"Time: O(n) because each index is pushed and popped once."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(i,{}),e.jsx("h3",{children:"Valid Parentheses"})]}),e.jsx("p",{children:"Use a stack to match opening brackets. Every closing bracket must match the latest unmatched opener."}),e.jsx("pre",{children:`function isValid(s) {
  const st = [];

  const match = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const ch of s) {
    if (
      ch === "(" ||
      ch === "[" ||
      ch === "{"
    ) {
      st.push(ch);
    } else {
      if (!st.length) return false;

      const top = st.pop();

      if (top !== match[ch]) {
        return false;
      }
    }
  }

  return st.length === 0;
}

// Examples:
// "()[]{}" -> true
// "(]" -> false
// "([{}])" -> true`}),e.jsx("p",{className:"mini",children:"Time: O(n), Space: O(n) worst case."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(r,{}),e.jsx("h3",{children:"BFS vs DFS Mental Model"})]}),e.jsx("p",{children:"BFS uses a queue (FIFO) to explore level by level. DFS uses a stack/recursion (LIFO) to go deep first."}),e.jsx("pre",{children:`// BFS (queue) - level order
function bfs(start, adj) {
  const q = [start];
  const seen = new Set([start]);

  while (q.length) {
    const node = q.shift();

    for (const nei of adj[node]) {
      if (!seen.has(nei)) {
        seen.add(nei);
        q.push(nei);
      }
    }
  }
}

// DFS (stack) - depth first
function dfs(start, adj) {
  const st = [start];
  const seen = new Set([start]);

  while (st.length) {
    const node = st.pop();

    for (const nei of adj[node]) {
      if (!seen.has(nei)) {
        seen.add(nei);
        st.push(nei);
      }
    }
  }
}`}),e.jsx("p",{className:"mini",children:"BFS is great for shortest path in unweighted graphs. DFS is great for exploration, cycles, components."})]})]})]});export{o as default};
