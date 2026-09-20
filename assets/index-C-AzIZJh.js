import{c as a,j as e,p as s,l as r,f as i,b as o,a as n,d as t}from"./index-OhGjt0sV.js";const c={Wrapper:a.section`
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

        .intro strong {
            color: var(--color-text-primary);
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

        .card > p strong {
            color: var(--color-text-primary);
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
    `},d=()=>e.jsxs(c.Wrapper,{children:[e.jsx("div",{className:"pageHeader",children:e.jsxs("div",{className:"titleSection",children:[e.jsx("div",{className:"iconBox",children:e.jsx(s,{})}),e.jsxs("div",{children:[e.jsx("h2",{className:"title",children:"Dynamic Programming"}),e.jsx("p",{className:"subtitle",children:"Turn exponential into polynomial"})]})]})}),e.jsxs("div",{className:"intro",children:["Dynamic Programming (DP) is a technique for solving problems by breaking them into subproblems and reusing computed results. DP is usually used when a problem has"," ",e.jsx("strong",{children:"overlapping subproblems"})," and"," ",e.jsx("strong",{children:"optimal substructure"}),". The goal is simple: avoid recomputing the same work again and again."]}),e.jsxs("div",{className:"grid",children:[e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(r,{}),e.jsx("h3",{children:"Overlapping Subproblems"})]}),e.jsx("p",{children:"If the same subproblem appears multiple times, naive recursion repeats work. DP stores results so each subproblem is solved once."}),e.jsx("pre",{children:`// Fibonacci overlap example:
// fib(5) calls fib(4) and fib(3)
// fib(4) again calls fib(3) and fib(2)
// fib(3) repeats multiple times`}),e.jsx("p",{className:"mini",children:"Repeated work is the main DP signal."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(i,{}),e.jsx("h3",{children:"Memoization (Top-down)"})]}),e.jsx("p",{children:"Memoization keeps recursion but caches answers. If you ask for the same state again, return cached value."}),e.jsx("pre",{children:`// Fibonacci with memoization
function fibMemo(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n] !== undefined) return memo[n];

  memo[n] =
    fibMemo(n - 1, memo) +
    fibMemo(n - 2, memo);

  return memo[n];
}`}),e.jsx("p",{className:"mini",children:"Same recursion structure, but faster."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(o,{}),e.jsx("h3",{children:"Tabulation (Bottom-up)"})]}),e.jsx("p",{children:"Tabulation builds answers iteratively from base cases to the final answer using a DP table."}),e.jsx("pre",{children:`// Fibonacci with tabulation
function fibTab(n) {
  if (n <= 1) return n;

  const dp = Array(n + 1).fill(0);
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] =
      dp[i - 1] +
      dp[i - 2];
  }

  return dp[n];
}`}),e.jsx("p",{className:"mini",children:"Usually easier to control space usage."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(n,{}),e.jsx("h3",{children:"0/1 Knapsack (Core Idea)"})]}),e.jsxs("p",{children:["You either take an item or skip it (no partial items). DP state often uses"," ",e.jsx("strong",{children:"(index, remainingCapacity)"}),"."]}),e.jsx("pre",{children:`// 0/1 Knapsack (tabulation idea)

// dp[i][w] = max value using
// first i items with capacity w

// transition:
dp[i][w] = dp[i - 1][w];

// skip item

dp[i][w] = Math.max(
  dp[i][w],
  value[i] +
    dp[i - 1][w - weight[i]]
);

// take item`}),e.jsx("p",{className:"mini",children:'Classic example of "choice" DP.'})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(t,{}),e.jsx("h3",{children:"LIS Concept"})]}),e.jsx("p",{children:"LIS = Longest Increasing Subsequence. The DP idea: for each position, find the best sequence ending there."}),e.jsx("pre",{children:`// LIS DP (O(n^2) idea)

// dp[i] = length of LIS
// ending at i

dp[i] =
  1 + max(dp[j])

// for all j < i
// where arr[j] < arr[i]`}),e.jsx("p",{className:"mini",children:"Later optimized with binary search (O(n log n))."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(r,{}),e.jsx("h3",{children:"Fibonacci DP (Most Basic DP)"})]}),e.jsx("p",{children:"Fibonacci is the easiest way to understand DP. It shows overlap and caching clearly."}),e.jsx("pre",{children:`// Space optimized Fibonacci
function fibOpt(n) {
  if (n <= 1) return n;

  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }

  return b;
}`}),e.jsx("p",{className:"mini",children:"Same DP, but O(1) extra space."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(i,{}),e.jsx("h3",{children:"DP State Thinking"})]}),e.jsxs("p",{children:["DP is mostly about designing the right"," ",e.jsx("strong",{children:"state"}),"."]}),e.jsx("pre",{children:`DP checklist:

1) What changes during recursion?
   => state variables

2) What is the answer
   for that state?

3) What are the choices
   (transitions)?

4) What are base cases?

5) Can you reuse results
   for same state?`}),e.jsx("p",{className:"mini",children:"If state is wrong, DP becomes impossible."})]})]})]});export{d as default};
