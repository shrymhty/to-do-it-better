import './App.css';
import React, {Fragment} from 'react';

//components
import InputTodo from './components/inputTodo'; 
import ListTodo from './components/ListTodos';

function App() {
  return <Fragment>
    <div className='conatiner'>
      <InputTodo/>
      <ListTodo/>
    </div>
    
  </Fragment>
}

export default App;
