import React from "react";
import '../styles/styles.scss'
import Slider from './slider'
import Textarea from './textarea'
import FlipCard from './flipCard'
import barcelona from '../photos/IMG_2068.JPG'
import tarragona from '../photos/IMG_2445.JPG'
import montserrat from '../photos/IMG_4145.JPG'
import barcelonaBack from '../photos/IMG_2242.JPG'
import tarragonaBack from '../photos/IMG_2502.JPG'
import montserratBack from '../photos/IMG_4171.JPG'

export default function HomePage() {
  return (
    <div className='homepage'>
      <Slider />
      <div className='cities'>
        <FlipCard photo={barcelona} city='Barcelona' photoBack={barcelonaBack} />
        <FlipCard photo={tarragona} city='Tarragona' photoBack={tarragonaBack} />
        <FlipCard photo={montserrat} city='Montserrat' photoBack={montserratBack} />
      </div>      
            
    </div>
  )
}