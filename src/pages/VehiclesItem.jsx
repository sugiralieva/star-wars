import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import fetchItem from "../utils/utils";

const VehiclesItem = () => {
    const params = useParams()
    const [vehicle, setVehicle] = useState({})
  
    useEffect(() => {
      fetchItem('vehicles', params.id, setVehicle)
    }, [])


  return(
    <div className="content">
          <h1 className="title"> {vehicle.name}</h1>
          {Object.entries(vehicle).map(([key, value]) => (
        <p key={key}>
        <strong>{key.replace('_', ' ')}:</strong> {value}
      </p>
    ))}
      </div>
  )
}

export default VehiclesItem;