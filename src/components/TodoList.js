// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      {props.todos.map(item => (
        <Todo key={item.id} item={item} handleToggle={props.handleToggle} />
      ))}
      <button onClick={props.handleDone}>Click to clear</button>
    </div>
  );
};

export default TodoList;
