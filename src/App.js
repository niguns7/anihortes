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

 const switchNameHandler = () => {
  setPersonState({
    person: [
      {name: 'Nirgun', age: '30'},
      {name: 'Pooja', age: '32'},
      {name: 'anushree', age: '28'}
    ]
  });
};


  return (
    <div className="App">
      <h1>Hi, i'm a react app</h1>
      <p>This is really working</p> 
      <div className='button'>
      <button onClick={switchNameHandler}> Switch </button>
      <button onClick={personState}> prev </button>
      </div>
      <Person name={personState.person[0].name} age={personState.person[0].age}/>
      <Person name={personState.person[1].name} age={personState.person[1].age}> I am beautifull </Person>
      <Person name={personState.person[2].name} age={personState.person[2].age}/>
    </div>
    
  );
  }





export default App;
