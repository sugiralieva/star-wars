import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import fetchItem from "../utils/utils";

const FilmItem = () => {
    const params = useParams()
    const [film, setFilm] = useState([])
    
      useEffect(() => {
        fetchItem('films', params.id, setFilm)
      }, [])


    return(
        <div className="content">
            <h1 className="title"> {film.title}</h1>
            {Object.entries(film).map(([key, value]) => (
          <p key={key}>
          <strong>{key.replace('_', ' ')}:</strong> {value}
        </p>
      ))}
        </div>
    )
  }
export default FilmItem;