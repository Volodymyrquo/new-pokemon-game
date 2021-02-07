import React from 'react'
import cn from 'classnames'
import s from './Navbar.module.css'
const Navbar = () => {
    return (
        <nav id="navbar">
        <div className={s.navWrapper}>
          <p className={s.brand}>
            LOGO
          </p>
          <a className={cn(s.menuButton, s.active) }>
            <span />
          </a>
        </div>
      </nav>
    )
}

export default Navbar
