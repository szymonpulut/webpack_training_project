# Webpack Training Project

This is a basic webpack project for bundling a React app. Created following a module in an online course [React - The Complete Guide (incl Hooks, React Router, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/) made by Maximilian Schwarzmüller and available on [udemy.com](https://www.udemy.com/). Slightly developed further on my own (e.g. "absolute"-like imports, enforced code style).

## Quick overwiew

### Running

```
npm install
```

`npm run start` starts development server

`npm run build` creates production ready package in /dist folder

### Features

-   ES6+ syntax - transpillation by Babel
-   JSX
-   SASS
-   CSS modules
-   lazy loading of pages and images
-   code minification for production environment
-   "absolute"-like imports ("@" alias to root directory)
-   clean-looking code, made possible by using ESLint & Prettier with airbnb style guide
