import React from "react";

import { FiSearch, FiShuffle, FiTarget, FiTrendingUp } from "react-icons/fi";

import topicStyles from "../../styles/topics.module.css";

const Searching = () => {
    return (
        <section className={`topicPage ${topicStyles.topicStyles}`}>
            <div className="pageHeader">
                <div className="titleSection">
                    <div className="iconBox">
                        <FiSearch />
                    </div>

                    <div>
                        <h2 className="title">Searching</h2>

                        <p className="subtitle">Find a target efficiently</p>
                    </div>
                </div>
            </div>

            <div className="intro">
                Searching is about locating a target in data. The key decision
                is whether the data is unsorted or sorted. Unsorted data usually
                needs a linear scan. Sorted data enables logarithmic searching
                using binary search and its variations.
            </div>

            <div className="grid">
                <article className="card">
                    <div className="cardHead">
                        <FiTarget />

                        <h3>Linear Search</h3>
                    </div>

                    <p>
                        Checks every element one by one until the target is
                        found. Works on any array (sorted or unsorted).
                    </p>

                    <pre>{`function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }

  return -1;
}

// Time: O(n)
// Space: O(1)`}</pre>

                    <p className="mini">
                        Best when the array is small or unsorted.
                    </p>
                </article>

                <article className="card">
                    <div className="cardHead">
                        <FiTrendingUp />

                        <h3>Binary Search</h3>
                    </div>

                    <p>
                        Works only on sorted data. Repeatedly cuts the search
                        space in half.
                    </p>

                    <pre>{`function binarySearch(arr, target) {
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
// Space: O(1)`}</pre>

                    <p className="mini">
                        Requires sorted order. Most common searching tool.
                    </p>
                </article>

                <article className="card">
                    <div className="cardHead">
                        <FiShuffle />

                        <h3>Binary Search Variations</h3>
                    </div>

                    <p>
                        Binary search can be modified to find boundaries like
                        first occurrence, last occurrence, lower bound, and
                        upper bound.
                    </p>

                    <pre>{`// First occurrence of target
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
}`}</pre>

                    <p className="mini">
                        Variations are used heavily in interviews.
                    </p>
                </article>

                <article className="card">
                    <div className="cardHead">
                        <FiSearch />

                        <h3>Lower Bound and Upper Bound</h3>
                    </div>

                    <p>
                        Lower bound is the first index where value is not less
                        than target. Upper bound is the first index where value
                        is greater than target.
                    </p>

                    <pre>{`// Lower bound
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
}`}</pre>

                    <p className="mini">These are boundary-finding patterns.</p>
                </article>

                <article className="card">
                    <div className="cardHead">
                        <FiTrendingUp />

                        <h3>Ternary Search (Brief)</h3>
                    </div>

                    <p>
                        Similar to binary search but splits range into three
                        parts. Mostly used when searching for a maximum/minimum
                        in a unimodal function.
                    </p>

                    <pre>{`// Ternary search on a unimodal function f(x)
// Conceptual example
function ternarySearch(left, right, f, eps = 1e-6) {
  while (right - left > eps) {
    const m1 = left + (right - left) / 3;
    const m2 = right - (right - left) / 3;

    if (f(m1) < f(m2)) left = m1;
    else right = m2;
  }

  return left;
}`}</pre>

                    <p className="mini">
                        Rare for array search. More common in optimization
                        problems.
                    </p>
                </article>

                <article className="card">
                    <div className="cardHead">
                        <FiTarget />

                        <h3>Mental Checklist</h3>
                    </div>

                    <p>Before choosing a search method, ask:</p>

                    <pre>{`1) Is the data sorted?
2) Do I need exact value or boundary?
3) Is it a function optimization problem?
4) Can I reduce the search space each step?`}</pre>

                    <p className="mini">
                        If sorted → binary search family. If unsorted → linear
                        search.
                    </p>
                </article>
            </div>
        </section>
    );
};

export default Searching;
