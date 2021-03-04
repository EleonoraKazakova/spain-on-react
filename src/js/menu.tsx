import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/styles.scss';
import MenuItem from "./menuitem"

export default function Menu(){
  const [openMenu, setOpenMenu] = useState(false)
  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }
  
  const homePage = '/spain-on-react'

  return(
    <div>

      {openMenu ? <div className='modal'>
        <div className='modal-content'>
        <div className='menu'>Menu</div>
        <MenuItem name='Item 1' links={{'1.1 Photo-Block': homePage + '/photoblock', '1.2 Add text': homePage + '/addtext'}}/>
        <MenuItem name='Item 2' links={{'2.1': homePage + '/', '2.2': homePage + '/', '2.3': homePage + '/'}}/>
        
        <div className='MenuItem-title'><Link to='/spain-on-react/'>Homepage</Link></div>
        <div className='submitClose' onClick={toggleMenu}> Close </div>

        </div> 
        </div>: null
      }      

      <div className='blockSubmit' onClick={toggleMenu}>
        Menu
      </div>

    </div>
  )
}

