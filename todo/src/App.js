import React, { Component } from 'react';
// import './App.css';
 import Listtodo from './Components/listtodo';
import AddTodo from './Containers/addtodo'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todolist</h1>
        </header>
        <p className="App-intro">
        </p>
        <Listtodo/>
        <AddTodo/>
      </div>
    );
  }
}

 export default App;