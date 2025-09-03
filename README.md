# Food Ordering App

A simple React app that displays a menu, lets users add items to a cart, and shows a cart modal with selected items and a total.

## Tech Stack
- React 17 (Create React App)
- react-scripts 4

## Getting Started

### Prerequisites
- Node.js 14+ and npm

### Install
```bash
npm install
```

### Run (development)
```bash
npm start
```
App runs at `http://localhost:3000` by default.

### Build (production)
```bash
npm run build
```

## Project Structure
```
src/
  App.js                 # App state and context provider
  index.js               # App entry
  index.css              # Global styles
  Components/
    data.js              # React context for cart state
    Header/
      Header.js
      Header.css
      Cart.js
      Cart.css
    Msg.js
    Msg.css
    Menu/
      Menu.js
      Menu.css
      Item.js
      Item.css
    Cart/
      Cartpopup.js
      Cartpopup.css
      SelectedItems.js
      SelectedItems.css
```

## Available Scripts
- `npm start` — start dev server
- `npm test` — run tests (watch mode)
- `npm run build` — production build
- `npm run eject` — eject CRA config (irreversible)

## Notes
- Cart state is provided via the `data` React context.
- The Order button currently reloads the page to reset state: `onClick={() => window.location.reload()}`. Replace with real checkout logic as needed.

## License
MIT
