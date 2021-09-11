import React from 'react';
class TodoItem extends React.Component {
    constructor(props) {
      super(props);
      this.markCompleted = this.markCompleted.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
    }
    markCompleted(event) {
      this.props.onItemCompleted(this.props.id);
    }
    deleteItem(event) {
      this.props.onDeleteItem(this.props.id);
    }
    // Highlight newly added item for several seconds.
    
    render() {
      var itemClass = " todoitem " + (this.props.completed ? "done" : "undone");
      return (
        <div className={itemClass} ref={li => this._listItem = li }>
          <div className="aaa">
            <div style={{width:"30px"}}>
            <input type="checkbox" className="" onChange={this.markCompleted} />
            </div> 
            <div>{this.props.text}</div>
            </div>
            <div className="m-r-20">
          <button type="button" className="btn btn-danger btn-sm" onClick={this.deleteItem}>x</button>
          </div>
        </div>
      );
    }
  }
  export default TodoItem;