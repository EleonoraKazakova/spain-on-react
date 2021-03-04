import React from "react";
import '../styles/styles.scss'

type FlipCardProps = {
  city: string,
  photo: string
}

export default function FlipCard(props: FlipCardProps) {

  return (
    <div className='flip-card'>
      <div className='flip-card-inner'>
        <div className='flip-card-front'>
          <img  className='img' src={props.photo} alt={props.city} />
          <p>{props.city}</p>
        </div>
        <div className="flip-card-back">
          <img className='img' src={props.photo} alt={props.city} />
          <p>{props.city}</p>
        </div>
      </div>
    </div>
  )
}