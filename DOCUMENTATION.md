# Algorithms Core Notes - Documentation

## 1. Overview

Algorithms Core Notes is an interactive React application for studying and revising core algorithm concepts, patterns, complexity analysis, and JavaScript implementations.

The application is organized into route-based topic pages so each algorithm section can be opened directly, bookmarked, refreshed, and revisited independently.

The project focuses on practical revision, clear explanations, reusable problem-solving patterns, and readable JavaScript examples.

---

## 2. Technology Stack

The application uses:

- React
- Vite
- React Router
- styled-components
- react-icons
- JavaScript

---

## 3. Project Structure

```text
algorithms-core-notes/
├── public/
├── src/
│   ├── components/
│   │   ├── aboutAlgorithms/
│   │   │   ├── index.jsx
│   │   │   └── styled.js
│   │   ├── footer/
│   │   │   ├── index.jsx
│   │   │   └── styled.js
│   │   ├── goToTop/
│   │   │   ├── index.jsx
│   │   │   └── styled.js
│   │   ├── header/
│   │   │   ├── index.jsx
│   │   │   └── styled.js
│   │   ├── loader/
│   │   │   ├── index.jsx
│   │   │   └── styled.js
│   │   └── sidebar/
│   │       ├── index.jsx
│   │       └── styled.js
│   ├── topics/
│   │   ├── dynamicProgramming/
│   │   │   ├── index.jsx
│   │   │   └── styled.js
│   │   ├── foundationLayer/
│   │   │   ├── index.jsx
│   │   │   └── styled.js
│   │   ├── graphAlgorithms/
│   │   │   ├── index.jsx
│   │   │   └── styled.js
│   │   ├── greedy/
│   │   │   ├── index.jsx
│   │   │   └── styled.js
│   │   ├── recursionPatterns/
│   │   │   ├── index.jsx
│   │   │   └── styled.js
│   │   ├── searching/
│   │   │   ├── index.jsx
│   │   │   └── styled.js
│   │   ├── slidingWindow/
│   │   │   ├── index.jsx
│   │   │   └── styled.js
│   │   ├── sorting/
│   │   │   ├── index.jsx
│   │   │   └── styled.js
│   │   └── stackQueueBasedProblems/
│   │       ├── index.jsx
│   │       └── styled.js
│   ├── App.jsx
│   ├── App.styled.js
│   ├── index.css
│   ├── main.jsx
│   └── theme.css
├── index.html
├── package-lock.json
├── package.json
├── vercel.json
└── vite.config.js
```

---

## 4. Application Layout

The desktop interface uses a persistent header, a left navigation area, and a separately scrollable content area.

```text
Header
────────────────────────────────────
Sidebar        Route Content
               |
               v
             Footer
```

The header and sidebar remain available while the user navigates through the content.

On smaller screens, the sidebar changes into a horizontal navigation menu and the application uses normal document scrolling.

---

## 5. Header

The shared header contains:

- project title
- project version
- short project description
- GitHub repository link
- author website link

The header remains outside the routed topic content.

---

## 6. Sidebar Navigation

The sidebar provides navigation to all major algorithm topics.

React Router `NavLink` is used for route navigation and active-route styling.

Desktop behavior:

- vertical navigation
- persistent left-side placement
- active topic highlighting

Mobile behavior:

- horizontal navigation
- horizontal scrolling
- active topic highlighting
- automatic positioning of the active menu item

---

## 7. Routes

The application currently provides the following routes:

| Route                  | Topic               |
| ---------------------- | ------------------- |
| `/`                    | Algorithm Overview  |
| `/foundation`          | Foundation Layer    |
| `/searching`           | Searching           |
| `/sorting`             | Sorting             |
| `/recursion-patterns`  | Recursion Patterns  |
| `/sliding-window`      | Sliding Window      |
| `/stack-queue`         | Stack & Queue       |
| `/greedy`              | Greedy Algorithms   |
| `/dynamic-programming` | Dynamic Programming |
| `/graph-algorithms`    | Graph Algorithms    |

Unknown application routes redirect to:

```text
/
```

---

## 8. BrowserRouter

Routing is handled with React Router's:

```text
BrowserRouter
```

The router is configured in:

```text
src/main.jsx
```

Each topic receives a clean path such as:

```text
/searching
/sorting
/dynamic-programming
/graph-algorithms
```

This allows route URLs to be bookmarked and shared.

---

## 9. Lazy Loading

The application lazy-loads routed content with:

```javascript
React.lazy();
```

Example structure:

```javascript
const Searching = lazy(() => import("./topics/searching"));

const Sorting = lazy(() => import("./topics/sorting"));

const DynamicProgramming = lazy(() => import("./topics/dynamicProgramming"));
```

This allows Vite to create separate production chunks for routed topic modules.

---

## 10. Suspense Loader

Lazy-loaded routes are rendered inside React `Suspense`.

The reusable loader is located at:

```text
src/components/loader/
```

The route pathname is used as the `Suspense` key so a route transition remounts the routed loading boundary.

The intended transition is:

```text
Current Topic
      |
      v
Route Change
      |
      v
Loader
      |
      v
New Topic
```

---

## 11. Route Change Scroll Behavior

When the route changes, the application automatically returns the content to the top.

Desktop uses the internal content container.

Mobile uses the browser window.

This prevents a newly opened topic from inheriting the scroll position of the previous topic.

---

## 12. Go To Top

The Go To Top component is located at:

```text
src/components/goToTop/
```

It appears after the user crosses the configured scroll threshold.

The default threshold is:

```text
320px
```

Desktop behavior:

- observes the internal content container
- scrolls that container to the top

Mobile behavior:

- observes the browser window
- scrolls the window to the top

The scroll action uses smooth scrolling.

---

## 13. Desktop Scrolling

On desktop, the outer application is constrained to the viewport.

The main topic content uses its own vertical scrolling area.

This keeps:

- the header visible
- the sidebar visible
- topic content independently scrollable

The layout avoids duplicate page-level and content-level vertical scrollbars.

---

## 14. Mobile Scrolling

At smaller widths, the application switches to normal document scrolling.

The desktop internal-scroll behavior is removed so the mobile experience uses a single natural page scrollbar.

The mobile navigation remains horizontally scrollable.

---

## 15. Responsive Breakpoint

The primary responsive breakpoint is:

```text
900px
```

Above this breakpoint:

```text
Desktop sidebar + internal topic scrolling
```

At or below this breakpoint:

```text
Horizontal topic navigation + document scrolling
```

---

## 16. Active Mobile Navigation

When a route is opened or reloaded on a smaller screen, the application locates the active navigation link and brings it into view.

This is useful for routes near the end of the topic menu such as:

```text
/dynamic-programming
/graph-algorithms
```

The active menu item does not remain hidden outside the visible horizontal navigation area.

---

## 17. Styling Architecture

The application uses styled-components.

Reusable components and topic components generally use:

```text
index.jsx
styled.js
```

Example:

```text
components/sidebar/
├── index.jsx
└── styled.js
```

This keeps component markup and component-specific styling separated without introducing unnecessary abstraction.

---

## 18. Global Styles

Global styles are defined in:

```text
src/index.css
```

The stylesheet includes:

- CSS reset
- root sizing
- body typography
- responsive overflow behavior
- link defaults
- form defaults
- focus-visible styles
- scrollbar styling
- selection styling
- reduced-motion support

The global base font size is:

```text
16px
```

---

## 19. Theme Variables

Theme variables are stored in:

```text
src/theme.css
```

They are used for:

- page backgrounds
- surface backgrounds
- text
- muted text
- borders
- primary accents
- links
- code blocks
- shadows

This keeps the visual language consistent across all topic pages.

---

## 20. Algorithm Overview

Route:

```text
/
```

The overview introduces algorithmic thinking and the purpose of the project.

It covers the ideas of:

- correctness
- efficiency
- reusable patterns

The page also displays the build timestamp.

---

## 21. Build Timestamp

Vite defines:

```javascript
__APP_BUILD_ISO__;
```

using:

```javascript
new Date().toISOString();
```

The Overview page reads this value and displays it as the application's last updated build time.

---

## 22. Foundation Layer

Route:

```text
/foundation
```

The Foundation Layer covers:

- What is an Algorithm
- Input → Process → Output
- Correctness vs Efficiency
- Time Complexity
- Space Complexity
- Big O
- Recursion Mental Model
- Iterative vs Recursive Trade-offs
- Master Theorem
- Lower Bounds

The section focuses on the reasoning tools used across later algorithm topics.

---

## 23. Searching

Route:

```text
/searching
```

The Searching section covers:

- Linear Search
- Binary Search
- Binary Search Variations
- Lower Bound
- Upper Bound
- Ternary Search
- Search Mental Checklist

The section distinguishes general scanning from search-space reduction on sorted data.

---

## 24. Sorting

Route:

```text
/sorting
```

The Sorting section covers:

- Bubble Sort
- Selection Sort
- Insertion Sort
- Merge Sort
- Quick Sort
- Heap Sort
- Counting Sort
- Radix Sort
- Stable vs Unstable Sorting
- In-place vs Extra Memory

The examples emphasize both implementation and complexity trade-offs.

---

## 25. Recursion Patterns

Route:

```text
/recursion-patterns
```

The section covers:

- Backtracking
- Divide and Conquer
- Subset Generation
- Permutations
- Tail Recursion

The goal is to demonstrate common recursive problem structures rather than recursion as an isolated syntax feature.

---

## 26. Sliding Window

Route:

```text
/sliding-window
```

The section covers:

- Window Mental Model
- Fixed Window
- Variable Window
- Two Pointer Technique
- Common Use Cases
- Common Pitfalls

The examples demonstrate how repeated range calculations can often be replaced with incremental updates.

---

## 27. Stack & Queue

Route:

```text
/stack-queue
```

The section covers:

- Monotonic Stack
- Next Greater Element
- Valid Parentheses
- BFS vs DFS Mental Model

The examples focus on recognizing when LIFO or FIFO behavior is useful.

---

## 28. Greedy Algorithms

Route:

```text
/greedy
```

The Greedy section covers:

- Greedy Mental Model
- Activity Selection
- Fractional Knapsack
- Coin Change
- When Greedy Fails
- Greedy Checklist

The section emphasizes that a locally optimal choice must be justified before a greedy strategy can be considered correct.

---

## 29. Dynamic Programming

Route:

```text
/dynamic-programming
```

The Dynamic Programming section covers:

- Overlapping Subproblems
- Memoization
- Tabulation
- 0/1 Knapsack
- Longest Increasing Subsequence
- Fibonacci DP
- DP State Thinking

The section focuses on recognizing repeated states and avoiding repeated computation.

---

## 30. Graph Algorithms

Route:

```text
/graph-algorithms
```

The Graph Algorithms section covers:

- Breadth First Search
- Depth First Search
- Topological Sort
- Dijkstra
- Bellman-Ford
- Floyd-Warshall
- Minimum Spanning Tree
- Union-Find

The section focuses on graph traversal, ordering, shortest paths, and connectivity.

---

## 31. JavaScript Examples

Algorithm examples are written in JavaScript.

Code examples are presented in styled code blocks and focus on:

- core algorithm structure
- common patterns
- readable implementation
- time complexity
- space complexity

---

## 32. Complexity References

The notes use standard asymptotic complexity notation such as:

```text
O(1)
O(log n)
O(n)
O(n log n)
O(n²)
O(2^n)
O(n!)
```

Complexity references are included where they help explain algorithm trade-offs.

---

## 33. Vite Configuration

The Vite configuration is located at:

```text
vite.config.js
```

The current configuration includes:

- React plugin
- build timestamp injection
- ES2019 build target
- production source maps disabled
- development CSS source maps disabled

The application does not require a GitHub Pages repository base path for its Vercel configuration.

---

## 34. Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Vite starts the application in development mode.

---

## 35. Production Build

Create a production build with:

```bash
npm run build
```

Vite generates the production output inside:

```text
dist/
```

Lazy-loaded modules are emitted as separate production chunks where appropriate.

---

## 36. Production Preview

Preview the production build locally with:

```bash
npm run preview
```

This is useful for checking the built application before deployment.

---

## 37. Available Scripts

The current package scripts are:

```text
npm run dev
npm run build
npm run preview
```

GitHub Pages-specific deployment scripts are not required for the current Vercel-oriented configuration.

---

## 38. Dependencies

Primary application dependencies include:

```text
react
react-dom
react-icons
react-router-dom
styled-components
```

Development dependencies include:

```text
@vitejs/plugin-react
vite
```

---

## 39. Vercel Configuration

The project contains:

```text
vercel.json
```

with the SPA rewrite configuration:

```json
{
    "$schema": "https://openapi.vercel.sh/vercel.json",
    "rewrites": [
        {
            "source": "/(.*)",
            "destination": "/index.html"
        }
    ]
}
```

The rewrite allows BrowserRouter routes to resolve through the React application.

---

## 40. Vercel Route Flow

A direct route request is intended to follow this flow:

```text
User opens /graph-algorithms
          |
          v
Vercel receives request
          |
          v
Rewrite to /index.html
          |
          v
React application loads
          |
          v
BrowserRouter reads pathname
          |
          v
Graph Algorithms renders
```

The browser can retain the clean route:

```text
/graph-algorithms
```

while the SPA is served through `index.html`.

---

## 41. Repository Purpose

Algorithms Core Notes serves as:

- an algorithm revision guide
- an interview preparation reference
- a JavaScript algorithm reference
- a React routing example
- a lazy-loading example
- a responsive documentation interface
- a portfolio project

---

## 42. Design Philosophy

The interface is intentionally focused on content readability and fast navigation.

The project avoids unnecessary interface complexity.

The main design goals are:

- quick topic access
- clear route separation
- readable explanations
- readable code examples
- consistent visual hierarchy
- responsive navigation
- minimal distractions

---

## 43. Performance

Route components use lazy loading.

This allows the application to avoid loading every topic module as part of the initial routed content bundle.

Vite handles production optimization and chunk generation during the build process.

---

## 44. Accessibility

The project includes accessibility-oriented behavior such as:

- semantic navigation
- active route indication
- focus-visible styling
- accessible Go To Top labeling
- readable contrast
- responsive layouts
- reduced-motion support

---

## 45. Reduced Motion

The global stylesheet supports:

```text
prefers-reduced-motion
```

When enabled, animation and transition durations are reduced.

---

## 46. Current Scope

The project focuses on core algorithms and common interview patterns.

It is intentionally not an exhaustive competitive-programming or computer-science reference.

The emphasis is on frequently useful algorithmic concepts and practical revision.

---

## 47. Extending the Project

A future routed topic can follow the existing structure:

```text
1. Create the topic component.
2. Create its styled.js file.
3. Add the lazy import in App.jsx.
4. Add the React Router route.
5. Add the item to sidebar navigation.
```

This keeps expansion consistent with the existing architecture.

---

## 48. Author

**Ashish Ranjan**

Full-Stack Web Developer

## Links

- Portfolio: https://www.ashishranjan.net
- GitHub: https://github.com/a2rp
- CodePen: https://codepen.io/ash1198
- LinkedIn: https://www.linkedin.com/in/aashishranjan
- Facebook: https://www.facebook.com/theash.ashish/
- YouTube: https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1
- Email: mailto:ash.ranjan09@gmail.com

## Support

- Support: https://a2rp-donation-page.netlify.app/
- Buy Me A Coffee: https://buymeacoffee.com/a2rp
- Patreon: https://patreon.com/a2rp

## License

This project is licensed under the MIT License.
