//import React from "react";
import React, { createContext, useState } from "react"

import logo from '../../logo.svg';
import './App.css';
import Box from '../Box/box';
//import { useState } from 'react';
import Home from '../../pages/home';
import UserWithGrades from '../../components/Usersgrades/Usergrades';
import Episodes from "../../pages/episodes";
import Pokemones from "../../pages/pokemones";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import Test from "../../pages/test";

export const GradesContext = createContext();

// La funcion va retornar HTML - componente funcional
function App() {

  // const [usersWithGrades, setUserWithGrades] = useState([
  //   {
  //     name: 'Juan',
  //     grade: 8
  //   },
  //   {
  //     name: 'Maria',
  //     grade: 9
  //   },
  //   {
  //     name: 'Jose',
  //     grade: 7
  //   },
  // ])

  // const [activePage, setActivePage] = useState('pokemones')
  // const [activePage, setActivePage] = useState('episodes')
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

    // Llama a react-router-dom
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Episodes />} />
        <Route path="/pokemones" element={<Pokemones />} /> */}

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="/pokemones" element={<MainLayout />}>
          <Route index element={<Pokemones />} />
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="/episodes" element={<Episodes />} />
          <Route path="/pokemones" element={<Pokemones />} /> */}
        </Route>

        <Route path="/episodes" element={<MainLayout />}>
          <Route index element={<Episodes />} />
        </Route>

        <Route path="/test" element={<MainLayout />}>
          <Route path=":param" element={<Test />} />
        </Route>

      </Routes>
    </BrowserRouter>

    // <GradesContext.Provider value={{ usersWithGrades, setUserWithGrades }}>
    //   {
    //     // activePage === 'home' ? <Home /> : <Pokemones />
    //     activePage === 'home' ? <Home /> : <Episodes />
    //   }
    //   {/* <Home /> */}
    // </GradesContext.Provider>

    // (<Home />)

    // (<UserWithGrades />)

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
    //       //usersWithGrades.map(({ user, grade }, index) => { return <Box key={index} user={user} grade={grade} /> })
    //       // usersWithGrades.map((user, index) => { return <Box key={index} user={user.user} grade={user.grade} /> })
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
