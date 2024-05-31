import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const StarshipsItem = () => {
    const params = useParams()
    const [starship, setStarship] = useState({})

    async function fetchStarship (starshipId) {
      try{
      const response = await axios.get(`https://swapi.dev/api/starships/${starshipId}`)
      setStarship(response.data)
    } catch {
      setStarship({information:'No information'})
    }
  }
  
    useEffect(() => {
      fetchStarship(params.id)
    }, [])


  return(
      <div>
          <h1 style={{color:"white"}}> {starship.name}</h1>
          {Object.entries(starship).map(([key, value]) => (
        <p style={{color:"white"}} key={key}>
        <strong>{key.replace('_', ' ')}:</strong> {value}
      </p>
    ))}
      </div>
  )
}

export default StarshipsItem;