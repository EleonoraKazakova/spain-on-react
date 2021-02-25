import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/menuitem.scss'

type MenuItemProps = {
  name: string,
  links: {
    [key: string]: string
  }
}

export default function MenuItem(props: MenuItemProps) {
  const [openItem, setOpenItem] = useState(false)
  const toggleItem = () => {
    setOpenItem(!openItem)
  }

  return (
    <>
      <div onClick={toggleItem} className='MenuItem-title'>{props.name}</div>

      {
        openItem
          ? <div className='MenuItem-item'>
            {Object.entries(props.links).map(item => <Link to={item[1]}> {item[0]} </Link>)}
          </div>
          : null
      }

    </>
  )
}