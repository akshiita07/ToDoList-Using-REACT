import React, { useState } from "react";
import TodoItem from "./TodoItem";

function App() {
  const [todo, newToDo] = useState("");
  const [arrayItems, setItem] = useState([]); //empty array initially

  function iChange(event) {
    console.log("User entered input: " + event.target.value);
    newToDo(event.target.value);
  }
  function bclick() {
    console.log("Button is clicked");
    // add new to do into this array
    setItem((prevValue) => {
      return [...prevValue, todo];
    });
    // also input field must be blank after
    newToDo("");
  }
  function fsubmit(event) {
    event.preventDefault();
  }

  function deleteItem(id) {
    console.log(`List item: ${id} got clicked for delete!`);
    setItem((prevValue) => {
      // delete item with specific index
      // use filter fnc to create new array & keep items that return true
      return prevValue.filter(function (item, index) {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form" onSubmit={fsubmit}>
        <input
          onChange={iChange}
          type="text"
          autoFocus
          autoComplete="off"
          value={todo}
        />
        <button onClick={bclick} type="submit">
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <TodoItem array={arrayItems} onCheck={deleteItem} />
        </ul>
      </div>
    </div>
  );
}

export default App;
