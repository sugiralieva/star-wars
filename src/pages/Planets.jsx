import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Planets = () => {
    const navigate = useNavigate()
    const [names, setName] = useState([])

    async function getNames () {
      const names = []
      const response = await axios.get('https://swapi.dev/api/planets')
      const data = response.data.results
      data.map((i) => names.push(i.name))
      setName(names)
    }
  
    useEffect(() => {
      getNames()
    }, [])

    const handleClick = (name) => {
      navigate(`/planets/${name}`);
  };

    return (
        <div className="page_items">
        {names.map((n, index) => 
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

export default Planets;