import React from "react";
import '../styles/styles.scss'
import Slider from './slider'
import Textarea from './textarea'
import FlipCard from './flipCard'
import barcelona from '../photos/IMG_2068.JPG'
import tarragona from '../photos/IMG_2445.JPG'
import montserrat from '../photos/IMG_4145.JPG'

export default function HomePage() {
  return (
    <div className='homepage'>
      <Slider />
      <div className='cities'>
        <FlipCard photo={barcelona} city='Barcelona' />
        <FlipCard photo={tarragona} city='Tarragona' />
        <FlipCard photo={montserrat} city='Montserrat' />
      </div>      
            
    </div>
  )
}