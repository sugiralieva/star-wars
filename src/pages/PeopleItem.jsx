import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const PeopleItem = () => {
    const params = useParams()
    const [people, setPeople] = useState({})

    async function fetchPeople (peopleId) {
      const response = await axios.get(`https://swapi.dev/api/people/${peopleId}`)
      setPeople(response.data)
  }
  
    useEffect(() => {
      fetchPeople(params.id)
    }, [])


  return(
      <div>
          <h1 style={{color:"white"}}> {people.name}</h1>
          {Object.entries(people).map(([key, value]) => (
        <p style={{color:"white"}} key={key}>
        <strong>{key.replace('_', ' ')}:</strong> {value}
      </p>
    ))}
      </div>
  )
}

export default PeopleItem;