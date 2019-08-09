import React from 'react';
import Top from './components/top';
import AddTodo from './components/addTodo';
import TodoList from './components/todoList';
import CategoryList from './components/categoryList';
import AddCategory from './components/addCategory';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          title: '밥먹기',
          category: 'normal',
        },
        {
          title: '잠자기',
          category: 'normal',
        }
      ]
    };
  }

  addTodoClick = () => {
    let todoTitle = document.getElementById('add-todo').value
    if(!todoTitle) {
      alert('할 일을 입력해주세요');
    } else{
      let todo = {
        title: todoTitle,
        category: 'normal',
      }
      this.setState({
        todos: [...this.state.todos, todo]
     })
    }
  }

  delTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos].filter(data => data.title !==todo)
    })
  }

  render() {
    return (
      <div>
        <Top />
        <AddTodo addTodoClick={this.addTodoClick} />
        <TodoList todos={this.state.todos} delTodo={this.delTodo} />
        <AddCategory />
        <CategoryList categories={this.state.todos} />
      </div>
    )
  }
}

export default App;
