import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiZap,
    FiTarget,
    FiDollarSign,
    FiFeather,
    FiTrendingUp,
} from "react-icons/fi";

const Greedy = () => {
    const [open, setOpen] = useState(false);

    return (
        <Styled.Wrapper>
            <Styled.Container className={open ? "open" : ""}>
                <Styled.Header onClick={() => setOpen(!open)}>
                    <div className="left">
                        <div className="icon">
                            <FiZap />
                        </div>

                        <div className="titleBlock">
                            <h2>Greedy</h2>
                            <p>Pick the best local choice and move forward</p>
                        </div>
                    </div>

                    <div className="right">
                        {open ? <FiChevronUp /> : <FiChevronDown />}
                    </div>
                </Styled.Header>

                {open && (
                    <Styled.Content>
                        <div className="intro">
                            Greedy algorithms build the answer step-by-step by
                            choosing the best option right now. They are fast
                            and simple, but they only work when the problem has
                            the{" "}
                            <span className="mono">greedy choice property</span>{" "}
                            (a locally optimal choice leads to a globally
                            optimal solution). When greedy fails, Dynamic
                            Programming is usually the next stop.
                        </div>

                        <div className="grid">
                            <div className="card">
                                <div className="cardHead">
                                    <FiTarget />
                                    <h3>Activity Selection</h3>
                                </div>

                                <p>
                                    Goal: select the maximum number of
                                    non-overlapping activities. Greedy rule:
                                    sort by end time and always pick the
                                    earliest finishing activity.
                                </p>

                                <pre>{`// Each activity: { start, end }
// Greedy: sort by end, pick compatible ones

function activitySelection(activities) {
  const sorted = [...activities].sort((a, b) => a.end - b.end);

  const picked = [];
  let lastEnd = -Infinity;

  for (const act of sorted) {
    if (act.start >= lastEnd) {
      picked.push(act);
      lastEnd = act.end;
    }
  }

  return picked;
}

// Example
const acts = [
  { start: 1, end: 2 },
  { start: 3, end: 4 },
  { start: 0, end: 6 },
  { start: 5, end: 7 },
  { start: 8, end: 9 },
  { start: 5, end: 9 },
];

console.log(activitySelection(acts));
// picks max compatible set (by end time)`}</pre>

                                <p className="mini">
                                    Time: O(n log n) for sorting, Space: O(n)
                                    for result
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiDollarSign />
                                    <h3>Coin Change: Greedy vs DP</h3>
                                </div>

                                <p>
                                    Greedy rule: take the largest coin possible
                                    repeatedly. This works for some coin systems
                                    (like typical currency), but fails for
                                    others.
                                </p>

                                <pre>{`// Greedy coin change (may fail depending on coins)
function coinChangeGreedy(coins, amount) {
  const sorted = [...coins].sort((a, b) => b - a);

  const used = [];
  let remaining = amount;

  for (const c of sorted) {
    while (remaining >= c) {
      used.push(c);
      remaining -= c;
    }
  }

  return remaining === 0 ? used : null;
}

// Case where greedy works (common currency)
console.log(coinChangeGreedy([1, 2, 5, 10], 18)); // 10,5,2,1

// Case where greedy fails
// coins: 1, 3, 4 amount: 6
// greedy: 4 + 1 + 1 (3 coins)
// optimal: 3 + 3 (2 coins)
console.log(coinChangeGreedy([1, 3, 4], 6));`}</pre>

                                <p className="mini">
                                    Greedy is fast but not guaranteed optimal.
                                    DP guarantees optimal solution.
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiFeather />
                                    <h3>Huffman Coding Concept</h3>
                                </div>

                                <p>
                                    Huffman coding builds an optimal prefix code
                                    for compression. Greedy idea: repeatedly
                                    merge the two least frequent nodes.
                                </p>

                                <pre>{`// Concept only (implementation uses min-heap):
// 1) put all (char, freq) in a min-heap
// 2) pop two smallest nodes
// 3) merge into a new node with freq = sum
// 4) push merged node back
// 5) repeat until one node remains (root)

// Result: shorter codes for frequent chars,
// longer codes for rare chars.

// Greedy choice: always combine two smallest frequencies.`}</pre>

                                <p className="mini">
                                    Uses a priority queue (min-heap). Time: O(n
                                    log n)
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiTrendingUp />
                                    <h3>When Greedy Works</h3>
                                </div>

                                <p>Greedy works when:</p>

                                <ul className="list">
                                    <li>
                                        <span className="dot" />
                                        Greedy choice property holds
                                    </li>
                                    <li>
                                        <span className="dot" />
                                        Optimal substructure exists
                                    </li>
                                    <li>
                                        <span className="dot" />
                                        Local best leads to global best
                                    </li>
                                </ul>

                                <p className="mini">
                                    If you can produce a counterexample where
                                    greedy fails, you likely need DP.
                                </p>
                            </div>
                        </div>
                    </Styled.Content>
                )}
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default Greedy;
