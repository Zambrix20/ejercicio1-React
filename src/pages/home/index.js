import React, { useContext, useMemo, useState } from "react"

import "./home.scss"
import Box from '../../components/Box/box'
import { GradesContext } from '../../components/App/App'

function Home() {

    const [isDarkTheme, setIsDarkTheme] = useState(false)
    // const [user, setUser] = useState('Yovani')
    const [searchedUser, setSearchedUser] = useState('')
    const { usersWithGrades, setUserWithGrades } = useContext(GradesContext)

    const averageGrade = () => {
        const total = usersWithGrades.reduce((acc, user) => {
            return acc + user.grade
        }, 0)

        return total / usersWithGrades.length
    }

    const avg = useMemo(() => averageGrade(), [usersWithGrades])

    // const [usersWithGrades, setUserWithGrades] = useState([
    //     {
    //         name: 'Juan',
    //         grade: 8
    //     },
    //     {
    //         name: 'Maria',
    //         grade: 9
    //     },
    //     {
    //         name: 'Jose',
    //         grade: 7
    //     },
    // ])

    // cambiar estilo
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }

    const addUser = () => {
        const userValue = document.getElementById('user').value
        const gradeValue = Number(document.getElementById('grade').value)

        setUserWithGrades([...usersWithGrades, {
            name: userValue,
            grade: gradeValue
        }])
    }

    const searchUser = () => {
        const userValue = document.getElementById('suser').value;

        const filteredUsers = usersWithGrades.filter((user) => {
            return user.name === userValue;
        }
        );

        setSearchedUser(filteredUsers[0]);
    }

    return (
        // <div>
        //     <div className='home'>
        //         <h1>Estilo home</h1>
        //         <div className='container'>
        //             <h1>Estilo container</h1>
        //             <div className='wrapper'>
        //                 <h1>Estilo wrapper</h1>
        //             </div>
        //         </div>
        //     </div>
        //     <h1>sin estilo</h1>
        // </div>
        <div className={`home ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
            <div>
                <h1>Home</h1>
                {/* <p>{`${user == 'Yovanis' ? 'Si' : 'No'}`}</p> */}
                <button onClick={toggleTheme}>Cambiar theme</button>
            </div>

            <div className='users'>
                {/* <h1>Users</h1> */}
                <input id='user' type='text' placeholder='User' />
                <input id='grade' type='number' placeholder='Grade' />
                <button onClick={addUser}>Add user</button>
            </div>

            <div className='search-box'>
                <input id='suser' type='text' placeholder='user' />
                <button onClick={searchUser}>Search user</button>
                {
                    searchedUser && <Box name={searchedUser.name} />
                }

                <span> Average grade: {avg} </span>
            </div>
        </div>
    )
}

export default Home