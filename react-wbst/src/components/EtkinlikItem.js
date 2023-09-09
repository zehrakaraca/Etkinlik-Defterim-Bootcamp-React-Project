import React from 'react'

function EtkinlikItem({name,id}) {
  return (
    <div className="etkinlikItem">
        <div></div>
        <h1>{name}</h1>
        <p>{id}</p>
      
    </div>
  )
}

export default EtkinlikItem
