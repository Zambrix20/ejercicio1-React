//import React from "react";
import React from 'react'

import logo from '../../logo.svg';
import './App.css';
import Box from '../Box/box';
//import { useState } from 'react';
import Home from '../../pages/home';
import UserWithGrades from '../../components/Usersgrades/Usergrades';

// La funcion va retornar HTML - componente funcional
function App() {

  // const [counter, setCounter] = useState(0)

  // function addCounter() {
  //   setCounter(counter + 1)
  // }

  // Estados de React
  // const [user, setUser] = useState('Jonh')
  // const [lastName, setLastName] = useState('Doe')
  //const user = 'Jonh Doe'

  // function changeName(params) {
  //   const newName = document.getElementById('nameChangeInput').value // Tomar el valor para el nombre del usuario
  //   const newLastName = document.getElementById('lastNameChangeInput').value // Tomar el valor para el nombre del usuario
  //   //console.log(newName);
  //   setUser(newName)
  //   setLastName(newLastName)
  //   document.getElementById('nameChangeInput').value = '' // resetear el input
  //   document.getElementById('lastNameChangeInput').value = '' // resetear el input
  // }

  return (
    // (<Home />)

    (<UserWithGrades />)

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     {/* <p>
    //       Hello world!!!
    //     </p> */}
    //     {
    //       // users.map((user, index) => {
    //       //   return <Box key={index} user={user} grade={grades[index]} />
    //       // })
    //       // Usando deconstruccion
    //       //userWithGrades.map(({ user, grade }, index) => { return <Box key={index} user={user} grade={grade} /> })
    //       // userWithGrades.map((user, index) => { return <Box key={index} user={user.user} grade={user.grade} /> })
    //     }
    //     {/* Hello, {user} {lastName}!
    //     <input id='nameChangeInput' type='text' placeholder='Change your name' />
    //     <input id='lastNameChangeInput' type='text' placeholder='Change your last name' />
    //     <button onClick={changeName}>change</button> */}
    //   </header>
    // </div>
    // <div>
    //   <p className='whiteColor'>
    //     Actual counter value : {counter}
    //   </p>
    //   <button onClick={addCounter}>Click</button>
    // </div>
  );
}

export default App;
