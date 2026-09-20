import React from "react";

import {
    FiCheckCircle,
    FiClock,
    FiDollarSign,
    FiTarget,
    FiTrendingUp,
} from "react-icons/fi";

import topicStyles from "../../styles/topics.module.css";

const Greedy = () => {
    return (
        <section className={`topicPage ${topicStyles.topicStyles}`}>
            <div className="pageHeader">
                <div className="titleSection">
                    <div className="iconBox">
                        <FiTarget />
                    </div>

                    <div>
                        <h2 className="title">Greedy</h2>

                        <p className="subtitle">
                            Make the best local choice and move forward
                        </p>
                    </div>
                </div>
            </div>

            <div className="intro">
                Greedy algorithms make the best available choice at each step
                without revisiting previous decisions. They are often simple and
                fast, but they work only when local optimal choices lead to a
                globally optimal solution.
            </div>

            <div className="grid">
                <article className="card">
                    <div className="cardHead">
                        <FiTarget />

                        <h3>Greedy Mental Model</h3>
                    </div>

                    <p>
                        At every step, choose the option that looks best right
                        now. Do not backtrack.
                    </p>

                    <pre>{`// Generic greedy pattern

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
}`}</pre>

                    <p className="mini">
                        The hard part is proving that the local choice is
                        globally safe.
                    </p>
                </article>

                <article className="card">
                    <div className="cardHead">
                        <FiClock />

                        <h3>Activity Selection</h3>
                    </div>

                    <p>
                        Select the maximum number of non-overlapping activities.
                        Greedy choice: always pick the activity that finishes
                        earliest.
                    </p>

                    <pre>{`function activitySelection(activities) {
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
);`}</pre>

                    <p className="mini">Sorting dominates: O(n log n).</p>
                </article>

                <article className="card">
                    <div className="cardHead">
                        <FiDollarSign />

                        <h3>Fractional Knapsack</h3>
                    </div>

                    <p>
                        Items can be taken partially. Greedy choice: take the
                        highest value-per-weight ratio first.
                    </p>

                    <pre>{`function fractionalKnapsack(
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
}`}</pre>

                    <p className="mini">
                        Greedy works here because fractions are allowed.
                    </p>
                </article>

                <article className="card">
                    <div className="cardHead">
                        <FiTrendingUp />

                        <h3>Coin Change - When Greedy Works</h3>
                    </div>

                    <p>
                        For some coin systems, choosing the largest coin first
                        gives the minimum number of coins.
                    </p>

                    <pre>{`function greedyCoinChange(
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
// [25, 10, 5, 1]`}</pre>

                    <p className="mini">
                        This is not correct for every coin system.
                    </p>
                </article>

                <article className="card">
                    <div className="cardHead">
                        <FiCheckCircle />

                        <h3>When Greedy Fails</h3>
                    </div>

                    <p>
                        A locally best choice can block a better global
                        solution.
                    </p>

                    <pre>{`// Example coin system:
// [1, 3, 4]
//
// amount = 6
//
// Greedy:
// 4 + 1 + 1 = 3 coins
//
// Optimal:
// 3 + 3 = 2 coins

// Greedy fails.`}</pre>

                    <p className="mini">
                        If choices affect future possibilities, dynamic
                        programming may be needed.
                    </p>
                </article>

                <article className="card">
                    <div className="cardHead">
                        <FiTarget />

                        <h3>Greedy Checklist</h3>
                    </div>

                    <p>Before choosing a greedy solution, ask:</p>

                    <pre>{`1) Can I make one local choice
   and safely move forward?

2) Does sorting expose the
   best choice?

3) Can I prove the greedy
   choice never hurts?

4) Is backtracking unnecessary?

5) Does a counterexample exist?`}</pre>

                    <p className="mini">
                        Never use greedy only because the code looks simple.
                    </p>
                </article>
            </div>
        </section>
    );
};

export default Greedy;
