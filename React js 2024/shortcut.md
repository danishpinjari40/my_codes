create vite react app

pnpm create vite@latest 04_bgcolorchange -- --template react

pnpm install -D tailwindcss postcss autoprefixer


//* creating new app always
pnpm create vite@latest 05_password_generator -- --template react 

cd 05_password_generator && pnpm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p

//* Git hub push command
git add . && git commit -m "React concept added" && git push origin main



## Create Vite React App

```sh

pnpm create vite@latest 07_React_Router -- --template react


cd 05_password_generator && pnpm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p


# git hub added sort
git add . && git commit -m "React concept added" && git push origin main

echo "/** @type {import('tailwindcss').Config} */export default { content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], theme: { extend: {} }, plugins: [] }" > tailwind.config.js


## React Router Dom
pnpm i react-router-dom