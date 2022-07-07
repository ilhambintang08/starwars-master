import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

import style from './movie.module.css'

const Movie = () => {

    const param = useParams()
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        fetch(`https://swapi.dev/api/films/${param.id}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setMovie({...data})
            })
    })

    return (
        <div>
            { movie !== null && 
            
            <>
            <h1>Episode {movie.episode_id}: {movie.title}</h1>
            <p>{movie.opening_crawl} </p>

            <h3 className={style.detail_title}>Director</h3>
            <p className={style.detail}>{movie.director}</p>

            <h3 className={style.detail_title}>Producer</h3>
            <p className={style.detail}>{movie.producer}</p>

            <h3 className={style.detail_title}>Release Date</h3>
            <p className={style.detail}>{movie.release_date}</p>
            </> 
        }
        </div>
    )
}

export default Movie