import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiGrid,
    FiLayers,
    FiCpu,
    FiTrendingUp,
    FiRepeat,
    FiTarget,
} from "react-icons/fi";

const DynamicProgramming = () => {
    const [open, setOpen] = useState(false);

    return (
        <Styled.Wrapper>
            <Styled.Container className={open ? "open" : ""}>
                <Styled.Header onClick={() => setOpen(!open)}>
                    <div className="left">
                        <div className="icon">
                            <FiGrid />
                        </div>

                        <div className="titleBlock">
                            <h2>Dynamic Programming</h2>
                            <p>Turn exponential into polynomial</p>
                        </div>
                    </div>

                    <div className="right">
                        {open ? <FiChevronUp /> : <FiChevronDown />}
                    </div>
                </Styled.Header>

                {open && (
                    <Styled.Content>
                        <div className="intro">
                            Dynamic Programming (DP) is a technique for solving
                            problems by breaking them into subproblems and
                            reusing computed results. DP is usually used when a
                            problem has <strong>overlapping subproblems</strong>{" "}
                            and <strong>optimal substructure</strong>. The goal
                            is simple: avoid recomputing the same work again and
                            again.
                        </div>

                        <div className="grid">
                            <div className="card">
                                <div className="cardHead">
                                    <FiRepeat />
                                    <h3>Overlapping Subproblems</h3>
                                </div>
                                <p>
                                    If the same subproblem appears multiple
                                    times, naive recursion repeats work. DP
                                    stores results so each subproblem is solved
                                    once.
                                </p>
                                <pre>{`// Fibonacci overlap example:
// fib(5) calls fib(4) and fib(3)
// fib(4) again calls fib(3) and fib(2)
// fib(3) repeats multiple times`}</pre>
                                <p className="mini">
                                    Repeated work is the main DP signal.
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiLayers />
                                    <h3>Memoization (Top-down)</h3>
                                </div>
                                <p>
                                    Memoization keeps recursion but caches
                                    answers. If you ask for the same state
                                    again, return cached value.
                                </p>
                                <pre>{`// Fibonacci with memoization
function fibMemo(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n] !== undefined) return memo[n];

  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}`}</pre>
                                <p className="mini">
                                    Same recursion structure, but faster.
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiCpu />
                                    <h3>Tabulation (Bottom-up)</h3>
                                </div>
                                <p>
                                    Tabulation builds answers iteratively from
                                    base cases to the final answer using a DP
                                    table.
                                </p>
                                <pre>{`// Fibonacci with tabulation
function fibTab(n) {
  if (n <= 1) return n;
  const dp = Array(n + 1).fill(0);
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}`}</pre>
                                <p className="mini">
                                    Usually easier to control space usage.
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiTarget />
                                    <h3>0/1 Knapsack (Core Idea)</h3>
                                </div>
                                <p>
                                    You either take an item or skip it (no
                                    partial items). DP state often uses{" "}
                                    <strong>(index, remainingCapacity)</strong>.
                                </p>
                                <pre>{`// 0/1 Knapsack (tabulation idea)
// dp[i][w] = max value using first i items with capacity w

// transition:
dp[i][w] = dp[i-1][w]  // skip item
dp[i][w] = max(dp[i][w], value[i] + dp[i-1][w-weight[i]]) // take item`}</pre>
                                <p className="mini">
                                    Classic example of "choice" DP.
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiTrendingUp />
                                    <h3>LIS Concept</h3>
                                </div>
                                <p>
                                    LIS = Longest Increasing Subsequence. The DP
                                    idea: for each position, find the best
                                    sequence ending there.
                                </p>
                                <pre>{`// LIS DP (O(n^2) idea)
dp[i] = length of LIS ending at i

dp[i] = 1 + max(dp[j]) for all j < i where arr[j] < arr[i]`}</pre>
                                <p className="mini">
                                    Later optimized with binary search (O(n log
                                    n)).
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiRepeat />
                                    <h3>Fibonacci DP (Most Basic DP)</h3>
                                </div>
                                <p>
                                    Fibonacci is the easiest way to understand
                                    DP. It shows overlap and caching clearly.
                                </p>
                                <pre>{`// Space optimized Fibonacci
function fibOpt(n) {
  if (n <= 1) return n;
  let a = 0, b = 1;

  for (let i = 2; i <= n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }
  return b;
}`}</pre>
                                <p className="mini">
                                    Same DP, but O(1) extra space.
                                </p>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <FiLayers />
                                    <h3>DP State Thinking</h3>
                                </div>
                                <p>
                                    DP is mostly about designing the right{" "}
                                    <strong>state</strong>.
                                </p>
                                <pre>{`DP checklist:
1) What changes during recursion? => state variables
2) What is the answer for that state?
3) What are the choices (transitions)?
4) What are base cases?
5) Can you reuse results for same state?`}</pre>
                                <p className="mini">
                                    If state is wrong, DP becomes impossible.
                                </p>
                            </div>
                        </div>
                    </Styled.Content>
                )}
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default DynamicProgramming;
