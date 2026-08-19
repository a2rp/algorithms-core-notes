import{c as r,j as e,f as s,d as t,F as a,k as i,m as o}from"./index-DuOKri2p.js";const n={Wrapper:r.section`
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
    `},l=()=>e.jsxs(n.Wrapper,{children:[e.jsx("div",{className:"pageHeader",children:e.jsxs("div",{className:"titleSection",children:[e.jsx("div",{className:"iconBox",children:e.jsx(s,{})}),e.jsxs("div",{children:[e.jsx("h2",{className:"title",children:"Stack & Queue Based Problems"}),e.jsx("p",{className:"subtitle",children:"Classic interview patterns using LIFO and FIFO"})]})]})}),e.jsxs("div",{className:"intro",children:["Stacks and queues show up everywhere: parsing, matching brackets, “next greater” problems, and graph traversals. The key is recognizing whether you need ",e.jsx("strong",{children:"LIFO"})," (stack) or"," ",e.jsx("strong",{children:"FIFO"})," (queue) behavior."]}),e.jsxs("div",{className:"grid",children:[e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(t,{}),e.jsx("h3",{children:"Monotonic Stack"})]}),e.jsxs("p",{children:["A monotonic stack keeps elements in increasing or decreasing order. It helps you find the next greater/smaller element in",e.jsx("strong",{children:" O(n)"}),"."]}),e.jsx("pre",{children:`// Monotonic decreasing stack (stores indices)
// Useful for next greater element problems
// Idea: keep stack values strictly decreasing

// While current element is greater,
// pop until stack top is greater again`}),e.jsx("p",{className:"mini",children:"Common trick: store indices, not values."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(a,{}),e.jsx("h3",{children:"Next Greater Element"})]}),e.jsx("p",{children:"For each element, find the next element to the right that is greater. Naive is O(n²). Monotonic stack solves it in O(n)."}),e.jsx("pre",{children:`function nextGreaterElements(nums) {
  const res = new Array(nums.length).fill(-1);
  const st = []; // stack of indices

  for (let i = 0; i < nums.length; i++) {
    while (
      st.length &&
      nums[i] > nums[st[st.length - 1]]
    ) {
      const idx = st.pop();
      res[idx] = nums[i];
    }

    st.push(i);
  }

  return res;
}

// Example:
// [2, 1, 2, 4, 3]
// -> [4, 2, 4, -1, -1]`}),e.jsx("p",{className:"mini",children:"Time: O(n) because each index is pushed and popped once."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(i,{}),e.jsx("h3",{children:"Valid Parentheses"})]}),e.jsx("p",{children:"Use a stack to match opening brackets. Every closing bracket must match the latest unmatched opener."}),e.jsx("pre",{children:`function isValid(s) {
  const st = [];

  const match = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const ch of s) {
    if (
      ch === "(" ||
      ch === "[" ||
      ch === "{"
    ) {
      st.push(ch);
    } else {
      if (!st.length) return false;

      const top = st.pop();

      if (top !== match[ch]) {
        return false;
      }
    }
  }

  return st.length === 0;
}

// Examples:
// "()[]{}" -> true
// "(]" -> false
// "([{}])" -> true`}),e.jsx("p",{className:"mini",children:"Time: O(n), Space: O(n) worst case."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(o,{}),e.jsx("h3",{children:"BFS vs DFS Mental Model"})]}),e.jsx("p",{children:"BFS uses a queue (FIFO) to explore level by level. DFS uses a stack/recursion (LIFO) to go deep first."}),e.jsx("pre",{children:`// BFS (queue) - level order
function bfs(start, adj) {
  const q = [start];
  const seen = new Set([start]);

  while (q.length) {
    const node = q.shift();

    for (const nei of adj[node]) {
      if (!seen.has(nei)) {
        seen.add(nei);
        q.push(nei);
      }
    }
  }
}

// DFS (stack) - depth first
function dfs(start, adj) {
  const st = [start];
  const seen = new Set([start]);

  while (st.length) {
    const node = st.pop();

    for (const nei of adj[node]) {
      if (!seen.has(nei)) {
        seen.add(nei);
        st.push(nei);
      }
    }
  }
}`}),e.jsx("p",{className:"mini",children:"BFS is great for shortest path in unweighted graphs. DFS is great for exploration, cycles, components."})]})]})]});export{l as default};
