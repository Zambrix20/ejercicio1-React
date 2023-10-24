import React from "react"
import './box.css'

// props - propiedades de migrar de un padre a un hijo
function Box(props) {
    const { user, grade } = props;

    return (
        <div className="box">
            <h1>{user}</h1>
            <h2>{grade}</h2>
        </div>
    )

}

export default Box