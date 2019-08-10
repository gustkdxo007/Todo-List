import React from 'react';
import Todo from './todo';

const TodoList = (props) => {
    return (
        <div>
            {props.todos.filter(todo => todo.category === props.currCategory)
                .map((todo, i) => <Todo key={i} todos={todo.title} done={todo.done} delTodo={props.delTodo} doneTodo={props.doneTodo} />)}
        </div>
    );
};

export default TodoList;