import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Films = () => {
    const navigate = useNavigate()
    const [films, setFilms] = useState([])

    async function getFilms () {
      const films = []
      const response = await axios.get('https://swapi.dev/api/films')
      const data = response.data.results
      data.map((i) => films.push(i.title))
      setFilms(films)
    }
  
    useEffect(() => {
      getFilms()
    }, [])

    const handleClick = (id) => {
      navigate(`/films/${id}`);
  };

    return (
        <div className="page_items">
        {films.map((n, index) => 
                <a 
                key={index+1} 
                onClick={(e) => {
                    e.preventDefault();
                    handleClick(index+1);
                }}>
                  {n}
                </a>
        )}
        </div>

    )
}

export default Films;