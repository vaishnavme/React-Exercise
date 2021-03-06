import React from "react";
import Counter from "./components/Counter";
import Twitter from "./components/Twitter";
import Form from "./components/Form";
import DisableForm from "./components/DisableForm";
import Cart from "./components/Cart/Cart";
import Dark from "./components/Dark-Mode/Dark";
import Todo from "./components/Todo/Todo";
import Figma from "./components/Figma/Figma";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <Twitter />
      <hr />
      <Form />
      <hr />
      <DisableForm />
      <hr />
      <Cart />
      <hr />
      <Dark />
      <hr />
      <Todo />
      <hr />
      <Figma />
    </div>
  );
}
