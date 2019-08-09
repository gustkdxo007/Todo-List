import React from 'react';

const Todo = (props) => {
    return (
        <div>
            <input type="checkbox" />
            <span>{props.todos}</span>
            <button onClick={props.delTodo.bind(this, props.todos)}>취소</button>
        </div>
    );
};

export default Todo;