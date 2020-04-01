import React, { Component } from 'react';
import './App.css';
import UserCardList from './components/UserCardList';
import UserCard from './components/UserCard';
import {
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

class App extends Component {

  state = {
    textInput: "",
    users: []
  };

  handleChange = event => {
    this.setState({
      textInput: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const userName = this.state.textInput;
    fetch(`https://api.github.com/users/${userName}`)
    .then(res => res.json())
    .then((result) => {
        this.setState({
            textInput: "",
            users: [...this.state.users,result]
        });
    });
  };

  render() {
    const {users} = this.state;
    return (
      <div className="App">
        
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter user Name:
            <input
              type="text"
              value={this.state.textInput}
              placeholder="Text Input"
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        <UserCardList 
          users={users}
        />
      </div>
    );
  }
}

export default App;
