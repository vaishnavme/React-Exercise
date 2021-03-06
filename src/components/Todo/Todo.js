import React, { useState } from "react";
import { v4 } from "uuid";
function Todo() {
  const [todoList, setTodoList] = useState([
    { id: v4(), task: "Get Milk", isComplete: false },
    { id: v4(), task: "Do homework", isComplete: true },
    { id: v4(), task: "Go to Sleep", isComplete: true }
  ]);

  const todoCheckHandler = (id, isComplete) => {
    setTodoList((prevTodos) => [
      ...prevTodos.map((todo) => {
        if (todo.id === id) {
          todo.isComplete = !isComplete;
        }
        return todo;
      })
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([
      ...todoList,
      {
        id: v4(),
        task: e.target[0].value,
        isComplete: false
      }
    ]);
  };

  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter task" />
        <input type="submit" />
      </form>
      <ul>
        {todoList.map(({ id, task, isComplete }) => (
          <li
            style={{ textDecoration: isComplete ? "line-through" : "" }}
            key={id}
            onClick={() => todoCheckHandler(id, isComplete)}
          >
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
