import React, { useState } from "react";
import '../styles/styles.scss';
import MenuItem from "./menuitem"

export default function Menu(){
  const [openMenu, setOpenMenu] = useState(false)
  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }
  
  return(
    <div>

      {openMenu ? <div className='modal'>
        <div className='modal-content'>
        <div className='menu'>Menu</div>
        <MenuItem name='Item 1' links={{'1.1 Photo-Block': '/photoblock', '1.2 Add text': '/addtext'}}/>
        <MenuItem name='Item 2' links={{'2.1': '/', '2.2': '/', '2.3': '/'}}/>
        <MenuItem name='Item 3' links={{'3.1': '/', '3.2': '/', '3.3': '/'}}/>

        <div className='submit' onClick={toggleMenu}> Close </div>
        </div> 
        </div>: null
      }      

      <div className='blockSubmit' onClick={toggleMenu}>
        Menu
      </div>

    </div>
  )
}

