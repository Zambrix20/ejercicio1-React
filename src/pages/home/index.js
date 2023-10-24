import React, { useState } from 'react'
import "./home.scss"

function Home() {

    const [isDarkTheme, setIsDarkTheme] = useState(false)
    // const [user, setUser] = useState('Yovani')

    // cambiar estilo
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
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
                <button onClick={toggleTheme}>Cambiar estilo</button>
            </div>
        </div>
    )
}

export default Home