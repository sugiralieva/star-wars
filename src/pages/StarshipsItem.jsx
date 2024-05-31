import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import fetchItem from "../utils/utils";

const StarshipsItem = () => {
    const params = useParams()
    const [starship, setStarship] = useState({})
  
    useEffect(() => {
      fetchItem('starships', params.id, setStarship)
    }, [])


  return(
      <div className="content">
          <h1 className="title"> {starship.name}</h1>
          {Object.entries(starship).map(([key, value]) => (
        <p key={key}>
        <strong>{key.replace('_', ' ')}:</strong> {value}
      </p>
    ))}
      </div>
  )
}

export default StarshipsItem;