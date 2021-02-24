import React from "react";
import '../styles/styles.scss'
import Slider from './slider'
import Textarea from './textarea'
import FlipCard from './flipCard'

export default function HomePage() {
  return (
    <div className='homepage'>
      <Slider />
      <div className='cities'>
        <FlipCard photo='src/photos/IMG_2068.JPG' city='Barcelona' />
        <FlipCard photo='src/photos/IMG_2445.JPG' city='Tarragona' />
        <FlipCard photo='src/photos/IMG_4145.JPG' city='Montserrat' />
      </div>

      <div className='textarea'> <Textarea /> </div>
      
            
    </div>
  )
}