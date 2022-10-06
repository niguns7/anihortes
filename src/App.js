import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import './App.css';
import Person from './Person';

const App = props => {

const [ personState, setPersonState] = useState ({
  person: [
    {name: 'Nirgun', age: '28'},
    {name: 'Pooja', age: '30'},
    {name: 'anushree', age: '26'},
    {name: 'Nirja', age: '32'}
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
      {name: 'anushree', age: '28'},
      {name: 'nirja', age: '34'}
    ]
  });
};



const namechangeHandler = (event) => {
  setPersonState({
    person: [
      {name: 'Nirgun', age: '28'},
      {name: event.target.value, age: '30'},
      {name: 'anushree', age: '26'},
      {name: 'Nirja', age: '32'}
    ]
  });
};

//used useState react hook
  return (
    <div className="App">
      <h1 className="text">Hi, i'm a react app</h1>
      <div className='button'>
      <button className="text" onClick={switchNameHandler.bind(this, 'NIRGUN')}> Switch </button>
      </div>
      <Person name={personState.person[0].name} age={personState.person[0].age}/>
      <Person name={personState.person[1].name} age={personState.person[1].age} 
      click={switchNameHandler .bind(this, 'POOJA')}
      changed={namechangeHandler}> I am beautifull </Person>
      <Person name={personState.person[2].name} age={personState.person[2].age}/>
      <Person name={personState.person[3].name} age={personState.person[3].age}/>
    </div>
    
  );
  }





export default App;
