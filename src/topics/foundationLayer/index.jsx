import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiCpu,
    FiTarget,
    FiShuffle,
    FiTrendingUp,
    FiLayers,
    FiActivity,
} from "react-icons/fi";

const FoundationLayer = () => {
    const [open, setOpen] = useState(false);

    return (
        <Styled.Wrapper>
            <Styled.Container className={open ? "open" : ""}>
                <Styled.Header onClick={() => setOpen(!open)}>
                    <div className="left">
                        <div className="icon">
                            <FiLayers />
                        </div>

                        <div className="titleBlock">
                            <h2>Foundation Layer</h2>
                            <p>Non negotiable thinking tools</p>
                        </div>
                    </div>

                    <div className="right">
                        {open ? <FiChevronUp /> : <FiChevronDown />}
                    </div>
                </Styled.Header>

                {open && (
                    <Styled.Content>
                        <div className="intro">
                            Algorithms are not “code tricks”. They are ways of
                            thinking. This section builds the mental tools you
                            need before patterns like binary search, sliding
                            window, greedy, or dynamic programming. If this
                            layer is strong, you stop guessing and start
                            choosing the right approach.
                        </div>

                        <div className="grid">
                            <div className="card">
                                <div className="cardHead">
                                    <FiShuffle />
                                    <h3>What is an Algorithm</h3>
                                </div>
                                <p>
                                    An algorithm is a step-by-step procedure
                                    that transforms an input into an output. It
                                    must be correct, finite, and repeatable.
                                </p>
                                <pre>{`// "Find max" is an algorithm:
// input: array
// output: maximum value

function maxOf(arr) {
  let best = -Infinity;
  for (const x of arr) best = Math.max(best, x);
  return best;
}`}</pre>
                                <p className="mini">
                                    Key idea: same input always gives same
                                    output (deterministic case).
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiActivity />
                                    <h3>Input → Process → Output</h3>
                                </div>
                                <p>
                                    Every problem can be viewed as: data comes
                                    in, work happens, result comes out. This
                                    helps you avoid messy thinking.
                                </p>
                                <pre>{`// Input: [2, 4, 6]
// Process: sum them
// Output: 12

function sum(arr) {
  let s = 0;
  for (const x of arr) s += x;
  return s;
}`}</pre>
                                <p className="mini">
                                    If you cannot clearly define input/output,
                                    the problem is not understood yet.
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiTarget />
                                    <h3>Correctness vs Efficiency</h3>
                                </div>
                                <p>
                                    Correctness means the algorithm works for
                                    all valid inputs. Efficiency means it
                                    performs well as input grows.
                                </p>
                                <pre>{`// Correct but inefficient (O(n^2))
function hasDuplicateSlow(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}

// Correct and faster average (O(n))
function hasDuplicateFast(arr) {
  const seen = new Set();
  for (const x of arr) {
    if (seen.has(x)) return true;
    seen.add(x);
  }
  return false;
}`}</pre>
                                <p className="mini">
                                    First make it correct. Then make it fast.
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiTrendingUp />
                                    <h3>Time Complexity Recap</h3>
                                </div>
                                <p>
                                    Time complexity describes how runtime grows
                                    with input size (n).
                                </p>
                                <pre>{`// O(1)
function getFirst(arr) {
  return arr[0];
}

// O(n)
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// O(n^2)
function allPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      // work
    }
  }
}`}</pre>
                                <p className="mini">
                                    Watch for nested loops, repeated scanning,
                                    and hidden loops.
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiCpu />
                                    <h3>Space Complexity Recap</h3>
                                </div>
                                <p>
                                    Space complexity describes extra memory
                                    usage (not counting the input itself).
                                </p>
                                <pre>{`// O(1) extra space
function sumInPlace(arr) {
  let s = 0;
  for (const x of arr) s += x;
  return s;
}

// O(n) extra space
function copyArray(arr) {
  const out = [];
  for (const x of arr) out.push(x);
  return out;
}`}</pre>
                                <p className="mini">
                                    Space often buys speed (like using Set/Map).
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiTrendingUp />
                                    <h3>Big O Refresher</h3>
                                </div>
                                <p>
                                    Big O gives an upper bound on growth. In
                                    interviews, treat it as “how bad can it
                                    get”.
                                </p>
                                <pre>{`// Common orders:
O(1)    constant
O(log n)  binary search, balanced trees
O(n)    single pass
O(n log n) efficient sorting (merge/quick avg)
O(n^2)  nested loops
O(2^n)  subsets/backtracking`}</pre>
                                <p className="mini">
                                    Focus on the dominant term, ignore
                                    constants.
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiLayers />
                                    <h3>Recursion Mental Model</h3>
                                </div>
                                <p>
                                    Recursion means a function calls itself. It
                                    requires a base case to stop.
                                </p>
                                <pre>{`// Factorial: n! = n * (n-1)!
function factorial(n) {
  if (n <= 1) return 1;   // base case
  return n * factorial(n - 1);
}`}</pre>
                                <p className="mini">
                                    Each call adds a frame to the call stack.
                                    Deep recursion can overflow.
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiShuffle />
                                    <h3>Iterative vs Recursive Trade-offs</h3>
                                </div>
                                <p>
                                    Iteration is often more memory safe.
                                    Recursion is often more readable for
                                    trees/DFS.
                                </p>
                                <pre>{`// Fibonacci (iterative) - O(1) space
function fib(n) {
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }
  return a;
}

// Fibonacci (recursive) - exponential without memoization
function fibSlow(n) {
  if (n <= 1) return n;
  return fibSlow(n - 1) + fibSlow(n - 2);
}`}</pre>
                                <p className="mini">
                                    Recursion without memoization can explode.
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiTrendingUp />
                                    <h3>Master Theorem (Intuitive Intro)</h3>
                                </div>
                                <p>
                                    Master theorem helps estimate runtime of
                                    divide-and-conquer recurrences like:
                                </p>
                                <pre>{`T(n) = a * T(n/b) + f(n)

// Example: Merge sort
T(n) = 2*T(n/2) + O(n)
=> O(n log n)`}</pre>
                                <p className="mini">
                                    You do not need full proof. You need the
                                    intuition: “split + combine cost”.
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiTarget />
                                    <h3>Lower Bounds (Concept)</h3>
                                </div>
                                <p>
                                    Lower bound means the best possible time any
                                    algorithm can achieve for a problem under a
                                    model.
                                </p>
                                <pre>{`// Comparison sorting lower bound:
// Any comparison-based sorting needs
// at least O(n log n) comparisons in worst case.

// That is why merge sort, heap sort are optimal
// in comparison model.`}</pre>
                                <p className="mini">
                                    If you know lower bounds, you stop chasing
                                    impossible optimizations.
                                </p>
                            </div>
                        </div>
                    </Styled.Content>
                )}
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default FoundationLayer;
