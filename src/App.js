import React, { Component } from 'react';
import './App.css';
import Person from './Person';

class App extends Component {

  state = {
    person: [
      {name: 'Nirgun', age: '28'},
      {name: 'Pooja', age: '30'},
      {name: 'anushree', age: '2'}
    ]
  }

  switchNameHandler = () => {
    //console.log("pressed");
    this.setState({
      person: [
        {name: 'Nirgun', age: '30'},
        {name: 'Pooja', age: '32'},
        {name: 'anushree', age: '4'}
      ]
    })
  }

  prevHandler = () => {
    //console.log("pressed");
    this.setState({
      person: [
        {name: 'Nirgun', age: '28'},
        {name: 'Pooja', age: '30'},
        {name: 'anushree', age: '2'}
      ]
    })
  }
  render() {
  return (
    <div className="App">
      <h1>Hi, i'm a react app</h1>
      <p>This is really working</p> 
      <div className='button'>
      <button onClick={this.switchNameHandler}> Switch </button>
      <button onClick={this.prevHandler}> prev </button>
      </div>
      <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
      <Person name={this.state.person[1].name} age={this.state.person[1].age}> I am beautifull </Person>
      <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
    </div>
    
  );
  };

}



export default App;
