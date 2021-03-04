import React, { useState, useEffect } from "react";
import '../styles/styles.scss'
import photoFirst from '../photos/IMG_2502_2.JPG'
import photoSecond from '../photos/IMG_2413_2.JPG'
import photoThird from '../photos/IMG_2644_2.JPG'


function Slider() {
  
  const photos = [
    photoFirst,
    photoSecond,
    photoThird
  ]
  
  const [photoIndex, setPhotoIndex] = useState(0) 
  
  useEffect( () => {
    setInterval( () => {
      setPhotoIndex( prev => (prev + 1) % photos.length ) 
    }, 1000)
  }, [])

  return (
    <div className='citiesSlider'>
      
      <img 
        src={photos[photoIndex]}
        className='slider'
        alt=''
      /> 
      
    </div>
  )
}

export default Slider