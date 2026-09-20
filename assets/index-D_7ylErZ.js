import{j as e,m as i,f as s,a as n,c as r,F as a}from"./index-DfTTk35e.js";import{t}from"./topics.module-NnsBXvW6.js";const d=()=>e.jsxs("section",{className:`topicPage ${t.topicStyles}`,children:[e.jsx("div",{className:"pageHeader",children:e.jsxs("div",{className:"titleSection",children:[e.jsx("div",{className:"iconBox",children:e.jsx(i,{})}),e.jsxs("div",{children:[e.jsx("h2",{className:"title",children:"Sliding Window"}),e.jsx("p",{className:"subtitle",children:"Fixed window, variable window, and two pointers"})]})]})}),e.jsx("div",{className:"intro",children:"Sliding Window is a pattern for problems where you need information about a continuous subarray / substring. Instead of recomputing from scratch, you reuse work by moving a window step-by-step. This converts many O(n²) solutions into O(n)."}),e.jsxs("div",{className:"grid",children:[e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(s,{}),e.jsx("h3",{children:"What is a Window"})]}),e.jsx("p",{children:"A window is a range inside an array/string represented by two pointers: left and right."}),e.jsx("pre",{children:`// window is [l..r]
let l = 0;

for (let r = 0; r < arr.length; r++) {
  // expand window by moving r

  // shrink window by moving l when needed
}`}),e.jsx("p",{className:"mini",children:"Mental model: expand, then shrink to maintain a condition."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(n,{}),e.jsx("h3",{children:"Fixed Window"})]}),e.jsx("p",{children:"Window size is constant (k). You slide by adding the new element and removing the old one."}),e.jsx("pre",{children:`// Max sum of subarray of size k
function maxSumFixedWindow(arr, k) {
  if (k <= 0 || k > arr.length) {
    return null;
  }

  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  let best = sum;

  for (let r = k; r < arr.length; r++) {
    sum += arr[r];        // add new
    sum -= arr[r - k];    // remove old

    best = Math.max(best, sum);
  }

  return best;
}

// Example:
console.log(
  maxSumFixedWindow(
    [2, 1, 5, 1, 3, 2],
    3
  )
);

// 9 (5 + 1 + 3)`}),e.jsx("p",{className:"mini",children:"Time: O(n), Space: O(1)"})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(r,{}),e.jsx("h3",{children:"Variable Window"})]}),e.jsx("p",{children:"Window size changes. Typically used when you need the smallest or longest range satisfying a condition."}),e.jsx("pre",{children:`// Smallest subarray length
// with sum >= target
function minLenSubarraySum(arr, target) {
  let l = 0;
  let sum = 0;
  let best = Infinity;

  for (let r = 0; r < arr.length; r++) {
    sum += arr[r];

    while (sum >= target) {
      best = Math.min(
        best,
        r - l + 1
      );

      sum -= arr[l];
      l++;
    }
  }

  return best === Infinity ? 0 : best;
}

// Example:
console.log(
  minLenSubarraySum(
    [2, 3, 1, 2, 4, 3],
    7
  )
);

// 2 (4 + 3)`}),e.jsx("p",{className:"mini",children:"Pattern: expand until valid, shrink to minimize."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(a,{}),e.jsx("h3",{children:"Two Pointer Technique"})]}),e.jsx("p",{children:"Two pointers is a broader pattern. Sliding window is one type. Two pointers also works on sorted arrays and opposite-end scanning."}),e.jsx("pre",{children:`// Pair sum in sorted array
function hasPairWithSumSorted(
  arr,
  target
) {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    const sum = arr[l] + arr[r];

    if (sum === target) {
      return true;
    }

    if (sum < target) {
      l++;
    } else {
      r--;
    }
  }

  return false;
}

// Example:
console.log(
  hasPairWithSumSorted(
    [1, 2, 4, 7, 11, 15],
    15
  )
);

// true (4 + 11)`}),e.jsx("p",{className:"mini",children:"Works best when array is sorted or condition is monotonic."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(i,{}),e.jsx("h3",{children:"Common Use Cases"})]}),e.jsx("p",{children:"Sliding window is common for:"}),e.jsx("pre",{children:`- longest substring without
  repeating characters

- max/min sum in range
  of size k

- smallest window meeting
  a condition

- count of distinct elements
  in a window

- frequency-based substring
  problems`}),e.jsx("p",{className:"mini",children:'If it says "subarray" / "substring", think window.'})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(s,{}),e.jsx("h3",{children:"Common Pitfalls"})]}),e.jsx("p",{children:"Sliding window works when the condition is maintainable as you move pointers. If the property is not monotonic, window logic can break."}),e.jsx("pre",{children:`// Pitfalls:

- forgetting to shrink
  with while(...)

- shrinking with if
  instead of while

- incorrect window size
  calculation:
  r - l + 1

- using window for
  non-monotonic constraints`}),e.jsx("p",{className:"mini",children:'Use "while" when condition might need multiple shrinks.'})]})]})]});export{d as default};
