import React, { useState } from "react";

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

  function iterateArray(item) {
    // The <ul> should display all the array items as <li>s
    return <li>{item}</li>;
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
          {/* all items in array as li */}
          {arrayItems.map(iterateArray)}
        </ul>
      </div>
    </div>
  );
}

export default App;
