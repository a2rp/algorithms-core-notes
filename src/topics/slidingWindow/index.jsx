import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiMove,
    FiTarget,
    FiShuffle,
    FiTrendingUp,
    FiActivity,
} from "react-icons/fi";

const SlidingWindow = () => {
    const [open, setOpen] = useState(false);

    return (
        <Styled.Wrapper>
            <Styled.Container className={open ? "open" : ""}>
                <Styled.Header onClick={() => setOpen(!open)}>
                    <div className="left">
                        <div className="icon">
                            <FiMove />
                        </div>

                        <div className="titleBlock">
                            <h2>Sliding Window</h2>
                            <p>
                                Fixed window, variable window, and two pointers
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
                            Sliding Window is a pattern for problems where you
                            need information about a continuous subarray /
                            substring. Instead of recomputing from scratch, you
                            reuse work by moving a window step-by-step. This
                            converts many O(n²) solutions into O(n).
                        </div>

                        <div className="grid">
                            {/* What is Sliding Window */}
                            <div className="card">
                                <div className="cardHead">
                                    <FiActivity />
                                    <h3>What is a Window</h3>
                                </div>
                                <p>
                                    A window is a range inside an array/string
                                    represented by two pointers: left and right.
                                </p>
                                <pre>{`// window is [l..r]
let l = 0;
for (let r = 0; r < arr.length; r++) {
  // expand window by moving r
  // shrink window by moving l when needed
}`}</pre>
                                <p className="mini">
                                    Mental model: expand, then shrink to
                                    maintain a condition.
                                </p>
                            </div>

                            {/* Fixed Window */}
                            <div className="card">
                                <div className="cardHead">
                                    <FiTarget />
                                    <h3>Fixed Window</h3>
                                </div>
                                <p>
                                    Window size is constant (k). You slide by
                                    adding the new element and removing the old
                                    one.
                                </p>
                                <pre>{`// Max sum of subarray of size k
function maxSumFixedWindow(arr, k) {
  if (k <= 0 || k > arr.length) return null;

  let sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];

  let best = sum;

  for (let r = k; r < arr.length; r++) {
    sum += arr[r];        // add new
    sum -= arr[r - k];    // remove old
    best = Math.max(best, sum);
  }

  return best;
}

// Example:
console.log(maxSumFixedWindow([2, 1, 5, 1, 3, 2], 3)); // 9 (5+1+3)`}</pre>
                                <p className="mini">Time: O(n), Space: O(1)</p>
                            </div>

                            {/* Variable Window */}
                            <div className="card">
                                <div className="cardHead">
                                    <FiTrendingUp />
                                    <h3>Variable Window</h3>
                                </div>
                                <p>
                                    Window size changes. Typically used when you
                                    need the smallest or longest range
                                    satisfying a condition.
                                </p>
                                <pre>{`// Smallest subarray length with sum >= target
function minLenSubarraySum(arr, target) {
  let l = 0;
  let sum = 0;
  let best = Infinity;

  for (let r = 0; r < arr.length; r++) {
    sum += arr[r];

    while (sum >= target) {
      best = Math.min(best, r - l + 1);
      sum -= arr[l];
      l++;
    }
  }

  return best === Infinity ? 0 : best;
}

// Example:
console.log(minLenSubarraySum([2, 3, 1, 2, 4, 3], 7)); // 2 (4+3)`}</pre>
                                <p className="mini">
                                    Pattern: expand until valid, shrink to
                                    minimize.
                                </p>
                            </div>

                            {/* Two Pointer Technique */}
                            <div className="card">
                                <div className="cardHead">
                                    <FiShuffle />
                                    <h3>Two Pointer Technique</h3>
                                </div>
                                <p>
                                    Two pointers is a broader pattern. Sliding
                                    window is one type. Two pointers also works
                                    on sorted arrays and opposite-end scanning.
                                </p>
                                <pre>{`// Pair sum in sorted array (two pointers)
function hasPairWithSumSorted(arr, target) {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    const sum = arr[l] + arr[r];
    if (sum === target) return true;
    if (sum < target) l++;
    else r--;
  }

  return false;
}

// Example:
console.log(hasPairWithSumSorted([1, 2, 4, 7, 11, 15], 15)); // true (4+11)`}</pre>
                                <p className="mini">
                                    Works best when array is sorted or condition
                                    is monotonic.
                                </p>
                            </div>

                            {/* Common Use Cases */}
                            <div className="card">
                                <div className="cardHead">
                                    <FiMove />
                                    <h3>Common Use Cases</h3>
                                </div>
                                <p>Sliding window is common for:</p>
                                <pre>{`// Examples:
- longest substring without repeating characters
- max/min sum in range of size k
- smallest window meeting a condition
- count of distinct elements in a window
- frequency-based substring problems`}</pre>
                                <p className="mini">
                                    If it says "subarray" / "substring", think
                                    window.
                                </p>
                            </div>

                            {/* Pitfalls */}
                            <div className="card">
                                <div className="cardHead">
                                    <FiActivity />
                                    <h3>Common Pitfalls</h3>
                                </div>
                                <p>
                                    Sliding window works when the condition is
                                    maintainable as you move pointers. If the
                                    property is not monotonic, window logic can
                                    break.
                                </p>
                                <pre>{`// Pitfalls:
- forgetting to shrink with while(...)
- shrinking with if instead of while
- incorrect window size calculation (r - l + 1)
- using window for non-monotonic constraints`}</pre>
                                <p className="mini">
                                    Use "while" when condition might need
                                    multiple shrinks.
                                </p>
                            </div>
                        </div>
                    </Styled.Content>
                )}
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default SlidingWindow;
