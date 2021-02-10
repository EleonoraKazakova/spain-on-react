import React, { useState, useRef } from "react";
import '../styles/styles.scss'
import arrowLeft from "../svg/back.svg";
import arrowRight from "../svg/next.svg";

export default function PhotoBlock() {
  /*const [addPhoto, setAddPhoto] = useState(false)
  const togglePhoto = () => {
    setAddPhoto(!addPhoto)
  }*/
  const [printedPhoto, setPrintedPhoto] = useState([])

  const [photo, setPhoto] = useState('')
  const savePhoto = (event) => {
    console.log(event.target)
    setPhoto(event.target.files[0]) //we take a path to the photo    
    setPrintedPhoto([...printedPhoto, event.target.files[0]])
  }

  const print = () => {
    setPrintedPhoto([...printedPhoto, photo])
  }

  const fileInput = useRef(null)

  const [currentPhoto, setCurrentPhoto] = useState(0)


  return (
    <div className='photobox'>
      <div onClick={() => fileInput.current.click()} className='custom-file-upload'>Upload your photos</div>

      <div>
        <input style={{ display: 'none' }}
          ref={fileInput}
          className='custom-file-upload'
          name='button' type="file" /*name="file"*/
          onChange={savePhoto}
          accept="image/png, image/jpeg" />



        <div > {printedPhoto.length <= 1 ? printedPhoto.map(el => <img src={URL.createObjectURL(el)} />)
          : <><img
            src={arrowLeft}
            className="arrow"
            alt=""
            onClick={() =>
              setCurrentPhoto(
                currentPhoto === 0 ? printedPhoto.length - 1 : currentPhoto - 1
              )
            }
            />

            {printedPhoto.map((el, i) => (
              <img src={URL.createObjectURL(el)}
                className={currentPhoto === i ? "photo" : "photo_hidden"}
              />
            ))}

            <img
              src={arrowRight}
              className="arrow"
              alt=""
              onClick={() =>
                setCurrentPhoto(
                  currentPhoto === printedPhoto.length - 1 ? 0 : currentPhoto + 1
                )
              }
            />
          </>


        }  </div>
      </div>




    </div>
  )
}