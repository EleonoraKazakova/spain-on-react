import React, { useState, useEffect } from "react";
import '../styles/styles.scss'

export default function Menu(){
  const [openMenu, setOpenMenu] = useState(false)
  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  return(
    <div>
      {openMenu ? <div className='modal'>
        <div className='modal-content'>
        <div>Menu</div>
        <div className='submit' onClick={toggleMenu}> Close </div>
        </div> 
        </div>: null
      }

      <div className='submit' onClick={toggleMenu}>
        Menu
      </div>

    </div>
  )
}