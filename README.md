# 🧱 A-5 Dev Stack Builder Website

Dev Stack Builder is a responsive React website for exploring development technologies and building a custom stack. Technology information is loaded from a local JSON file, while the selected stack is managed with React state and React Toastify feedback.

## 🛠️ Technologies Used

- React.js
- Vite
- JavaScript ES6+
- CSS3
- React Toastify
- JSON

## ✨ 3 Main Features

1. Explore frontend, backend, database, language, styling, and DevOps technologies from local JSON data.
2. Add technologies to a personal stack with duplicate protection, remove actions, and a Remove All button.
3. Fully responsive UI with sticky navigation, mobile hamburger menu, loading state, toast notifications, and a shared gradient brand theme.

## 📁 Project Structure

```text
public/
  data/
    technologies.json
src/
  assets/
    hamburger.png
    hero-stack.png
    YourStack-with.png
    YourStack-without.png
  components/
    Brand/
      Brand.jsx
    Navbar/
      Navbar.jsx
    Hero/
      Hero.jsx
    Technologies/
      Technologies.jsx
    TechCard/
      TechCard.jsx
    StackPanel/
      StackPanel.jsx
    InfoSection/
      InfoSection.jsx
    Footer/
      Footer.jsx
  App.jsx
  main.jsx
  styles.css
index.html
package.json
vite.config.js
README.md
```

## ▶️ Run Locally

```bash
npm install
npm run dev
```

## 🧠 React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like UI inside JavaScript. React uses JSX because it makes component structure easier to read and maintain.

### 2. What is the difference between props and state?

Props are values passed from a parent component to a child component. State is data managed inside a component that can change and update the UI.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` stores changing values in a React function component. This project uses it for the mobile menu, technology data, loading status, and selected stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs side effects after a component renders. It is used here to fetch `technologies.json` when the app starts and then place the data into state.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item between renders so React can update the list efficiently and correctly.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition. In this project, the stack panel shows “Your stack is empty.” when the selected stack has no items and shows stack cards when items exist.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child through props. A child can communicate back by calling a callback function that the parent passes as a prop. This project uses callbacks such as `onAdd`, `onRemove`, and `onRemoveAll`.

## ✅ Assignment Checklist

- Navbar follows the UI structure.
- Sticky desktop navbar.
- Mobile navbar with hamburger, centered brand, Sign In, and Sign Up.
- Hero heading, description, two buttons, and banner image.
- 12 technology records in local JSON.
- Technology data is loaded from `technologies.json` instead of a hardcoded component array.
- Technology cards include icon, badge, name, description, category, difficulty, rating, and Add to Stack button.
- 3-column desktop grid.
- 2-column tablet grid.
- 1-column mobile grid.
- Your Stack sidebar with empty and selected states.
- Duplicate technology protection.
- Added card button becomes disabled and reads `✓ Added to Stack`.
- Individual remove functionality.
- Remove All functionality.
- Footer with brand block, social links, Product, Company, and Legal groups.
- Responsive layout.
- React Toastify for add, duplicate, remove, and remove-all feedback.
- Loading state while local JSON is fetched.
- One shared brand gradient variable used by the brand name, hero highlight, and primary buttons.
- GitHub README with project information, technologies, three features, and all seven React questions.
