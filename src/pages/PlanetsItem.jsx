import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const PlanetsItem = () => {
    const params = useParams()
    const [planet, setPlanet] = useState({})

    async function fetchPlanet (planetId) {
      const response = await axios.get(`https://swapi.dev/api/planets/${planetId}`)
      setPlanet(response.data)
  }
  
    useEffect(() => {
      fetchPlanet(params.id)
    }, [])


  return(
      <div>
          <h1 style={{color:"white"}}> {planet.name}</h1>
          {Object.entries(planet).map(([key, value]) => (
        <p style={{color:"white"}} key={key}>
        <strong>{key.replace('_', ' ')}:</strong> {value}
      </p>
    ))}
      </div>
  )
}

export default PlanetsItem;