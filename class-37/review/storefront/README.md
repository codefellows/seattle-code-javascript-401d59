# In Da Couch!

In Da Couch! Is a web application that allows users to find their favorite strain
of cannabis.

## Getting Started

### Requirements

For development, you will only need [Node](http://nodejs.org/) installed in your
environment.

### Install

    git clone https://github.com/brockbritton/storefront.git
    cd storefront
    npm install

### Configure app

Any environment configuration steps.

### Start & watch

    npm run dev
    npm start

## Architecture

```
├── .eslintrc.cjs
├── .gitignore
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── Components
│   │   ├── Categories
│   │   │   ├── Categories.text.jsx
│   │   │   └── index.jsx
│   │   ├── Footer
│   │   │   ├── Footer.test.jsx
│   │   │   └── index.jsx
│   │   ├── Header
│   │   │   ├── Header.test.jsx
│   │   │   └── index.jsx
│   │   └── Products
│   │       ├── Products.test.jsx
│   │       └── index.jsx
│   ├── assets
│   │   └── react.svg
│   ├── index.css
│   ├── main.jsx
│   └── store
│       ├── categories
│       │   ├── categories.test.js
│       │   └── index.js
│       ├── index.js
│       └── products.js
└── vite.config.js
```

### Languages & tools

- React
- JavaScript
- Redux
- Vite
- Material-UI

## Change Log

1.0.0

## Collaborators

- Isai Chaidez
- Brock Britton
