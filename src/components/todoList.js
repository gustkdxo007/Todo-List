import React from 'react';
import Todo from './todo';

const TodoList = (props) => {
    return (
        <div>
            {props.todos.map((todo, i) => <Todo key={i} todos={todo.title} delTodo={props.delTodo} />)}
        </div>
    );
};

export default TodoList;