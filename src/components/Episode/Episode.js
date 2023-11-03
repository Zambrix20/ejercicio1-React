import React from 'react';
import './episode.scss'


export default function Episode(props) {

    const { episode, name, air_date, cover_img } = props.episode;

    return (
        // <div className={`episode ${!cover_img ? 'placeholder' : ''}`}>
        <div className="episode">
            {/* <img src={cover_img ? cover_img : "https://enteracloud.mx/wp-content/uploads/2021/08/placeholder.png"} alt={name} width={300} /> */}
            {/* RENDER CONDICIONADO */}
            {
                // cover_img ?
                //     <img src={cover_img} alt={name} width={300} /> :
                //     // <img src={"https://enteracloud.mx/wp-content/uploads/2021/08/placeholder.png"} alt={name} width={300} />
                //     <div className="placeholder">
                //         {/* <img src="https://enteracloud.mx/wp-content/uploads/2021/08/placeholder.png" alt={name} width={300} /> */}
                //     </div>
            }
            <div className='episodeCover'>
                {
                    cover_img && <img src={cover_img} alt={name} width={300} />
                }
            </div>

            <h1>{name}</h1>
            <h2>{air_date}</h2>
            <h3>{episode}</h3>
        </div>
    )

};
