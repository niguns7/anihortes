import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import './App.css';
import Person from './Person';

const App = props => {

const [ personState, setPersonState] = useState ({
  person: [
    {name: 'Nirgun', age: '28'},
    {name: 'Pooja', age: '30'},
    {name: 'anushree', age: '26'}
  ],
  otherState : "Some other states"
}
);

console.log(personState);

 const switchNameHandler = (newName) => {
  setPersonState({
    person: [
      {name: newName, age: '30'},
      {name: 'Pooja', age: '32'},
      {name: 'anushree', age: '28'}
    ]
  });
};


const switchNameHandler2 = () => {
  setPersonState({
    person: [
      {name: 'Nirgun', age: '28'},
      {name: 'Pooja', age: '30'},
      {name: 'anushree', age: '26'}
    ]
  });
};


const namechangeHandler = (event) => {
  setPersonState({
    person: [
      {name: 'Nirgun', age: '28'},
      {name: event.target.value, age: '30'},
      {name: 'anushree', age: '26'}
    ]
  });
};

  return (
    <div className="App">
      <h1>Hi, i'm a react app</h1>
      <p>This is really working</p> 
      <div className='button'>
      <button onClick={switchNameHandler.bind(this, 'NIRGUN')}> Switch </button>
      <button onClick={switchNameHandler2}> prev </button>
      </div>
      <Person name={personState.person[0].name} age={personState.person[0].age}/>
      <Person name={personState.person[1].name} age={personState.person[1].age} 
      click={switchNameHandler .bind(this, 'POOJA')}
      changed={namechangeHandler}> I am beautifull </Person>
      <Person name={personState.person[2].name} age={personState.person[2].age}/>
    </div>
    
  );
  }





export default App;
