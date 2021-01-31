import React from "react";
import ReactDOM from 'react-dom';
import '../styles/styles.scss'
import Slider from './slider'

function App() {
  return (
    <div className='content'>
      <div className='header'><h1 className='text'>Spain</h1></div>
      <div className='title'><p className='text'>Cities in Spain</p></div>
      <div className='main'>
        <Slider />
        <div className='cities'>
          
          <div className='flip-card'>
            <div className='flip-card-inner'>  
              <div className='flip-card-front'>
                <img src='src/photos/IMG_2068.JPG' alt='Barcelona'/>
                <p>Barcelona</p>
              </div>
              <div className="flip-card-back">
              <img src='src/photos/IMG_2068.JPG' alt='Barcelona'/>
                <p>Barcelona</p>
              </div>
            </div>
          </div>

          <div className='flip-card'>
            <div className='flip-card-inner'>  
              <div className='flip-card-front'>
                <img src='src/photos/IMG_2445.JPG' alt='Tarragona'/>
                <p>Tarragona</p>
              </div>
              <div className="flip-card-back">
              <img src='src/photos/IMG_2445.JPG' alt='Tarragona'/>
                <p>Tarragona</p>
              </div>
            </div>
          </div>

          <div className='flip-card'>
            <div className='flip-card-inner'>  
              <div className='flip-card-front'>
                <img src='src/photos/IMG_4145.JPG' alt='Montserrat'/>
                <p>Montserrat</p>
              </div>
              <div className='flip-card-back'>
                <img src='src/photos/IMG_4145.JPG' alt='Montserrat'/>
                <p>Montserrat</p>
              </div>
              </div>
          </div>

        </div>
      </div>
      <div className='footer'><p>Eleonora Kazakova</p><a href="https://www.linkedin.com/in/eleonora-kazakova-0841b07a/" rel="stylesheet">LinkedIn</a></div>
    </div>
  )
}

export default App;