import React from 'react'

const header = () => {
  return (
    <div>
      <h1> component 1</h1>
      <img src='../images/fashion.jpg' alt="" />
      <img src={require('../Images/disaster1.jpg')} alt="" />
      <img src={require('../Images/sports.jpg').default} alt="" />
      <img src={require('../Images/sports.jpg')}  alt="" />


    </div>
  )
}

export default header