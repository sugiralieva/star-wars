import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const VehiclesItem = () => {
    const params = useParams()
    const [vehicle, setVehicle] = useState({})

    async function fetchVehicle (vehicleId) {
      try{
      const response = await axios.get(`https://swapi.dev/api/vehicles/${vehicleId}`)
      setVehicle(response.data)
    } catch {
      setVehicle({information:'No information'})
    }
  }
  
    useEffect(() => {
      fetchVehicle(params.id)
    }, [])


  return(
      <div>
          <h1 style={{color:"white"}}> {vehicle.name}</h1>
          {Object.entries(vehicle).map(([key, value]) => (
        <p style={{color:"white"}} key={key}>
        <strong>{key.replace('_', ' ')}:</strong> {value}
      </p>
    ))}
      </div>
  )
}


export default VehiclesItem;