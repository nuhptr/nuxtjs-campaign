# Campaign Startup

## Dependencies

```bash
$ npm install --save-exact @nuxtjs/auth-next
$ npm install @nuxtjs/axios
```

## Tailwind Setup

```bash
$ npm install -D tailwindcss postcss autoprefixer
$ npx tailwindcss init

# tailwind.config.json
content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],

# main.css
@tailwind base;
@tailwind components;
@tailwind utilities;

# add this in nuxt.config.js
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
```

## Solve problem types node in tsconfig.js

```bash
npm i -D @types/node
```

## Setup

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```
