import{c as s,j as e,i as o,F as a,d as i,f as r,k as t,b as n}from"./index-D0aA_HMN.js";const l={Wrapper:s.section`
        width: 100%;
        padding: 2rem 0;

        .pageHeader {
            margin-bottom: 1.5rem;
        }

        .titleSection {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .iconBox {
            width: 3rem;
            height: 3rem;
            flex-shrink: 0;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 0.9rem;
            background: var(--color-surface);
            color: var(--color-primary);
            box-shadow: 0 0.5rem 1.5rem var(--color-shadow);
        }

        .iconBox svg {
            font-size: 1.2rem;
        }

        .title {
            font-size: clamp(1.7rem, 3vw, 2.25rem);
            font-weight: 800;
            letter-spacing: -0.02em;
            color: var(--color-text-primary);
        }

        .subtitle {
            margin-top: 0.4rem;
            font-size: 0.9rem;
            color: var(--color-text-muted);
        }

        .intro {
            max-width: 85ch;
            margin-bottom: 1.5rem;
            padding: 1.25rem 1.4rem;
            border: 1px solid var(--color-border);
            border-radius: 0.9rem;
            background: var(--color-surface);
            color: var(--color-text-secondary);
            font-size: 0.95rem;
            line-height: 1.75;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1rem;
        }

        .card {
            min-width: 0;
            display: flex;
            flex-direction: column;
            padding: 1.35rem;
            border: 1px solid var(--color-border);
            border-radius: 0.9rem;
            background: var(--color-surface);
            box-shadow: 0 0.75rem 2rem var(--color-shadow);
            transition:
                transform 160ms ease,
                border-color 160ms ease,
                background 160ms ease;
        }

        .card:hover {
            transform: translateY(-0.15rem);
            border-color: var(--color-border-light);
            background: var(--color-surface-2);
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 0.65rem;
            margin-bottom: 0.8rem;
        }

        .cardHead svg {
            flex-shrink: 0;
            font-size: 1rem;
            color: var(--color-primary);
        }

        .cardHead h3 {
            font-size: 1rem;
            font-weight: 800;
            color: var(--color-text-primary);
        }

        .card > p {
            font-size: 0.88rem;
            line-height: 1.7;
            color: var(--color-text-secondary);
        }

        pre {
            width: 100%;
            margin: 1rem 0 0.8rem;
            padding: 1rem;
            overflow-x: auto;
            border: 1px solid var(--color-code-border);
            border-radius: 0.75rem;
            background: var(--color-code-bg);
            color: var(--color-text-primary);
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 0.75rem;
            line-height: 1.65;
            white-space: pre;
        }

        .mini {
            margin-top: auto;
            padding-top: 0.25rem;
            font-size: 0.75rem !important;
            color: var(--color-text-muted) !important;
        }

        @media (max-width: 1100px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 640px) {
            padding: 1.25rem 0;

            .titleSection {
                align-items: flex-start;
            }

            .iconBox {
                width: 2.7rem;
                height: 2.7rem;
            }

            .intro,
            .card {
                padding: 1.1rem;
            }

            pre {
                padding: 0.85rem;
                font-size: 0.7rem;
            }
        }
    `},d=()=>e.jsxs(l.Wrapper,{children:[e.jsx("div",{className:"pageHeader",children:e.jsxs("div",{className:"titleSection",children:[e.jsx("div",{className:"iconBox",children:e.jsx(o,{})}),e.jsxs("div",{children:[e.jsx("h2",{className:"title",children:"Sorting"}),e.jsx("p",{className:"subtitle",children:"Order data, reduce search cost, simplify logic"})]})]})}),e.jsx("div",{className:"intro",children:"Sorting rearranges data into a predictable order. This unlocks faster searching, easier duplicate handling, and cleaner logic. The goal is not to memorize every sort, but to know when a sort is needed and which one fits the constraints."}),e.jsxs("div",{className:"grid",children:[e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(a,{}),e.jsx("h3",{children:"Bubble Sort"})]}),e.jsx("p",{children:"Repeatedly swap adjacent out-of-order elements. Easy to understand, slow in practice."}),e.jsx("pre",{children:`function bubbleSort(arr) {
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
// Space: O(1) extra if in-place`}),e.jsx("p",{className:"mini",children:"Minimal swaps, still quadratic."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(r,{}),e.jsx("h3",{children:"Insertion Sort"})]}),e.jsx("p",{children:"Build a sorted prefix by inserting each new element into its correct position."}),e.jsx("pre",{children:`function insertionSort(arr) {
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
// Space: O(1) extra if in-place`}),e.jsx("p",{className:"mini",children:"Great for small arrays and nearly-sorted data."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(r,{}),e.jsx("h3",{children:"Merge Sort"})]}),e.jsx("p",{children:"Divide the array into halves, sort each half, then merge the sorted halves."}),e.jsx("pre",{children:`function mergeSort(arr) {
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
// Stable: Yes`}),e.jsx("p",{className:"mini",children:"Reliable and stable, but uses extra memory."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(a,{}),e.jsx("h3",{children:"Quick Sort"})]}),e.jsx("p",{children:"Pick a pivot, partition values around the pivot, then recursively sort both partitions."}),e.jsx("pre",{children:`function quickSort(arr) {
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
// the clearest implementation.`}),e.jsx("p",{className:"mini",children:"Strong worst-case guarantee and constant extra space."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(t,{}),e.jsx("h3",{children:"Counting Sort"})]}),e.jsx("p",{children:"Count occurrences of each value. Works well when the value range is reasonably small."}),e.jsx("pre",{children:`function countingSort(arr, maxVal) {
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
// Space: O(k)`}),e.jsx("p",{className:"mini",children:"Great for small non-negative integer ranges."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(t,{}),e.jsx("h3",{children:"Radix Sort"})]}),e.jsx("p",{children:"Sort values digit by digit using a stable sorting method for each position."}),e.jsx("pre",{children:`// Concept:
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
// Space depends on the sub-sort.`}),e.jsx("p",{className:"mini",children:"Useful for integers or fixed-length values."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(r,{}),e.jsx("h3",{children:"Stable vs Unstable"})]}),e.jsx("p",{children:"A stable sort preserves the relative order of equal elements. An unstable sort may change that order."}),e.jsx("pre",{children:`// Example:
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
