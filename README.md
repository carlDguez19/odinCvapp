# CV Application
A simple React application that allows users to create, edit, and preview a résumé in real time. Built as part of The Odin Project React curriculum to practice component structure, controlled inputs, state management, and modular UI design.

---

## Features
- Enter and edit personal information
- Add, edit, and delete education entries
- Add, edit, and delete work experience entries
- Live résumé preview that updates instantly
- Modular, reusable components
- Clean and simple UI

---

## Tech Stack
- React (functional components + hooks)
- JavaScript (ES6+)
- CSS
- Vite

---

## Project Structure

```txt
src/
│
├── components/
│   ├── App.jsx
│   ├── Button.jsx
│   ├── Education.jsx
│   ├── Experience.jsx
│   ├── GeneralInfo.jsx
│   └── Preview.jsx
│
├── styles/
│   ├── index.css
│   └── preview.css
│
├── main.jsx
└── index.css
```

---

## How It Works
- Each form section is a controlled component using `useState`.
- The main `App.jsx` component stores all résumé data and passes it down as props.
- The `Preview` component receives the same state and renders a formatted résumé layout.
- Education and experience sections use arrays to support multiple entries.
- Add/Delete buttons update those arrays immutably.

---

## What I Learned
- Structuring a React project with reusable components
- Managing nested and dynamic state
- Passing props cleanly between form and preview components
- Handling lists of items (add/remove/edit)
- Designing a simple, readable UI for form-heavy applicationsps

---

## Installation

```bash
npm install
npm run dev
```
