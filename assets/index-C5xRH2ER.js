import{c as i,j as e,a as r,e as a,o as t,d as s,k as o}from"./index-DuOKri2p.js";const c={Wrapper:i.section`
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
    `},l=()=>e.jsxs(c.Wrapper,{children:[e.jsx("div",{className:"pageHeader",children:e.jsxs("div",{className:"titleSection",children:[e.jsx("div",{className:"iconBox",children:e.jsx(r,{})}),e.jsxs("div",{children:[e.jsx("h2",{className:"title",children:"Greedy"}),e.jsx("p",{className:"subtitle",children:"Make the best local choice and move forward"})]})]})}),e.jsx("div",{className:"intro",children:"Greedy algorithms make the best available choice at each step without revisiting previous decisions. They are often simple and fast, but they work only when local optimal choices lead to a globally optimal solution."}),e.jsxs("div",{className:"grid",children:[e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(r,{}),e.jsx("h3",{children:"Greedy Mental Model"})]}),e.jsx("p",{children:"At every step, choose the option that looks best right now. Do not backtrack."}),e.jsx("pre",{children:`// Generic greedy pattern

function greedy(items) {
  // Often sorting is the first step
  items.sort(/* useful order */);

  let result = [];

  for (const item of items) {
    if (canTake(item, result)) {
      result.push(item);
    }
  }

  return result;
}`}),e.jsx("p",{className:"mini",children:"The hard part is proving that the local choice is globally safe."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(a,{}),e.jsx("h3",{children:"Activity Selection"})]}),e.jsx("p",{children:"Select the maximum number of non-overlapping activities. Greedy choice: always pick the activity that finishes earliest."}),e.jsx("pre",{children:`function activitySelection(activities) {
  activities.sort(
    (a, b) => a.end - b.end
  );

  const selected = [];
  let lastEnd = -Infinity;

  for (const activity of activities) {
    if (activity.start >= lastEnd) {
      selected.push(activity);
      lastEnd = activity.end;
    }
  }

  return selected;
}

// Example:
const activities = [
  { start: 1, end: 2 },
  { start: 3, end: 4 },
  { start: 0, end: 6 },
  { start: 5, end: 7 },
  { start: 8, end: 9 },
];

console.log(
  activitySelection(activities)
);`}),e.jsx("p",{className:"mini",children:"Sorting dominates: O(n log n)."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(t,{}),e.jsx("h3",{children:"Fractional Knapsack"})]}),e.jsx("p",{children:"Items can be taken partially. Greedy choice: take the highest value-per-weight ratio first."}),e.jsx("pre",{children:`function fractionalKnapsack(
  items,
  capacity
) {
  items.sort(
    (a, b) =>
      b.value / b.weight -
      a.value / a.weight
  );

  let totalValue = 0;

  for (const item of items) {
    if (capacity === 0) break;

    if (item.weight <= capacity) {
      totalValue += item.value;
      capacity -= item.weight;
    } else {
      const fraction =
        capacity / item.weight;

      totalValue +=
        item.value * fraction;

      capacity = 0;
    }
  }

  return totalValue;
}`}),e.jsx("p",{className:"mini",children:"Greedy works here because fractions are allowed."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(s,{}),e.jsx("h3",{children:"Coin Change - When Greedy Works"})]}),e.jsx("p",{children:"For some coin systems, choosing the largest coin first gives the minimum number of coins."}),e.jsx("pre",{children:`function greedyCoinChange(
  coins,
  amount
) {
  coins.sort((a, b) => b - a);

  const used = [];

  for (const coin of coins) {
    while (amount >= coin) {
      amount -= coin;
      used.push(coin);
    }
  }

  return amount === 0
    ? used
    : null;
}

// Example:
// coins = [25, 10, 5, 1]
// amount = 41
//
// result:
// [25, 10, 5, 1]`}),e.jsx("p",{className:"mini",children:"This is not correct for every coin system."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(o,{}),e.jsx("h3",{children:"When Greedy Fails"})]}),e.jsx("p",{children:"A locally best choice can block a better global solution."}),e.jsx("pre",{children:`// Example coin system:
// [1, 3, 4]
//
// amount = 6
//
// Greedy:
// 4 + 1 + 1 = 3 coins
//
// Optimal:
// 3 + 3 = 2 coins

// Greedy fails.`}),e.jsx("p",{className:"mini",children:"If choices affect future possibilities, dynamic programming may be needed."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(r,{}),e.jsx("h3",{children:"Greedy Checklist"})]}),e.jsx("p",{children:"Before choosing a greedy solution, ask:"}),e.jsx("pre",{children:`1) Can I make one local choice
   and safely move forward?

2) Does sorting expose the
   best choice?

3) Can I prove the greedy
   choice never hurts?

4) Is backtracking unnecessary?

5) Does a counterexample exist?`}),e.jsx("p",{className:"mini",children:"Never use greedy only because the code looks simple."})]})]})]});export{l as default};
