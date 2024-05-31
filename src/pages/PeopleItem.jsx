import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import fetchItem from "../utils/utils";

const PeopleItem = () => {
    const params = useParams()
    const [people, setPeople] = useState({})
  
    useEffect(() => {
      fetchItem('people', params.id, setPeople)
    }, [])

  return(
    <div className="content">
          <h1 className="title"> {people.name}</h1>
          {Object.entries(people).map(([key, value]) => (
        <p key={key}>
        <strong>{key.replace('_', ' ')}:</strong> {value}
      </p>
    ))}
    </div>
  )
}

export default PeopleItem;