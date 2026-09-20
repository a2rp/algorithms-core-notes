import React from "react";

import {
    FiCheckCircle,
    FiGitBranch,
    FiLayers,
    FiShuffle,
    FiTrendingUp,
} from "react-icons/fi";

import topicStyles from "../../styles/topics.module.css";

const StackQueueBasedProblems = () => {
    return (
        <section className={`topicPage ${topicStyles.topicStyles}`}>
            <div className="pageHeader">
                <div className="titleSection">
                    <div className="iconBox">
                        <FiLayers />
                    </div>

                    <div>
                        <h2 className="title">Stack & Queue Based Problems</h2>

                        <p className="subtitle">
                            Classic interview patterns using LIFO and FIFO
                        </p>
                    </div>
                </div>
            </div>

            <div className="intro">
                Stacks and queues show up everywhere: parsing, matching
                brackets, “next greater” problems, and graph traversals. The key
                is recognizing whether you need <strong>LIFO</strong> (stack) or{" "}
                <strong>FIFO</strong> (queue) behavior.
            </div>

            <div className="grid">
                <article className="card">
                    <div className="cardHead">
                        <FiTrendingUp />

                        <h3>Monotonic Stack</h3>
                    </div>

                    <p>
                        A monotonic stack keeps elements in increasing or
                        decreasing order. It helps you find the next
                        greater/smaller element in
                        <strong> O(n)</strong>.
                    </p>

                    <pre>{`// Monotonic decreasing stack (stores indices)
// Useful for next greater element problems
// Idea: keep stack values strictly decreasing

// While current element is greater,
// pop until stack top is greater again`}</pre>

                    <p className="mini">
                        Common trick: store indices, not values.
                    </p>
                </article>

                <article className="card">
                    <div className="cardHead">
                        <FiShuffle />

                        <h3>Next Greater Element</h3>
                    </div>

                    <p>
                        For each element, find the next element to the right
                        that is greater. Naive is O(n²). Monotonic stack solves
                        it in O(n).
                    </p>

                    <pre>{`function nextGreaterElements(nums) {
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
// -> [4, 2, 4, -1, -1]`}</pre>

                    <p className="mini">
                        Time: O(n) because each index is pushed and popped once.
                    </p>
                </article>

                <article className="card">
                    <div className="cardHead">
                        <FiCheckCircle />

                        <h3>Valid Parentheses</h3>
                    </div>

                    <p>
                        Use a stack to match opening brackets. Every closing
                        bracket must match the latest unmatched opener.
                    </p>

                    <pre>{`function isValid(s) {
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
// "([{}])" -> true`}</pre>

                    <p className="mini">Time: O(n), Space: O(n) worst case.</p>
                </article>

                <article className="card">
                    <div className="cardHead">
                        <FiGitBranch />

                        <h3>BFS vs DFS Mental Model</h3>
                    </div>

                    <p>
                        BFS uses a queue (FIFO) to explore level by level. DFS
                        uses a stack/recursion (LIFO) to go deep first.
                    </p>

                    <pre>{`// BFS (queue) - level order
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
}`}</pre>

                    <p className="mini">
                        BFS is great for shortest path in unweighted graphs. DFS
                        is great for exploration, cycles, components.
                    </p>
                </article>
            </div>
        </section>
    );
};

export default StackQueueBasedProblems;
