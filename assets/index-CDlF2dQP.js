import{j as e,l as s,e as i,p as n,F as r,q as t,r as a,s as d,c as o,b as c}from"./index-DfTTk35e.js";import{t as l}from"./topics.module-NnsBXvW6.js";const g=()=>e.jsxs("section",{className:`topicPage ${l.topicStyles}`,children:[e.jsx("div",{className:"pageHeader",children:e.jsxs("div",{className:"titleSection",children:[e.jsx("div",{className:"iconBox",children:e.jsx(s,{})}),e.jsxs("div",{children:[e.jsx("h2",{className:"title",children:"Graph Algorithms"}),e.jsx("p",{className:"subtitle",children:"BFS, DFS, shortest paths, ordering, MST"})]})]})}),e.jsx("div",{className:"intro",children:"Graph algorithms handle relationships: roads, networks, dependencies, friends, routes, and flows. Most graph problems reduce to traversal (BFS/DFS), ordering (topological sort), shortest path (Dijkstra/Bellman-Ford/Floyd), or connectivity building (MST/Union-Find)."}),e.jsxs("div",{className:"grid",children:[e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(i,{}),e.jsx("h3",{children:"BFS"})]}),e.jsx("p",{children:"Breadth First Search explores level by level. Use BFS for shortest path in unweighted graphs."}),e.jsx("pre",{children:`// BFS (adjacency list)
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
// A B C D E`}),e.jsx("p",{className:"mini",children:"Time: O(V+E), Space: O(V)"})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(n,{}),e.jsx("h3",{children:"DFS"})]}),e.jsx("p",{children:"Depth First Search explores deeply before backtracking. Useful for components, cycle checks, paths, topological sort."}),e.jsx("pre",{children:`// DFS (recursive)
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
// one possible order`}),e.jsx("p",{className:"mini",children:"Time: O(V+E), Space: O(V) (stack/visited)"})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(r,{}),e.jsx("h3",{children:"Topological Sort"})]}),e.jsx("p",{children:"Works only on DAG (Directed Acyclic Graph). Gives an order where every edge u → v means u comes before v."}),e.jsx("pre",{children:`// Kahn's Algorithm
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

console.log(topoSort(dag));`}),e.jsx("p",{className:"mini",children:"Time: O(V+E). Empty result can indicate a cycle."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(t,{}),e.jsx("h3",{children:"Dijkstra"})]}),e.jsx("p",{children:"Shortest path for non-negative edge weights. Uses greedy: always expand current smallest distance."}),e.jsx("pre",{children:`// Dijkstra
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
);`}),e.jsx("p",{className:"mini",children:"Use a min-heap for O((V+E) log V) in production."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(a,{}),e.jsx("h3",{children:"Bellman-Ford"})]}),e.jsx("p",{children:"Shortest path that supports negative weights. Can detect negative cycles."}),e.jsx("pre",{children:`// Bellman-Ford
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
);`}),e.jsx("p",{className:"mini",children:"Time: O(VE). Slower than Dijkstra but more flexible."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(d,{}),e.jsx("h3",{children:"Floyd-Warshall"})]}),e.jsx("p",{children:"All-pairs shortest paths. Works with negative edges (but not negative cycles). Best for dense graphs or small n."}),e.jsx("pre",{children:`// Floyd-Warshall idea
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
}`}),e.jsx("p",{className:"mini",children:"Think: try every node as an intermediate stop."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(o,{}),e.jsx("h3",{children:"Minimum Spanning Tree"})]}),e.jsx("p",{children:"MST connects all nodes with minimum total edge weight in an undirected weighted graph. Common algorithms: Kruskal and Prim."}),e.jsx("pre",{children:`// Kruskal idea:

// 1) Sort edges by weight

// 2) Add the next lightest edge
//    if it does not form a cycle

// 3) Union-Find helps detect
//    cycles efficiently

// Continue until all nodes
// are connected.`}),e.jsx("p",{className:"mini",children:"Used in network design, clustering, wiring, and road planning."})]}),e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx(c,{}),e.jsx("h3",{children:"Union-Find"})]}),e.jsx("p",{children:"Union-Find (Disjoint Set) tracks connected components and supports find(x) and union(a, b). Very useful for Kruskal MST and cycle detection."}),e.jsx("pre",{children:`class UnionFind {
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

// true`}),e.jsx("p",{className:"mini",children:"With path compression + union by rank: almost O(1) per operation."})]})]})]});export{g as default};
