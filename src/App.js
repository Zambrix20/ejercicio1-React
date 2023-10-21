//import React from "react";
import React from 'react'

import logo from './logo.svg';
import './App.css';
import Box from './box';
import { useState } from 'react';

// La funcion va retornar HTML - componente funcional
function App() {

  const [counter, setCounter] = useState(0)

  function addCounter() {
    setCounter(counter + 1)
  }

  // const users = ['pepe', 'pablo', 'ernesto', 'ana']
  // const grades = [10, 9, 9.5, 10, 8];

  // const userWithGrades = [
  //   { user: 'pepe', grade: 10 },
  //   { user: 'pablo', grade: 9 },
  //   { user: 'ernesto', grade: 9.5 },
  //   { user: 'ana', grade: 10 },
  //   { user: 'juan', grade: 8 }
  // ]

  // Estados de React
  const [user, setUser] = useState('Jonh')
  const [lastName, setLastName] = useState('Doe')
  //const user = 'Jonh Doe'

  function changeName(params) {
    const newName = document.getElementById('nameChangeInput').value // Tomar el valor para el nombre del usuario
    const newLastName = document.getElementById('lastNameChangeInput').value // Tomar el valor para el nombre del usuario
    //console.log(newName);
    setUser(newName)
    setLastName(newLastName)
    document.getElementById('nameChangeInput').value = '' // resetear el input
    document.getElementById('lastNameChangeInput').value = '' // resetear el input
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Hello world!!!
        </p> */}
        {
          // users.map((user, index) => {
          //   return <Box key={index} user={user} grade={grades[index]} />
          // })
          // Usando deconstruccion
          //userWithGrades.map(({ user, grade }, index) => { return <Box key={index} user={user} grade={grade} /> })
          // userWithGrades.map((user, index) => { return <Box key={index} user={user.user} grade={user.grade} /> })
        }
        Hello, {user} {lastName}!
        <input id='nameChangeInput' type='text' placeholder='Change your name' />
        <input id='lastNameChangeInput' type='text' placeholder='Change your last name' />
        <button onClick={changeName}>change</button>
      </header>
    </div>
    // <div>
    //   <p className='whiteColor'>
    //     Actual counter value : {counter}
    //   </p>
    //   <button onClick={addCounter}>Click</button>
    // </div>
  );
}

export default App;
