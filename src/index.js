import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Привет, мир!'
// );

//            babel
// jsx -> преобразователь -> js

/* 

у реакта есть 2 типа элементов:

1 реакт элементы DOM
2 реакт компоненты

реакт элементы DOM -> p img div span button

реакт компоненты -> ProductList -> Product


*/
