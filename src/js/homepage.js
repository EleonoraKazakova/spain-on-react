import React from "react";
import '../styles/styles.scss'
import Slider from './slider'

export default function HomePage() {
  return (
    <>
      <Slider />
      <div className='cities'>

        <div className='flip-card'>
          <div className='flip-card-inner'>
            <div className='flip-card-front'>
              <img src='src/photos/IMG_2068.JPG' alt='Barcelona' />
              <p>Barcelona</p>
            </div>
            <div className="flip-card-back">
              <img src='src/photos/IMG_2068.JPG' alt='Barcelona' />
              <p>Barcelona</p>
            </div>
          </div>
        </div>

        <div className='flip-card'>
          <div className='flip-card-inner'>
            <div className='flip-card-front'>
              <img src='src/photos/IMG_2445.JPG' alt='Tarragona' />
              <p>Tarragona</p>
            </div>
            <div className="flip-card-back">
              <img src='src/photos/IMG_2445.JPG' alt='Tarragona' />
              <p>Tarragona</p>
            </div>
          </div>
        </div>

        <div className='flip-card'>
          <div className='flip-card-inner'>
            <div className='flip-card-front'>
              <img src='src/photos/IMG_4145.JPG' alt='Montserrat' />
              <p>Montserrat</p>
            </div>
            <div className='flip-card-back'>
              <img src='src/photos/IMG_4145.JPG' alt='Montserrat' />
              <p>Montserrat</p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}