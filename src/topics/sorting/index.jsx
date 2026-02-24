import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiBarChart2,
    FiShuffle,
    FiTrendingUp,
    FiLayers,
    FiCheckCircle,
    FiCpu,
} from "react-icons/fi";

const Sorting = () => {
    const [open, setOpen] = useState(false);

    return (
        <Styled.Wrapper>
            <Styled.Container className={open ? "open" : ""}>
                <Styled.Header onClick={() => setOpen(!open)}>
                    <div className="left">
                        <div className="icon">
                            <FiBarChart2 />
                        </div>

                        <div className="titleBlock">
                            <h2>Sorting</h2>
                            <p>
                                Order data, reduce search cost, simplify logic
                            </p>
                        </div>
                    </div>

                    <div className="right">
                        {open ? <FiChevronUp /> : <FiChevronDown />}
                    </div>
                </Styled.Header>

                {open && (
                    <Styled.Content>
                        <div className="intro">
                            Sorting rearranges data into a predictable order.
                            This unlocks faster searching, easier duplicate
                            handling, and cleaner logic. The goal is not to
                            memorize every sort, but to know when a sort is
                            needed and which one fits the constraints.
                        </div>

                        <div className="grid">
                            <div className="card">
                                <div className="cardHead">
                                    <FiShuffle />
                                    <h3>Bubble Sort</h3>
                                </div>
                                <p>
                                    Repeatedly swap adjacent out-of-order
                                    elements. Easy to understand, slow in
                                    practice.
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
    if (!swapped) break; // early exit
  }
  return a;
}
// Time: O(n^2) worst, O(n) best (already sorted)
// Space: O(1) extra (if in-place), O(n) here due to copy`}</pre>
                                <p className="mini">
                                    Useful for teaching, not for production.
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiTrendingUp />
                                    <h3>Selection Sort</h3>
                                </div>
                                <p>
                                    Select the smallest element and place it at
                                    the front, repeat.
                                </p>
                                <pre>{`function selectionSort(arr) {
  const a = arr.slice();
  for (let i = 0; i < a.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] < a[minIdx]) minIdx = j;
    }
    [a[i], a[minIdx]] = [a[minIdx], a[i]];
  }
  return a;
}
// Time: O(n^2) always
// Space: O(1) extra (if in-place), O(n) here due to copy`}</pre>
                                <p className="mini">
                                    Minimal swaps, still quadratic.
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiLayers />
                                    <h3>Insertion Sort</h3>
                                </div>
                                <p>
                                    Build a sorted prefix by inserting each new
                                    element into its correct position.
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
// Time: O(n^2) worst, O(n) best (nearly sorted)
// Space: O(1) extra (if in-place), O(n) here due to copy`}</pre>
                                <p className="mini">
                                    Great for small arrays and nearly-sorted
                                    data.
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiLayers />
                                    <h3>Merge Sort</h3>
                                </div>
                                <p>
                                    Divide array into halves, sort each half,
                                    merge sorted halves.
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
  let i = 0, j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) out.push(a[i++]);
    else out.push(b[j++]);
  }

  while (i < a.length) out.push(a[i++]);
  while (j < b.length) out.push(b[j++]);

  return out;
}
// Time: O(n log n)
// Space: O(n) extra
// Stable: Yes`}</pre>
                                <p className="mini">
                                    Reliable, stable, but uses extra memory.
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiShuffle />
                                    <h3>Quick Sort</h3>
                                </div>
                                <p>
                                    Pick a pivot, partition into &lt; pivot and
                                    &gt; pivot, then sort partitions.
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
// Time: O(n log n) avg, O(n^2) worst
// Space: O(log n) avg recursion stack
// Stable: No`}</pre>
                                <p className="mini">
                                    Fast average, worst-case exists if pivot is
                                    bad.
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiTrendingUp />
                                    <h3>Heap Sort</h3>
                                </div>
                                <p>
                                    Build a heap, repeatedly extract max/min and
                                    rebuild heap property.
                                </p>
                                <pre>{`// Concept: use priority queue / heap structure
// Time: O(n log n)
// Space: O(1) extra (in-place heapify possible)
// Stable: No

// In JS, easiest is to implement a Heap class.
// For interviews: know the idea + complexity.`}</pre>
                                <p className="mini">
                                    Good worst-case guarantee, not stable.
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiCheckCircle />
                                    <h3>Counting Sort</h3>
                                </div>
                                <p>
                                    Count occurrences of each value (works when
                                    range is small).
                                </p>
                                <pre>{`function countingSort(arr, maxVal) {
  const count = new Array(maxVal + 1).fill(0);
  for (const x of arr) count[x]++;

  const out = [];
  for (let v = 0; v <= maxVal; v++) {
    while (count[v] > 0) {
      out.push(v);
      count[v]--;
    }
  }
  return out;
}
// Time: O(n + k) where k = range
// Space: O(k)
// Stable: Can be stable if built using prefix sums`}</pre>
                                <p className="mini">
                                    Great when values are small and
                                    non-negative.
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiCheckCircle />
                                    <h3>Radix Sort</h3>
                                </div>
                                <p>
                                    Sort by digits (LSD/MSD) using a stable
                                    sub-sort (often counting sort per digit).
                                </p>
                                <pre>{`// Concept:
// sort numbers by digit place: ones, tens, hundreds...
// uses stable sorting each pass

// Time: O(d*(n + k))
// d = number of digits
// k = base (10 for decimal)
// Space: depends on sub-sort (often O(n + k))`}</pre>
                                <p className="mini">
                                    Works well for integers/strings with fixed
                                    length.
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiLayers />
                                    <h3>Stable vs Unstable</h3>
                                </div>
                                <p>
                                    Stable sort keeps the relative order of
                                    equal elements. Unstable sort may change it.
                                </p>
                                <pre>{`// Example:
// [{name:"A", score:5}, {name:"B", score:5}]
// Stable sort by score keeps A before B.
// Unstable sort might swap them.

// Merge sort: stable
// Quick sort: not stable (typical)
// Heap sort: not stable
// Insertion sort: stable`}</pre>
                                <p className="mini">
                                    Stability matters in multi-key sorting.
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiCpu />
                                    <h3>In-place vs Extra Memory</h3>
                                </div>
                                <p>
                                    In-place uses constant extra space. Some
                                    sorts need extra arrays to merge/build
                                    output.
                                </p>
                                <pre>{`// In-place (typical):
// bubble, selection, insertion, quick, heap

// Extra memory:
// merge (O(n)), counting (O(k)), radix (varies)

// Rule:
// If memory is limited -> prefer in-place.
// If stability required -> merge or stable method.`}</pre>
                                <p className="mini">
                                    Always mention space in interviews.
                                </p>
                            </div>
                        </div>
                    </Styled.Content>
                )}
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default Sorting;
