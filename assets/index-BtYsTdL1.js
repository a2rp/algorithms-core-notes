import{c as t,j as r,h as e,a,d as i,F as s}from"./index-Cp03ssRU.js";const n={Wrapper:t.section`
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
    `},l=()=>r.jsxs(n.Wrapper,{children:[r.jsx("div",{className:"pageHeader",children:r.jsxs("div",{className:"titleSection",children:[r.jsx("div",{className:"iconBox",children:r.jsx(e,{})}),r.jsxs("div",{children:[r.jsx("h2",{className:"title",children:"Searching"}),r.jsx("p",{className:"subtitle",children:"Find a target efficiently"})]})]})}),r.jsx("div",{className:"intro",children:"Searching is about locating a target in data. The key decision is whether the data is unsorted or sorted. Unsorted data usually needs a linear scan. Sorted data enables logarithmic searching using binary search and its variations."}),r.jsxs("div",{className:"grid",children:[r.jsxs("article",{className:"card",children:[r.jsxs("div",{className:"cardHead",children:[r.jsx(a,{}),r.jsx("h3",{children:"Linear Search"})]}),r.jsx("p",{children:"Checks every element one by one until the target is found. Works on any array (sorted or unsorted)."}),r.jsx("pre",{children:`function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }

  return -1;
}

// Time: O(n)
// Space: O(1)`}),r.jsx("p",{className:"mini",children:"Best when the array is small or unsorted."})]}),r.jsxs("article",{className:"card",children:[r.jsxs("div",{className:"cardHead",children:[r.jsx(i,{}),r.jsx("h3",{children:"Binary Search"})]}),r.jsx("p",{children:"Works only on sorted data. Repeatedly cuts the search space in half."}),r.jsx("pre",{children:`function binarySearch(arr, target) {
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
// Space: O(1)`}),r.jsx("p",{className:"mini",children:"Requires sorted order. Most common searching tool."})]}),r.jsxs("article",{className:"card",children:[r.jsxs("div",{className:"cardHead",children:[r.jsx(s,{}),r.jsx("h3",{children:"Binary Search Variations"})]}),r.jsx("p",{children:"Binary search can be modified to find boundaries like first occurrence, last occurrence, lower bound, and upper bound."}),r.jsx("pre",{children:`// First occurrence of target
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
}`}),r.jsx("p",{className:"mini",children:"Variations are used heavily in interviews."})]}),r.jsxs("article",{className:"card",children:[r.jsxs("div",{className:"cardHead",children:[r.jsx(e,{}),r.jsx("h3",{children:"Lower Bound and Upper Bound"})]}),r.jsx("p",{children:"Lower bound is the first index where value is not less than target. Upper bound is the first index where value is greater than target."}),r.jsx("pre",{children:`// Lower bound
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
}`}),r.jsx("p",{className:"mini",children:"These are boundary-finding patterns."})]}),r.jsxs("article",{className:"card",children:[r.jsxs("div",{className:"cardHead",children:[r.jsx(i,{}),r.jsx("h3",{children:"Ternary Search (Brief)"})]}),r.jsx("p",{children:"Similar to binary search but splits range into three parts. Mostly used when searching for a maximum/minimum in a unimodal function."}),r.jsx("pre",{children:`// Ternary search on a unimodal function f(x)
// Conceptual example
function ternarySearch(left, right, f, eps = 1e-6) {
  while (right - left > eps) {
    const m1 = left + (right - left) / 3;
    const m2 = right - (right - left) / 3;

    if (f(m1) < f(m2)) left = m1;
    else right = m2;
  }

  return left;
}`}),r.jsx("p",{className:"mini",children:"Rare for array search. More common in optimization problems."})]}),r.jsxs("article",{className:"card",children:[r.jsxs("div",{className:"cardHead",children:[r.jsx(a,{}),r.jsx("h3",{children:"Mental Checklist"})]}),r.jsx("p",{children:"Before choosing a search method, ask:"}),r.jsx("pre",{children:`1) Is the data sorted?
2) Do I need exact value or boundary?
3) Is it a function optimization problem?
4) Can I reduce the search space each step?`}),r.jsx("p",{className:"mini",children:"If sorted → binary search family. If unsorted → linear search."})]})]})]});export{l as default};
