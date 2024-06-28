import React from "react";

function Input(props) {
  return (
    <div className="form" onSubmit={props.fsubmitFnc}>
      <input
        onChange={props.iChangeFnc}
        type="text"
        autoFocus
        autoComplete="off"
        value={props.inp}
      />
      <button onClick={props.bclickFnc} type="submit">
        <span>Add</span>
      </button>
    </div>
  );
}

export default Input;
