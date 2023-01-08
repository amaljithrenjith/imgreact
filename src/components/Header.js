import React from 'react'
import { world } from "../dummy"



const header = () => {
  return (
    <div>
      <h1> component 1</h1>
      <img src='../images/fashion.jpg' alt="" />
      <img src={require('../Images/disaster1.jpg')} alt="" />
      <img src={require('../Images/sports.jpg').default} alt="" />
      <img src={require('../Images/sports.jpg')}  alt="" />

      { world.map(val =>{
        return(
          <div key={val.id}>
            <img src={val.cover} alt='' />

            <div>

            <h1>{val.title}</h1>

            </div>
          </div>
        )
      }
      )}


    </div>
  )
}

export default header