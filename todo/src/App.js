import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {readItem, addItem, editItem, deleteItem, toggleItem} from './actions/index';
import Listtodo from './components/listtodo';

class App extends Component {
  constructor (props) {
    super(props);
  }


  componentDidMount() {
    this.props.readItem();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <Listtodo todos = {this.props.todos}/>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos:state.todos
  }
}

export default connect(mapStateToProps, {readItem, editItem, deleteItem, toggleItem, addItem })(App);
