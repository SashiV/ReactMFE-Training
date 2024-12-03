import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// const myPara: React.ReactElement = React.createElement("p", {className: "bold"}, "Hello World!");
// const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root')!);
// const p1: React.ReactElement = React.createElement("p", {className: "bold"}, "This is Para-1")
// const p2: React.ReactElement = React.createElement("p", {className: "bold"}, "This is Para-2")
// const myButton: React.ReactElement = React.createElement("button", {className: "myButton"}, "This is Button")
// const myList: React.ReactElement = React.createElement("ul", {key: 1}, [
//       React.createElement("li", null, "First"),
//       React.createElement("li", null, "Second"),
//       React.createElement("li", null, "Third")
//     ])
// const myDiv: React.ReactElement = React.createElement("div", {className: "firstDiv"}, [myPara,
//   p1,p2,myButton,myList]);
// root.render(myDiv);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
