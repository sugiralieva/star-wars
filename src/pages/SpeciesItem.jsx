import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const SpeciesItem = () => {
    const params = useParams()
    const [species, setSpecies] = useState({})

    async function fetchSpecies(speciesId) {
      const response = await axios.get(`https://swapi.dev/api/species/${speciesId}`)
      setSpecies(response.data)
  }
  
    useEffect(() => {
      fetchSpecies(params.id)
    }, [])


  return(
      <div>
          <h1 style={{color:"white"}}> {species.name}</h1>
          {Object.entries(species).map(([key, value]) => (
        <p style={{color:"white"}} key={key}>
        <strong>{key.replace('_', ' ')}:</strong> {value}
      </p>
    ))}
      </div>
  )
}

export default SpeciesItem;