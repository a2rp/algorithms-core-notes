import React from "react";

import {
    FiBarChart2,
    FiCheckCircle,
    FiCpu,
    FiLayers,
    FiShuffle,
    FiTrendingUp,
} from "react-icons/fi";

import { Styled } from "./styled";

const Sorting = () => {
    return (
        <Styled.Wrapper>
            <div className="pageHeader">
                <div className="titleSection">
                    <div className="iconBox">
                        <FiBarChart2 />
                    </div>

                    <div>
                        <h2 className="title">Sorting</h2>

                        <p className="subtitle">
                            Order data, reduce search cost, simplify logic
                        </p>
                    </div>
                </div>
            </div>

            <div className="intro">
                Sorting rearranges data into a predictable order. This unlocks
                faster searching, easier duplicate handling, and cleaner logic.
                The goal is not to memorize every sort, but to know when a sort
                is needed and which one fits the constraints.
            </div>

            <div className="grid">
                <article className="card">
                    <div className="cardHead">
                        <FiShuffle />

                        <h3>Bubble Sort</h3>
                    </div>

                    <p>
                        Repeatedly swap adjacent out-of-order elements. Easy to
                        understand, slow in practice.
                    </p>

                    <pre>{`function bubbleSort(arr) {
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
// Space: O(1) extra if in-place`}</pre>

                    <p className="mini">
                        Useful for teaching, not for production.
                    </p>
                </article>

                <article className="card">
                    <div className="cardHead">
                        <FiTrendingUp />

                        <h3>Selection Sort</h3>
                    </div>

                    <p>
                        Select the smallest element and place it at the front,
                        then repeat for the remaining positions.
                    </p>

                    <pre>{`function selectionSort(arr) {
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
// Space: O(1) extra if in-place`}</pre>

                    <p className="mini">Minimal swaps, still quadratic.</p>
                </article>

                <article className="card">
                    <div className="cardHead">
                        <FiLayers />

                        <h3>Insertion Sort</h3>
                    </div>

                    <p>
                        Build a sorted prefix by inserting each new element into
                        its correct position.
                    </p>

                    <pre>{`function insertionSort(arr) {
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
// Space: O(1) extra if in-place`}</pre>

                    <p className="mini">
                        Great for small arrays and nearly-sorted data.
                    </p>
                </article>

                <article className="card">
                    <div className="cardHead">
                        <FiLayers />

                        <h3>Merge Sort</h3>
                    </div>

                    <p>
                        Divide the array into halves, sort each half, then merge
                        the sorted halves.
                    </p>

                    <pre>{`function mergeSort(arr) {
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
// Stable: Yes`}</pre>

                    <p className="mini">
                        Reliable and stable, but uses extra memory.
                    </p>
                </article>

                <article className="card">
                    <div className="cardHead">
                        <FiShuffle />

                        <h3>Quick Sort</h3>
                    </div>

                    <p>
                        Pick a pivot, partition values around the pivot, then
                        recursively sort both partitions.
                    </p>

                    <pre>{`function quickSort(arr) {
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
// Stable: No`}</pre>

                    <p className="mini">
                        Fast average performance, but pivot choice matters.
                    </p>
                </article>

                <article className="card">
                    <div className="cardHead">
                        <FiTrendingUp />

                        <h3>Heap Sort</h3>
                    </div>

                    <p>
                        Build a heap, repeatedly extract the maximum or minimum,
                        and restore the heap property.
                    </p>

                    <pre>{`// Concept:
// 1. Build a heap
// 2. Move root to final position
// 3. Restore heap property
// 4. Repeat

// Time: O(n log n)
// Space: O(1) extra with in-place heapify
// Stable: No

// In JavaScript, a Heap class is usually
// the clearest implementation.`}</pre>

                    <p className="mini">
                        Strong worst-case guarantee and constant extra space.
                    </p>
                </article>

                <article className="card">
                    <div className="cardHead">
                        <FiCheckCircle />

                        <h3>Counting Sort</h3>
                    </div>

                    <p>
                        Count occurrences of each value. Works well when the
                        value range is reasonably small.
                    </p>

                    <pre>{`function countingSort(arr, maxVal) {
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
// Space: O(k)`}</pre>

                    <p className="mini">
                        Great for small non-negative integer ranges.
                    </p>
                </article>

                <article className="card">
                    <div className="cardHead">
                        <FiCheckCircle />

                        <h3>Radix Sort</h3>
                    </div>

                    <p>
                        Sort values digit by digit using a stable sorting method
                        for each position.
                    </p>

                    <pre>{`// Concept:
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
// Space depends on the sub-sort.`}</pre>

                    <p className="mini">
                        Useful for integers or fixed-length values.
                    </p>
                </article>

                <article className="card">
                    <div className="cardHead">
                        <FiLayers />

                        <h3>Stable vs Unstable</h3>
                    </div>

                    <p>
                        A stable sort preserves the relative order of equal
                        elements. An unstable sort may change that order.
                    </p>

                    <pre>{`// Example:
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
// Heap Sort      -> Unstable`}</pre>

                    <p className="mini">
                        Stability matters when sorting by multiple fields.
                    </p>
                </article>

                <article className="card">
                    <div className="cardHead">
                        <FiCpu />

                        <h3>In-place vs Extra Memory</h3>
                    </div>

                    <p>
                        Some algorithms rearrange elements directly. Others
                        require additional arrays or data structures.
                    </p>

                    <pre>{`// Usually in-place:
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
// Prefer a stable method.`}</pre>

                    <p className="mini">
                        Always mention both time and space during algorithm
                        analysis.
                    </p>
                </article>
            </div>
        </Styled.Wrapper>
    );
};

export default Sorting;
