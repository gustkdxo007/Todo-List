import React from 'react';

class AddTodo extends React.Component {

  state = {
      value: '',
  }

  onClick = (e) => {
    e.preventDefault();
    this.props.addTodoClick();
    this.setState({value: ''});
  }

  onEnter = (e) => {
    if(e.charCode === 13) {
     this.props.addTodoClick();
     this.setState({value: ''})
    }
  }

  onChange = (e) => {
    this.setState({value: e.target.value})
  }


  render() {
    return (
      <div>
        <h3>{this.props.currCategory}</h3>
        <input id='add-todo' type='text' value={this.state.value} onChange={this.onChange} onKeyPress={this.onEnter} placeholder='할 일을 입력하세요' ></input>
        <button onClick={this.onClick}>추가</button>
     </div>
    )
  }
} 
   

export default AddTodo;