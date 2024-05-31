import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import fetchItem from "../utils/utils";

const SpeciesItem = () => {
    const params = useParams()
    const [species, setSpecies] = useState({})
  
    useEffect(() => {
      fetchItem('species', params.id, setSpecies)
    }, [])


  return(
    <div className="content">
          <h1 className="title"> {species.name}</h1>
          {Object.entries(species).map(([key, value]) => (
        <p key={key}>
        <strong>{key.replace('_', ' ')}:</strong> {value}
      </p>
    ))}
      </div>
  )
}

export default SpeciesItem;