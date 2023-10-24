
import React, { useState } from "react";
import "./userGrades.scss"
import Box from "../Box/box";

// const userWithGrades = [
//   { user: 'pepe', grade: 10 },
//   { user: 'pablo', grade: 9 },
//   { user: 'ernesto', grade: 9.5 },
//   { user: 'ana', grade: 10 },
//   { user: 'juan', grade: 8 }
// ]

function userWithGrades() {

  const [userWithGrades, setUserWithGrades] = useState([
    { name: 'Pepe', grade: 10 },
    { name: 'Pablo', grade: 9 },
    { name: 'Ernesto', grade: 9.5 },
    { name: 'Ana', grade: 10 },
    { name: 'Juan', grade: 8 }
  ])

  function addUser() {
    const uservalue = document.getElementById('name').value
    const gradevalue = document.getElementById('grade').value

    setUserWithGrades([
      ...userWithGrades,
      { name: uservalue, grade: gradevalue }
    ])
  }

  const [isDarkTheme, setIsDarkTheme] = useState(false)

  // cambiar estilo
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  // userWithGrades.map(({ user, grade }, index) => { return <Box key={index} user={user} grade={grade} /> })
  // userWithGrades.map((user, index) => { return <Box key={index} user={user.user} grade={user.grade} /> })
  return (
    <div className={`userAndGrades ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <div className="bodySection">
        <h1 className="titulo">User with grades</h1>
        {/* <ul> */}
        {
          userWithGrades.map((user, index) => {
            return <Box key={index} user={user.name} grade={user.grade} />
          })
        }
        {/* </ul> */}
        <div className="sectionUser">
          <input id="name" placeholder="Add a new user" />
          <input id="grade" placeholder="Add user grade" />
          <button onClick={addUser}>Add user</button>

          <button onClick={toggleTheme}>Cambiar estilo</button>
        </div>
      </div>

    </div>
  )
}

export default userWithGrades