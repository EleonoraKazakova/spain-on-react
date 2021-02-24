import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/styles.scss'

export default function Menu(){
  const [openMenu, setOpenMenu] = useState(false)
  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  const [openItemFirst, setOpenItemFirst] = useState(false)
  const toggleItemFirst = () => {
    setOpenItemFirst(!openItemFirst)
  }

  const [openItemSecond, setOpenItemSecond] = useState(false)
  const toggleItemSecond = () => {
    setOpenItemSecond(!openItemSecond)
  }

  const [openItemThird, setOpenItemThird] = useState(false)
  const toggleItemThird = () => {
    setOpenItemThird(!openItemThird)
  }

  return(
    <div>

      {openMenu ? <div className='modal'>
        <div className='modal-content'>
        <div className='menu'>Menu</div>
        <div onClick={toggleItemFirst} className='textItem'>Item 1</div>
        
        {openItemFirst ? <div  className='textSubItem'>
            <div><Link to='/photoblock'>Photo-Block</Link></div>
            <div>Item 1.1</div>
            <div>Item 1.2</div>
            <div>Item 1.3</div>
          </div> : null
        }

        <div onClick={toggleItemSecond} className='textItem'>Item 2</div>
        {openItemSecond ? <div className='textSubItem'>
            <div>Item 2.1</div>
            <div>Item 2.2</div>
            <div>Item 2.3</div>
          </div> : null
        }

        <div onClick={toggleItemThird} className='textItem'>Item 3</div>
        {openItemThird ? <div className='textSubItem'>
            <div>Item 3.1</div>
            <div>Item 3.2</div>
            <div>Item 3.3</div>
          </div> : null
        }

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

