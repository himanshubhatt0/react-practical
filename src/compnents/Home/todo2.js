import React  from 'react'
import TodoList from './ListRender'
class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        items: [],
        text: ""
      };
      
      this.handleTextChange = this.handleTextChange.bind(this);
      this.handleAddItem = this.handleAddItem.bind(this);
      this.markItemCompleted = this.markItemCompleted.bind(this);
      this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }
    handleTextChange(event) {
      this.setState({
        text: event.target.value
      });
    }
    handleAddItem(event) {
      event.preventDefault();
      
      var newItem = {
        id: Date.now(),
        text: this.state.text,
        done: false
      };
      
      this.setState((prevState) => ({
        items: prevState.items.concat(newItem),
        text: ""
      }));
    }
    markItemCompleted(itemId) {
      var updatedItems = this.state.items.map(item => {
        if (itemId === item.id)
          item.done = !item.done;
        
        return item;
      });
      
      // State Updates are Merged
      this.setState({
        items: [].concat(updatedItems)
      });
    }
    handleDeleteItem(itemId) {
      var updatedItems = this.state.items.filter(item => {
        return item.id !== itemId;
      });
      
      this.setState({
        items: [].concat(updatedItems)
      });
    }
    render() {
      return (
        <>
            <div className="formCss">
              <div className="w-34vw">
              <input type="text" placeholder="New Task" className="inputCss" onChange={this.handleTextChange} value={this.state.text} />            
              </div>
              <button className="btn btn-primary" onClick={this.handleAddItem} disabled={!this.state.text}>Add</button>
             </div>
            <TodoList items={this.state.items} onItemCompleted={this.markItemCompleted} onDeleteItem={this.handleDeleteItem} />
         </>
      );
    }
  }
  
  
  export default  TodoApp;