import React from "react";

import {
    FiAlertTriangle,
    FiCompass,
    FiCpu,
    FiGitBranch,
    FiLayers,
    FiMap,
    FiShare2,
    FiShuffle,
    FiTrendingUp,
} from "react-icons/fi";

import { Styled } from "./styled";

const GraphAlgorithms = () => {
    return (
        <Styled.Wrapper>
            <div className="pageHeader">
                <div className="titleSection">
                    <div className="iconBox">
                        <FiGitBranch />
                    </div>

                    <div>
                        <h2 className="title">Graph Algorithms</h2>

                        <p className="subtitle">
                            BFS, DFS, shortest paths, ordering, MST
                        </p>
                    </div>
                </div>
            </div>

            <div className="intro">
                Graph algorithms handle relationships: roads, networks,
                dependencies, friends, routes, and flows. Most graph problems
                reduce to traversal (BFS/DFS), ordering (topological sort),
                shortest path (Dijkstra/Bellman-Ford/Floyd), or connectivity
                building (MST/Union-Find).
            </div>

            <div className="grid">
                <article className="card">
                    <div className="cardHead">
                        <FiLayers />

                        <h3>BFS</h3>
                    </div>

                    <p>
                        Breadth First Search explores level by level. Use BFS
                        for shortest path in unweighted graphs.
                    </p>

                    <pre>{`// BFS (adjacency list)
function bfs(graph, start) {
  const q = [start];
  const visited = new Set([start]);
  const order = [];

  while (q.length) {
    const node = q.shift();
    order.push(node);

    for (const nei of (graph[node] || [])) {
      if (!visited.has(nei)) {
        visited.add(nei);
        q.push(nei);
      }
    }
  }

  return order;
}

// Example graph
const g = {
  A: ["B", "C"],
  B: ["D"],
  C: ["E"],
  D: [],
  E: []
};

console.log(bfs(g, "A"));
// A B C D E`}</pre>

                    <p className="mini">Time: O(V+E), Space: O(V)</p>
                </article>

                <article className="card">
                    <div className="cardHead">
                        <FiShare2 />

                        <h3>DFS</h3>
                    </div>

                    <p>
                        Depth First Search explores deeply before backtracking.
                        Useful for components, cycle checks, paths, topological
                        sort.
                    </p>

                    <pre>{`// DFS (recursive)
function dfs(
  graph,
  start,
  visited = new Set(),
  order = []
) {
  if (visited.has(start)) return order;

  visited.add(start);
  order.push(start);

  for (const nei of (graph[start] || [])) {
    if (!visited.has(nei)) {
      dfs(graph, nei, visited, order);
    }
  }

  return order;
}

console.log(dfs(g, "A"));
// A B D C E
// one possible order`}</pre>

                    <p className="mini">
                        Time: O(V+E), Space: O(V) (stack/visited)
                    </p>
                </article>

                <article className="card">
                    <div className="cardHead">
                        <FiShuffle />

                        <h3>Topological Sort</h3>
                    </div>

                    <p>
                        Works only on DAG (Directed Acyclic Graph). Gives an
                        order where every edge u → v means u comes before v.
                    </p>

                    <pre>{`// Kahn's Algorithm
// BFS using indegree
function topoSort(graph) {
  const indeg = {};

  for (const u in graph) {
    indeg[u] = indeg[u] ?? 0;

    for (const v of graph[u]) {
      indeg[v] =
        (indeg[v] ?? 0) + 1;
    }
  }

  const q = [];

  for (const node in indeg) {
    if (indeg[node] === 0) {
      q.push(node);
    }
  }

  const order = [];

  while (q.length) {
    const u = q.shift();
    order.push(u);

    for (const v of (graph[u] || [])) {
      indeg[v]--;

      if (indeg[v] === 0) {
        q.push(v);
      }
    }
  }

  return order.length ===
    Object.keys(indeg).length
      ? order
      : [];
}

// Example DAG
const dag = {
  A: ["C"],
  B: ["C", "D"],
  C: ["E"],
  D: ["F"],
  E: [],
  F: []
};

console.log(topoSort(dag));`}</pre>

                    <p className="mini">
                        Time: O(V+E). Empty result can indicate a cycle.
                    </p>
                </article>

                <article className="card">
                    <div className="cardHead">
                        <FiCompass />

                        <h3>Dijkstra</h3>
                    </div>

                    <p>
                        Shortest path for non-negative edge weights. Uses
                        greedy: always expand current smallest distance.
                    </p>

                    <pre>{`// Dijkstra
// simple version O(V^2)
// without heap

// graph:
// {
//   node: [[neighbor, weight], ...]
// }

function dijkstra(graph, start) {
  const dist = {};
  const visited = new Set();

  for (const node in graph) {
    dist[node] = Infinity;
  }

  dist[start] = 0;

  const nodes =
    Object.keys(graph);

  for (
    let i = 0;
    i < nodes.length;
    i++
  ) {
    let u = null;
    let best = Infinity;

    for (const n of nodes) {
      if (
        !visited.has(n) &&
        dist[n] < best
      ) {
        best = dist[n];
        u = n;
      }
    }

    if (u === null) break;

    visited.add(u);

    for (const [v, w] of graph[u]) {
      if (
        dist[u] + w <
        dist[v]
      ) {
        dist[v] =
          dist[u] + w;
      }
    }
  }

  return dist;
}

const wg = {
  A: [["B", 4], ["C", 2]],
  B: [["C", 5], ["D", 10]],
  C: [["E", 3]],
  D: [["F", 11]],
  E: [["D", 4]],
  F: []
};

console.log(
  dijkstra(wg, "A")
);`}</pre>

                    <p className="mini">
                        Use a min-heap for O((V+E) log V) in production.
                    </p>
                </article>

                <article className="card">
                    <div className="cardHead">
                        <FiAlertTriangle />

                        <h3>Bellman-Ford</h3>
                    </div>

                    <p>
                        Shortest path that supports negative weights. Can detect
                        negative cycles.
                    </p>

                    <pre>{`// Bellman-Ford
// edges: [[u, v, w], ...]

function bellmanFord(
  nodes,
  edges,
  start
) {
  const dist = {};

  for (const n of nodes) {
    dist[n] = Infinity;
  }

  dist[start] = 0;

  // Relax edges V-1 times
  for (
    let i = 0;
    i < nodes.length - 1;
    i++
  ) {
    let changed = false;

    for (const [u, v, w] of edges) {
      if (
        dist[u] !== Infinity &&
        dist[u] + w < dist[v]
      ) {
        dist[v] =
          dist[u] + w;

        changed = true;
      }
    }

    if (!changed) break;
  }

  // Detect negative cycle
  for (const [u, v, w] of edges) {
    if (
      dist[u] !== Infinity &&
      dist[u] + w < dist[v]
    ) {
      return {
        dist,
        hasNegativeCycle: true
      };
    }
  }

  return {
    dist,
    hasNegativeCycle: false
  };
}

const nodes =
  ["A", "B", "C", "D"];

const edges = [
  ["A", "B", 1],
  ["B", "C", 2],
  ["A", "C", 6],
  ["C", "D", -3]
];

console.log(
  bellmanFord(
    nodes,
    edges,
    "A"
  )
);`}</pre>

                    <p className="mini">
                        Time: O(VE). Slower than Dijkstra but more flexible.
                    </p>
                </article>

                <article className="card">
                    <div className="cardHead">
                        <FiMap />

                        <h3>Floyd-Warshall</h3>
                    </div>

                    <p>
                        All-pairs shortest paths. Works with negative edges (but
                        not negative cycles). Best for dense graphs or small n.
                    </p>

                    <pre>{`// Floyd-Warshall idea
// O(n^3)

// dist[i][j] = shortest
// distance i -> j

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      dist[i][j] = Math.min(
        dist[i][j],
        dist[i][k] +
          dist[k][j]
      );
    }
  }
}`}</pre>

                    <p className="mini">
                        Think: try every node as an intermediate stop.
                    </p>
                </article>

                <article className="card">
                    <div className="cardHead">
                        <FiTrendingUp />

                        <h3>Minimum Spanning Tree</h3>
                    </div>

                    <p>
                        MST connects all nodes with minimum total edge weight in
                        an undirected weighted graph. Common algorithms: Kruskal
                        and Prim.
                    </p>

                    <pre>{`// Kruskal idea:

// 1) Sort edges by weight

// 2) Add the next lightest edge
//    if it does not form a cycle

// 3) Union-Find helps detect
//    cycles efficiently

// Continue until all nodes
// are connected.`}</pre>

                    <p className="mini">
                        Used in network design, clustering, wiring, and road
                        planning.
                    </p>
                </article>

                <article className="card">
                    <div className="cardHead">
                        <FiCpu />

                        <h3>Union-Find</h3>
                    </div>

                    <p>
                        Union-Find (Disjoint Set) tracks connected components
                        and supports find(x) and union(a, b). Very useful for
                        Kruskal MST and cycle detection.
                    </p>

                    <pre>{`class UnionFind {
  constructor(n) {
    this.parent =
      Array.from(
        { length: n },
        (_, i) => i
      );

    this.rank =
      Array(n).fill(0);
  }

  find(x) {
    if (
      this.parent[x] !== x
    ) {
      this.parent[x] =
        this.find(
          this.parent[x]
        );
    }

    return this.parent[x];
  }

  union(a, b) {
    const ra = this.find(a);
    const rb = this.find(b);

    if (ra === rb) {
      return false;
    }

    if (
      this.rank[ra] <
      this.rank[rb]
    ) {
      this.parent[ra] = rb;
    } else if (
      this.rank[ra] >
      this.rank[rb]
    ) {
      this.parent[rb] = ra;
    } else {
      this.parent[rb] = ra;
      this.rank[ra]++;
    }

    return true;
  }
}

// Example: 5 nodes
const uf =
  new UnionFind(5);

uf.union(0, 1);
uf.union(1, 2);

console.log(
  uf.find(0) ===
  uf.find(2)
);

// true`}</pre>

                    <p className="mini">
                        With path compression + union by rank: almost O(1) per
                        operation.
                    </p>
                </article>
            </div>
        </Styled.Wrapper>
    );
};

export default GraphAlgorithms;
