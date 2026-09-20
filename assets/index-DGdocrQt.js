import{j as e,a as s,d as i,n as a,c as t,i as c}from"./index-DfTTk35e.js";import{t as r}from"./topics.module-NnsBXvW6.js";const o=()=>e.jsxs("section",{className:`topicPage ${r.topicStyles}`,children:[e.jsx("div",{className:"pageHeader",children:e.jsxs("div",{className:"titleSection",children:[e.jsx("div",{className:"iconBox",children:e.jsx(s,{})}),e.jsxs("div",{children:[e.jsx("h2",{className:"title",children:"Greedy"}),e.jsx("p",{className:"subtitle",children:"Make the best local choice and move forward"})]})]})}),e.jsx("div",{className:"intro",children:"Greedy algorithms make the best available choice at each step without revisiting previous decisions. They are often simple and fast, but they work only when local optimal choices lead to a globally optimal solution."}),e.jsxs("div",{className:"grid",children:[e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(s,{}),e.jsx("h3",{children:"Greedy Mental Model"})]}),e.jsx("p",{children:"At every step, choose the option that looks best right now. Do not backtrack."}),e.jsx("pre",{children:`// Generic greedy pattern

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
}`}),e.jsx("p",{className:"mini",children:"The hard part is proving that the local choice is globally safe."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(i,{}),e.jsx("h3",{children:"Activity Selection"})]}),e.jsx("p",{children:"Select the maximum number of non-overlapping activities. Greedy choice: always pick the activity that finishes earliest."}),e.jsx("pre",{children:`function activitySelection(activities) {
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
);`}),e.jsx("p",{className:"mini",children:"Sorting dominates: O(n log n)."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(a,{}),e.jsx("h3",{children:"Fractional Knapsack"})]}),e.jsx("p",{children:"Items can be taken partially. Greedy choice: take the highest value-per-weight ratio first."}),e.jsx("pre",{children:`function fractionalKnapsack(
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
}`}),e.jsx("p",{className:"mini",children:"Greedy works here because fractions are allowed."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(t,{}),e.jsx("h3",{children:"Coin Change - When Greedy Works"})]}),e.jsx("p",{children:"For some coin systems, choosing the largest coin first gives the minimum number of coins."}),e.jsx("pre",{children:`function greedyCoinChange(
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
// [25, 10, 5, 1]`}),e.jsx("p",{className:"mini",children:"This is not correct for every coin system."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(c,{}),e.jsx("h3",{children:"When Greedy Fails"})]}),e.jsx("p",{children:"A locally best choice can block a better global solution."}),e.jsx("pre",{children:`// Example coin system:
// [1, 3, 4]
//
// amount = 6
//
// Greedy:
// 4 + 1 + 1 = 3 coins
//
// Optimal:
// 3 + 3 = 2 coins

// Greedy fails.`}),e.jsx("p",{className:"mini",children:"If choices affect future possibilities, dynamic programming may be needed."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(s,{}),e.jsx("h3",{children:"Greedy Checklist"})]}),e.jsx("p",{children:"Before choosing a greedy solution, ask:"}),e.jsx("pre",{children:`1) Can I make one local choice
   and safely move forward?

2) Does sorting expose the
   best choice?

3) Can I prove the greedy
   choice never hurts?

4) Is backtracking unnecessary?

5) Does a counterexample exist?`}),e.jsx("p",{className:"mini",children:"Never use greedy only because the code looks simple."})]})]})]});export{o as default};
