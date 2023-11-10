import React from 'react'

export default function CustomPopup({city}) {
  return (
    <div style={{height:'150px', weidth:'300px'}}>
      <h3>{city.name}</h3>
      <p>Latitude: {city.lat}</p>
      <p>Longitude: {city.lng}</p>
    </div>
  )
}
