import{j as e,h as t,F as r,c as i,e as a,i as s,b as n}from"./index-DfTTk35e.js";import{t as l}from"./topics.module-NnsBXvW6.js";const d=()=>e.jsxs("section",{className:`topicPage ${l.topicStyles}`,children:[e.jsx("div",{className:"pageHeader",children:e.jsxs("div",{className:"titleSection",children:[e.jsx("div",{className:"iconBox",children:e.jsx(t,{})}),e.jsxs("div",{children:[e.jsx("h2",{className:"title",children:"Sorting"}),e.jsx("p",{className:"subtitle",children:"Order data, reduce search cost, simplify logic"})]})]})}),e.jsx("div",{className:"intro",children:"Sorting rearranges data into a predictable order. This unlocks faster searching, easier duplicate handling, and cleaner logic. The goal is not to memorize every sort, but to know when a sort is needed and which one fits the constraints."}),e.jsxs("div",{className:"grid",children:[e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(r,{}),e.jsx("h3",{children:"Bubble Sort"})]}),e.jsx("p",{children:"Repeatedly swap adjacent out-of-order elements. Easy to understand, slow in practice."}),e.jsx("pre",{children:`function bubbleSort(arr) {
  const a = arr.slice();

  for (let i = 0; i < a.length; i++) {
    let swapped = false;

    for (let j = 0; j < a.length - 1 - i; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return a;
}

// Time: O(n^2) worst, O(n) best
// Space: O(1) extra if in-place`}),e.jsx("p",{className:"mini",children:"Useful for teaching, not for production."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(i,{}),e.jsx("h3",{children:"Selection Sort"})]}),e.jsx("p",{children:"Select the smallest element and place it at the front, then repeat for the remaining positions."}),e.jsx("pre",{children:`function selectionSort(arr) {
  const a = arr.slice();

  for (let i = 0; i < a.length; i++) {
    let minIdx = i;

    for (let j = i + 1; j < a.length; j++) {
      if (a[j] < a[minIdx]) {
        minIdx = j;
      }
    }

    [a[i], a[minIdx]] = [a[minIdx], a[i]];
  }

  return a;
}

// Time: O(n^2)
// Space: O(1) extra if in-place`}),e.jsx("p",{className:"mini",children:"Minimal swaps, still quadratic."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(a,{}),e.jsx("h3",{children:"Insertion Sort"})]}),e.jsx("p",{children:"Build a sorted prefix by inserting each new element into its correct position."}),e.jsx("pre",{children:`function insertionSort(arr) {
  const a = arr.slice();

  for (let i = 1; i < a.length; i++) {
    const key = a[i];
    let j = i - 1;

    while (j >= 0 && a[j] > key) {
      a[j + 1] = a[j];
      j--;
    }

    a[j + 1] = key;
  }

  return a;
}

// Time: O(n^2) worst, O(n) best
// Space: O(1) extra if in-place`}),e.jsx("p",{className:"mini",children:"Great for small arrays and nearly-sorted data."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(a,{}),e.jsx("h3",{children:"Merge Sort"})]}),e.jsx("p",{children:"Divide the array into halves, sort each half, then merge the sorted halves."}),e.jsx("pre",{children:`function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(a, b) {
  const out = [];
  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
      out.push(a[i++]);
    } else {
      out.push(b[j++]);
    }
  }

  while (i < a.length) out.push(a[i++]);
  while (j < b.length) out.push(b[j++]);

  return out;
}

// Time: O(n log n)
// Space: O(n)
// Stable: Yes`}),e.jsx("p",{className:"mini",children:"Reliable and stable, but uses extra memory."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(r,{}),e.jsx("h3",{children:"Quick Sort"})]}),e.jsx("p",{children:"Pick a pivot, partition values around the pivot, then recursively sort both partitions."}),e.jsx("pre",{children:`function quickSort(arr) {
  const a = arr.slice();

  quickSortInPlace(a, 0, a.length - 1);

  return a;
}

function quickSortInPlace(a, lo, hi) {
  if (lo >= hi) return;

  const p = partition(a, lo, hi);

  quickSortInPlace(a, lo, p - 1);
  quickSortInPlace(a, p + 1, hi);
}

function partition(a, lo, hi) {
  const pivot = a[hi];
  let i = lo;

  for (let j = lo; j < hi; j++) {
    if (a[j] < pivot) {
      [a[i], a[j]] = [a[j], a[i]];
      i++;
    }
  }

  [a[i], a[hi]] = [a[hi], a[i]];

  return i;
}

// Time: O(n log n) average
// Worst: O(n^2)
// Stable: No`}),e.jsx("p",{className:"mini",children:"Fast average performance, but pivot choice matters."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(i,{}),e.jsx("h3",{children:"Heap Sort"})]}),e.jsx("p",{children:"Build a heap, repeatedly extract the maximum or minimum, and restore the heap property."}),e.jsx("pre",{children:`// Concept:
// 1. Build a heap
// 2. Move root to final position
// 3. Restore heap property
// 4. Repeat

// Time: O(n log n)
// Space: O(1) extra with in-place heapify
// Stable: No

// In JavaScript, a Heap class is usually
// the clearest implementation.`}),e.jsx("p",{className:"mini",children:"Strong worst-case guarantee and constant extra space."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(s,{}),e.jsx("h3",{children:"Counting Sort"})]}),e.jsx("p",{children:"Count occurrences of each value. Works well when the value range is reasonably small."}),e.jsx("pre",{children:`function countingSort(arr, maxVal) {
  const count =
    new Array(maxVal + 1).fill(0);

  for (const x of arr) {
    count[x]++;
  }

  const out = [];

  for (let value = 0; value <= maxVal; value++) {
    while (count[value] > 0) {
      out.push(value);
      count[value]--;
    }
  }

  return out;
}

// Time: O(n + k)
// k = value range
// Space: O(k)`}),e.jsx("p",{className:"mini",children:"Great for small non-negative integer ranges."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(s,{}),e.jsx("h3",{children:"Radix Sort"})]}),e.jsx("p",{children:"Sort values digit by digit using a stable sorting method for each position."}),e.jsx("pre",{children:`// Concept:
//
// Sort by:
// 1. ones
// 2. tens
// 3. hundreds
// 4. ...
//
// A stable sub-sort is used for each pass.
//
// Time: O(d * (n + k))
//
// d = number of digits
// k = numeric base
//
// Space depends on the sub-sort.`}),e.jsx("p",{className:"mini",children:"Useful for integers or fixed-length values."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(a,{}),e.jsx("h3",{children:"Stable vs Unstable"})]}),e.jsx("p",{children:"A stable sort preserves the relative order of equal elements. An unstable sort may change that order."}),e.jsx("pre",{children:`// Example:
//
// [
//   { name: "A", score: 5 },
//   { name: "B", score: 5 }
// ]
//
// Stable sort by score:
// A remains before B.
//
// Typical behavior:
//
// Merge Sort     -> Stable
// Insertion Sort -> Stable
// Quick Sort     -> Unstable
// Heap Sort      -> Unstable`}),e.jsx("p",{className:"mini",children:"Stability matters when sorting by multiple fields."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(n,{}),e.jsx("h3",{children:"In-place vs Extra Memory"})]}),e.jsx("p",{children:"Some algorithms rearrange elements directly. Others require additional arrays or data structures."}),e.jsx("pre",{children:`// Usually in-place:
//
// Bubble Sort
// Selection Sort
// Insertion Sort
// Quick Sort
// Heap Sort
//
// Usually extra memory:
//
// Merge Sort    -> O(n)
// Counting Sort -> O(k)
// Radix Sort    -> varies

// Limited memory?
// Prefer an in-place algorithm.
//
// Need stability?
// Prefer a stable method.`}),e.jsx("p",{className:"mini",children:"Always mention both time and space during algorithm analysis."})]})]})]});export{d as default};
