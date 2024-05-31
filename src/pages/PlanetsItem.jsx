import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import fetchItem from "../utils/utils";

const PlanetsItem = () => {
    const params = useParams()
    const [planet, setPlanet] = useState({})
  
    useEffect(() => {
      fetchItem('planets', params.id, setPlanet)
    }, [])


  return(
    <div className="content">
          <h1 className="title"> {planet.name}</h1>
          {Object.entries(planet).map(([key, value]) => (
        <p key={key}>
        <strong>{key.replace('_', ' ')}:</strong> {value}
      </p>
    ))}
      </div>
  )
}

export default PlanetsItem;