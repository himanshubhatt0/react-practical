import React from 'react'
import TodoItem  from './ItemLogic'
class TodoList extends React.Component {
    render(props){
      return (
        <div className="todolist">
          {this.props.items.map(item => (
            <TodoItem key={item.id} id={item.id} text={item.text} completed={item.done} onItemCompleted={this.props.onItemCompleted} onDeleteItem={this.props.onDeleteItem} />
          ))}
        </div>
      );
    }
  }
  
  export default TodoList;