import React, { useState } from "react";

function TodoItem(props) {
  // when i click on any li it must strike out
  const [isDone, changeStrike] = useState(false);

  function listClick() {
    console.log("List item got clicked!");

    // strike must now be opposite of isDone
    changeStrike((prevValue) => {
      return !prevValue;
    });
  }

  const strike = {
    textDecoration: "line-through",
  };
  const unstrike = {
    textDecoration: "none",
  };

  function iterateArray(item) {
    // The <ul> should display all the array items as <li>s
    return (
      <li onClick={listClick} style={isDone ? strike : unstrike}>
        {item}
      </li>
    );
  }

  return props.array.map(iterateArray);
}

export default TodoItem;
