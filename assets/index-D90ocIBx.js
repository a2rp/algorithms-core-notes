import{c as a,j as r,n as e,g as i,a as n,d as s,F as o}from"./index-OhGjt0sV.js";const t={Wrapper:a.section`
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
    `},l=()=>r.jsxs(t.Wrapper,{children:[r.jsx("div",{className:"pageHeader",children:r.jsxs("div",{className:"titleSection",children:[r.jsx("div",{className:"iconBox",children:r.jsx(e,{})}),r.jsxs("div",{children:[r.jsx("h2",{className:"title",children:"Sliding Window"}),r.jsx("p",{className:"subtitle",children:"Fixed window, variable window, and two pointers"})]})]})}),r.jsx("div",{className:"intro",children:"Sliding Window is a pattern for problems where you need information about a continuous subarray / substring. Instead of recomputing from scratch, you reuse work by moving a window step-by-step. This converts many O(n²) solutions into O(n)."}),r.jsxs("div",{className:"grid",children:[r.jsxs("article",{className:"card",children:[r.jsxs("div",{className:"cardHead",children:[r.jsx(i,{}),r.jsx("h3",{children:"What is a Window"})]}),r.jsx("p",{children:"A window is a range inside an array/string represented by two pointers: left and right."}),r.jsx("pre",{children:`// window is [l..r]
let l = 0;

for (let r = 0; r < arr.length; r++) {
  // expand window by moving r

  // shrink window by moving l when needed
}`}),r.jsx("p",{className:"mini",children:"Mental model: expand, then shrink to maintain a condition."})]}),r.jsxs("article",{className:"card",children:[r.jsxs("div",{className:"cardHead",children:[r.jsx(n,{}),r.jsx("h3",{children:"Fixed Window"})]}),r.jsx("p",{children:"Window size is constant (k). You slide by adding the new element and removing the old one."}),r.jsx("pre",{children:`// Max sum of subarray of size k
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

// 9 (5 + 1 + 3)`}),r.jsx("p",{className:"mini",children:"Time: O(n), Space: O(1)"})]}),r.jsxs("article",{className:"card",children:[r.jsxs("div",{className:"cardHead",children:[r.jsx(s,{}),r.jsx("h3",{children:"Variable Window"})]}),r.jsx("p",{children:"Window size changes. Typically used when you need the smallest or longest range satisfying a condition."}),r.jsx("pre",{children:`// Smallest subarray length
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

// 2 (4 + 3)`}),r.jsx("p",{className:"mini",children:"Pattern: expand until valid, shrink to minimize."})]}),r.jsxs("article",{className:"card",children:[r.jsxs("div",{className:"cardHead",children:[r.jsx(o,{}),r.jsx("h3",{children:"Two Pointer Technique"})]}),r.jsx("p",{children:"Two pointers is a broader pattern. Sliding window is one type. Two pointers also works on sorted arrays and opposite-end scanning."}),r.jsx("pre",{children:`// Pair sum in sorted array
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

// true (4 + 11)`}),r.jsx("p",{className:"mini",children:"Works best when array is sorted or condition is monotonic."})]}),r.jsxs("article",{className:"card",children:[r.jsxs("div",{className:"cardHead",children:[r.jsx(e,{}),r.jsx("h3",{children:"Common Use Cases"})]}),r.jsx("p",{children:"Sliding window is common for:"}),r.jsx("pre",{children:`- longest substring without
  repeating characters

- max/min sum in range
  of size k

- smallest window meeting
  a condition

- count of distinct elements
  in a window

- frequency-based substring
  problems`}),r.jsx("p",{className:"mini",children:'If it says "subarray" / "substring", think window.'})]}),r.jsxs("article",{className:"card",children:[r.jsxs("div",{className:"cardHead",children:[r.jsx(i,{}),r.jsx("h3",{children:"Common Pitfalls"})]}),r.jsx("p",{children:"Sliding window works when the condition is maintainable as you move pointers. If the property is not monotonic, window logic can break."}),r.jsx("pre",{children:`// Pitfalls:

- forgetting to shrink
  with while(...)

- shrinking with if
  instead of while

- incorrect window size
  calculation:
  r - l + 1

- using window for
  non-monotonic constraints`}),r.jsx("p",{className:"mini",children:'Use "while" when condition might need multiple shrinks.'})]})]})]});export{l as default};
