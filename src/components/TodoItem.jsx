import React, { useState } from "react";

function TodoItem(props) {
  // when i click on any li it must strike out
  const [isDone, changeStrike] = useState([false]);

  function listClick(id) {
    console.log(`List item at ${id} got clicked!`);

    // strike must now be opposite of isDone
    changeStrike((prevValue) => {
      const newArr = [...prevValue];
      newArr[id] = !newArr[id];
      return newArr;
    });
  }

  const strike = {
    textDecoration: "line-through",
  };
  const unstrike = {
    textDecoration: "none",
  };

  function iterateArray(item, index) {
    // The <ul> should display all the array items as <li>s
    return (
      <li
        key={index}
        onClick={() => listClick(index)}
        style={isDone[index] ? strike : unstrike}
      >
        {item}
      </li>
    );
  }

  return props.array.map(iterateArray);
}

export default TodoItem;
