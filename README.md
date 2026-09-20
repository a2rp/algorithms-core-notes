# Algorithms Core Notes

A focused collection of core algorithm notes, patterns, explanations, and JavaScript examples built as an interactive React application.

The project is designed for quick revision, interview preparation, and strengthening algorithmic problem-solving fundamentals.

## Topics

- Algorithm Overview
- Foundation Layer
- Searching
- Sorting
- Recursion Patterns
- Sliding Window
- Stack & Queue
- Greedy Algorithms
- Dynamic Programming
- Graph Algorithms

## Features

- Topic-based navigation using React Router
- Clean bookmarkable URLs for every topic
- Lazy-loaded topic pages
- Loading state during page transitions
- Fixed desktop sidebar navigation
- Responsive horizontal navigation on smaller screens
- Automatic active-menu positioning on mobile
- Automatic scroll-to-top on route changes
- Go To Top button for long pages
- Responsive desktop and mobile layout
- Dark developer-focused interface
- Practical JavaScript examples
- Time and space complexity references
- Vercel SPA routing support
- Production-ready Vite build

## Tech Stack

- React
- Vite
- React Router
- styled-components
- react-icons
- JavaScript

## Project Structure

```text
algorithms-core-notes/
â”œâ”€â”€ public/
â”œâ”€â”€ src/
â”‚   â”œâ”€â”€ components/
â”‚   â”‚   â”œâ”€â”€ aboutAlgorithms/
â”‚   â”‚   â”œâ”€â”€ footer/
â”‚   â”‚   â”œâ”€â”€ goToTop/
â”‚   â”‚   â”œâ”€â”€ header/
â”‚   â”‚   â”œâ”€â”€ loader/
â”‚   â”‚   â””â”€â”€ sidebar/
â”‚   â”œâ”€â”€ topics/
â”‚   â”‚   â”œâ”€â”€ dynamicProgramming/
â”‚   â”‚   â”œâ”€â”€ foundationLayer/
â”‚   â”‚   â”œâ”€â”€ graphAlgorithms/
â”‚   â”‚   â”œâ”€â”€ greedy/
â”‚   â”‚   â”œâ”€â”€ recursionPatterns/
â”‚   â”‚   â”œâ”€â”€ searching/
â”‚   â”‚   â”œâ”€â”€ slidingWindow/
â”‚   â”‚   â”œâ”€â”€ sorting/
â”‚   â”‚   â””â”€â”€ stackQueueBasedProblems/
â”‚   â”œâ”€â”€ App.jsx
â”‚   â”œâ”€â”€ App.styled.js
â”‚   â”œâ”€â”€ index.css
â”‚   â”œâ”€â”€ main.jsx
â”‚   â””â”€â”€ theme.css
â”œâ”€â”€ index.html
â”œâ”€â”€ package.json
â”œâ”€â”€ vercel.json
â””â”€â”€ vite.config.js
```

## Routes

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

## Getting Started

Clone the repository:

```bash
git clone https://github.com/a2rp/algorithms-core-notes.git
```

Move into the project:

```bash
cd algorithms-core-notes
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Routing

The application uses `BrowserRouter` from React Router.

Every algorithm topic has its own clean route, making individual sections directly accessible and bookmarkable.

For example:

```text
/foundation
/sorting
/sliding-window
/dynamic-programming
/graph-algorithms
```

Topic components are loaded using React lazy loading and `Suspense`, helping keep the initial application bundle focused.

## Deployment

The project is configured for deployment on Vercel.

`vercel.json` provides the SPA rewrite required by `BrowserRouter`:

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

This allows routes such as `/sorting` and `/graph-algorithms` to work correctly when opened directly or refreshed.

## Purpose

Algorithms Core Notes is intended to be a practical revision resource rather than a collection of disconnected code snippets.

Each section focuses on understanding:

- what the algorithm or pattern does
- when it should be used
- how it works
- common implementation patterns
- time complexity
- space complexity
- practical JavaScript implementations

The goal is fast recall and stronger algorithmic decision-making during interviews and real development work.

## Documentation


## Author

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
