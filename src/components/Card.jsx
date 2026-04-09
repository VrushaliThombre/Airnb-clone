import React from 'react'

export default function Card(props) {
  return (
    <div className='card'>
        <img
        src={props.img}
        loading='lazy'
        alt='house'
        />
        <h3>{props.title}</h3>
        <p>{props.price}</p>
    </div>
  )
}
