import React, { useState, useEffect } from "react";
import '../styles/styles.scss'
import arrowLeft from "../svg/back.svg";
import arrowRight from "../svg/next.svg";

export default function PhotoBlock() {
  const [addPhoto, setAddPhoto] = useState(false)
  const togglePhoto = () => {
    setAddPhoto(!addPhoto)
  }

  const [photo, setPhoto] = useState('')
  const savePhoto = (event) => {
    console.log(event.target)
    setPhoto( event.target.files[0] ) //we take a path to the photo    
  }  

  const [printedPhoto, setPrintedPhoto] = useState([])
  const print = () => {
    setPrintedPhoto([...printedPhoto, photo])
  }

  
  return (
    <div className='cities'>
      { addPhoto ? <div>
        <input type="file" name="file" onChange={savePhoto} accept="image/png, image/jpeg"/> 
        <div onClick={print}>Enter</div>
        
        <div > {printedPhoto.map(el=> <img src={URL.createObjectURL(el)} />)}  </div>
        </div> : null }

      <div onClick={togglePhoto}>Upload your photos</div>
        
    </div>
  )
}