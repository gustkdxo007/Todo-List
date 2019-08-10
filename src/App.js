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
          done: false,
        },
        {
          title: '잠자기',
          category: 'normal',
          done: false,
        }
      ],
      category: ['normal','star'],
      currentCategory: 'normal',
    };
  }

  addTodoClick = () => {
    let todoTitle = document.getElementById('add-todo').value;
    let todo = {
      title: todoTitle,
      category: this.state.currentCategory,
      done: false,
    }
    !todoTitle ? alert('할 일을 입력해주세요') : this.setState({todos: [...this.state.todos, todo]})
  }

  delTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos].filter(data => data.title !==todo)
    })
  }

  delCategory = (category) => {
    this.setState({
      category: [...this.state.category].filter(data => data !== category)
    })
  }

  addCategory = () => {
    let value = prompt('추가할 Category를 입력하세요');
    if(value) {
      this.setState({
        category: [...this.state.category, value]
      })
    }
  }

  doneTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos].map(item => {
        if(item.title === todo) {
          item.done = !item.done;
        }
        return item;
      })
    })
  }

  handleCategory = (cate) => {
    this.setState({
      currentCategory: cate,
    })
  }

  render() {
    return (
      <div>
        <Top />
        <AddTodo addTodoClick={this.addTodoClick} />
        <TodoList todos={this.state.todos} delTodo={this.delTodo} doneTodo={this.doneTodo} currCategory={this.state.currentCategory}/>
        <AddCategory addCategory={this.addCategory} />
        <CategoryList categories={this.state.category} delCategory={this.delCategory} handleCategory={this.handleCategory} />
      </div>
    )
  }
}

export default App;
