import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const FilmItem = () => {
    const params = useParams()
    const [film, setFilm] = useState([])

    async function fetchFilm (filmId) {
        const response = await axios.get(`https://swapi.dev/api/films/${filmId}`)
        setFilm(response.data)
    }
    
      useEffect(() => {
        fetchFilm(params.id)
      }, [])


    return(
        <div>
            <h1 style={{color:"white"}}> {film.title}</h1>
            {Object.entries(film).map(([key, value]) => (
          <p style={{color:"white"}} key={key}>
          <strong>{key.replace('_', ' ')}:</strong> {value}
        </p>
      ))}
        </div>
    )
  }
export default FilmItem;