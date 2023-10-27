import React, { useState } from 'react';
import Episode from '../Episode/Episode';

export default function EpisodeBrowser(props) {

    const { episodes } = props // lo toma de index.js (episodes)

    // activeEpisode es el indice del episodio; e inica en la posicon cero
    const [activeEpisode, setActivePage] = useState(0)

    const prevEpisode = () => {
        if (activeEpisode > 0) {
            setActivePage(activeEpisode - 1)
        } else {
            alert('No more episodes')
        }
    }

    const nextEpisode = () => {
        if (activeEpisode < episodes.length - 1) {
            setActivePage(activeEpisode + 1)
        } else {
            alert('No more episodes')
        }
    }

    return (
        // retorno de un componente, nodo padre
        <React.Fragment>
            {/* {
                episodes.map((episode, index) => {
                    return <Episode key={index} name={episode.name} air_date={episode.air_date} episode={episode.episode} cover_img={episode.cover_img} />
                })
            } */}

            {/* Mostrar el episodio activo */}
            <Episode episode={episodes[activeEpisode]} />
            <button onClick={prevEpisode}>Prev</button>
            <button onClick={nextEpisode}>Next</button>

        </React.Fragment>
    );

};
