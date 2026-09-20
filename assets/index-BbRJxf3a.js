import{j as e,g as r,a as i,c as a,F as t}from"./index-DfTTk35e.js";import{t as s}from"./topics.module-NnsBXvW6.js";const c=()=>e.jsxs("section",{className:`topicPage ${s.topicStyles}`,children:[e.jsx("div",{className:"pageHeader",children:e.jsxs("div",{className:"titleSection",children:[e.jsx("div",{className:"iconBox",children:e.jsx(r,{})}),e.jsxs("div",{children:[e.jsx("h2",{className:"title",children:"Searching"}),e.jsx("p",{className:"subtitle",children:"Find a target efficiently"})]})]})}),e.jsx("div",{className:"intro",children:"Searching is about locating a target in data. The key decision is whether the data is unsorted or sorted. Unsorted data usually needs a linear scan. Sorted data enables logarithmic searching using binary search and its variations."}),e.jsxs("div",{className:"grid",children:[e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(i,{}),e.jsx("h3",{children:"Linear Search"})]}),e.jsx("p",{children:"Checks every element one by one until the target is found. Works on any array (sorted or unsorted)."}),e.jsx("pre",{children:`function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }

  return -1;
}

// Time: O(n)
// Space: O(1)`}),e.jsx("p",{className:"mini",children:"Best when the array is small or unsorted."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(a,{}),e.jsx("h3",{children:"Binary Search"})]}),e.jsx("p",{children:"Works only on sorted data. Repeatedly cuts the search space in half."}),e.jsx("pre",{children:`function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;

    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

// Time: O(log n)
// Space: O(1)`}),e.jsx("p",{className:"mini",children:"Requires sorted order. Most common searching tool."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(t,{}),e.jsx("h3",{children:"Binary Search Variations"})]}),e.jsx("p",{children:"Binary search can be modified to find boundaries like first occurrence, last occurrence, lower bound, and upper bound."}),e.jsx("pre",{children:`// First occurrence of target
function firstOccurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let ans = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      ans = mid;
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return ans;
}

// Last occurrence of target
function lastOccurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let ans = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      ans = mid;
      left = mid + 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return ans;
}`}),e.jsx("p",{className:"mini",children:"Variations are used heavily in interviews."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(r,{}),e.jsx("h3",{children:"Lower Bound and Upper Bound"})]}),e.jsx("p",{children:"Lower bound is the first index where value is not less than target. Upper bound is the first index where value is greater than target."}),e.jsx("pre",{children:`// Lower bound
function lowerBound(arr, target) {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] < target) left = mid + 1;
    else right = mid;
  }

  return left;
}

// Upper bound
function upperBound(arr, target) {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] <= target) left = mid + 1;
    else right = mid;
  }

  return left;
}`}),e.jsx("p",{className:"mini",children:"These are boundary-finding patterns."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(a,{}),e.jsx("h3",{children:"Ternary Search (Brief)"})]}),e.jsx("p",{children:"Similar to binary search but splits range into three parts. Mostly used when searching for a maximum/minimum in a unimodal function."}),e.jsx("pre",{children:`// Ternary search on a unimodal function f(x)
// Conceptual example
function ternarySearch(left, right, f, eps = 1e-6) {
  while (right - left > eps) {
    const m1 = left + (right - left) / 3;
    const m2 = right - (right - left) / 3;

    if (f(m1) < f(m2)) left = m1;
    else right = m2;
  }

  return left;
}`}),e.jsx("p",{className:"mini",children:"Rare for array search. More common in optimization problems."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(i,{}),e.jsx("h3",{children:"Mental Checklist"})]}),e.jsx("p",{children:"Before choosing a search method, ask:"}),e.jsx("pre",{children:`1) Is the data sorted?
2) Do I need exact value or boundary?
3) Is it a function optimization problem?
4) Can I reduce the search space each step?`}),e.jsx("p",{className:"mini",children:"If sorted → binary search family. If unsorted → linear search."})]})]})]});export{c as default};
