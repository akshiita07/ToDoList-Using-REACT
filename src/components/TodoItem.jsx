import React, { useState } from "react";

function TodoItem(props) {
  // when i click on any li it must deleted from arrayItems

  function iterateArray(item, index) {
    // onCheck lives in App.jsx--> sending fnc using props
    return (
      <li
        key={index}
        onClick={() => {
          props.onCheck(index);
        }}
      >
        {item}
      </li>
    );
  }

  return props.array.map(iterateArray);
}

export default TodoItem;
