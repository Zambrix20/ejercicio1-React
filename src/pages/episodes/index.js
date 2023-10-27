import React from 'react'
import EpisodeBrowser from '../../components/EpisodeBrowser/EpisodeBrowser'

export default function Episodes() {

    const episodeArray = [
        {
            name: "Piloto los simpsons",
            air_date: "December 17, 1989",
            episode: "S01E01",
            cover_img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/04/simpson-senor-burns-1923151.jpg"
        },
        {
            name: "Bart the Genius",
            air_date: "January 14, 1990",
            episode: "S01E02",
            cover_img: "https://nerdiertides.files.wordpress.com/2016/03/crying_bart.jpg"
        },
        {
            name: "Homer's Odyssey",
            air_date: "January 21, 1990",
            episode: "S01E03",
            cover_img: "https://i.ytimg.com/vi/VK85JzdoZPo/maxresdefault.jpg"
        },
        {
            name: "There's No Disgrace Like Home",
            air_date: "January 28, 1990",
            episode: "S01E04",
            
        },

    ]

    return (
        <EpisodeBrowser episodes={episodeArray} />
    )

}
