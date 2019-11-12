import React from "react";

const Todo = props => {
  let completeLine = () => {
    return {
      textDecoration: props.done ? "line-through" : "none"
    };
  };

  return (
    <div className="todo-todo" style={completeLine()}>
      <input type="checkbox" onClick={props.doneTodo.bind(this, props.todos)} />
      <span onClick={props.doneTodo.bind(this, props.todos)}>
        {props.todos}
      </span>
      <button className="btn" onClick={props.delTodo.bind(this, props.todos)}>
        취소
      </button>
    </div>
  );
};

export default Todo;
