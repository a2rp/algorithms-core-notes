import{c as n,j as e,f as a,F as i,g as o,a as s,d as r,b as t}from"./index-D0aA_HMN.js";const c={Wrapper:n.section`
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
    `},d=()=>e.jsxs(c.Wrapper,{children:[e.jsx("div",{className:"pageHeader",children:e.jsxs("div",{className:"titleSection",children:[e.jsx("div",{className:"iconBox",children:e.jsx(a,{})}),e.jsxs("div",{children:[e.jsx("h2",{className:"title",children:"Foundation Layer"}),e.jsx("p",{className:"subtitle",children:"Non negotiable thinking tools"})]})]})}),e.jsx("div",{className:"intro",children:"Algorithms are not “code tricks”. They are ways of thinking. This section builds the mental tools you need before patterns like binary search, sliding window, greedy, or dynamic programming. If this layer is strong, you stop guessing and start choosing the right approach."}),e.jsxs("div",{className:"grid",children:[e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(i,{}),e.jsx("h3",{children:"What is an Algorithm"})]}),e.jsx("p",{children:"An algorithm is a step-by-step procedure that transforms an input into an output. It must be correct, finite, and repeatable."}),e.jsx("pre",{children:`// "Find max" is an algorithm:
// input: array
// output: maximum value
function maxOf(arr) {
  let best = -Infinity;
  for (const x of arr) best = Math.max(best, x);
  return best;
}`}),e.jsx("p",{className:"mini",children:"Key idea: same input always gives same output (deterministic case)."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(o,{}),e.jsx("h3",{children:"Input → Process → Output"})]}),e.jsx("p",{children:"Every problem can be viewed as: data comes in, work happens, result comes out. This helps you avoid messy thinking."}),e.jsx("pre",{children:`// Input: [2, 4, 6]
// Process: sum them
// Output: 12
function sum(arr) {
  let s = 0;
  for (const x of arr) s += x;
  return s;
}`}),e.jsx("p",{className:"mini",children:"If you cannot clearly define input/output, the problem is not understood yet."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(s,{}),e.jsx("h3",{children:"Correctness vs Efficiency"})]}),e.jsx("p",{children:"Correctness means the algorithm works for all valid inputs. Efficiency means it performs well as input grows."}),e.jsx("pre",{children:`// Correct but inefficient (O(n^2))
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
}`}),e.jsx("p",{className:"mini",children:"First make it correct. Then make it fast."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(r,{}),e.jsx("h3",{children:"Time Complexity Recap"})]}),e.jsx("p",{children:"Time complexity describes how runtime grows with input size (n)."}),e.jsx("pre",{children:`// O(1)
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
}`}),e.jsx("p",{className:"mini",children:"Watch for nested loops, repeated scanning, and hidden loops."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(t,{}),e.jsx("h3",{children:"Space Complexity Recap"})]}),e.jsx("p",{children:"Space complexity describes extra memory usage (not counting the input itself)."}),e.jsx("pre",{children:`// O(1) extra space
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
}`}),e.jsx("p",{className:"mini",children:"Space often buys speed (like using Set/Map)."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(r,{}),e.jsx("h3",{children:"Big O Refresher"})]}),e.jsx("p",{children:"Big O gives an upper bound on growth. In interviews, treat it as “how bad can it get”."}),e.jsx("pre",{children:`// Common orders:
O(1)        constant
O(log n)    binary search, balanced trees
O(n)        single pass
O(n log n)  efficient sorting (merge/quick avg)
O(n^2)      nested loops
O(2^n)      subsets/backtracking`}),e.jsx("p",{className:"mini",children:"Focus on the dominant term, ignore constants."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(a,{}),e.jsx("h3",{children:"Recursion Mental Model"})]}),e.jsx("p",{children:"Recursion means a function calls itself. It requires a base case to stop."}),e.jsx("pre",{children:`// Factorial: n! = n * (n-1)!
function factorial(n) {
  if (n <= 1) return 1;   // base case
  return n * factorial(n - 1);
}`}),e.jsx("p",{className:"mini",children:"Each call adds a frame to the call stack. Deep recursion can overflow."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(i,{}),e.jsx("h3",{children:"Iterative vs Recursive Trade-offs"})]}),e.jsx("p",{children:"Iteration is often more memory safe. Recursion is often more readable for trees/DFS."}),e.jsx("pre",{children:`// Fibonacci (iterative) - O(1) space
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
}`}),e.jsx("p",{className:"mini",children:"Recursion without memoization can explode."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(r,{}),e.jsx("h3",{children:"Master Theorem (Intuitive Intro)"})]}),e.jsx("p",{children:"Master theorem helps estimate runtime of divide-and-conquer recurrences like:"}),e.jsx("pre",{children:`T(n) = a * T(n/b) + f(n)

// Example: Merge sort
T(n) = 2*T(n/2) + O(n)
=> O(n log n)`}),e.jsx("p",{className:"mini",children:"You do not need full proof. You need the intuition: “split + combine cost”."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(s,{}),e.jsx("h3",{children:"Lower Bounds (Concept)"})]}),e.jsx("p",{children:"Lower bound means the best possible time any algorithm can achieve for a problem under a model."}),e.jsx("pre",{children:`// Comparison sorting lower bound:
// Any comparison-based sorting needs
// at least O(n log n) comparisons in worst case.

// That is why merge sort, heap sort are optimal
// in comparison model.`}),e.jsx("p",{className:"mini",children:"If you know lower bounds, you stop chasing impossible optimizations."})]})]})]});export{d as default};
