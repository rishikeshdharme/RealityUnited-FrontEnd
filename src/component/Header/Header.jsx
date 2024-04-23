import React, { useState } from 'react'
import {BiMenuAltRight} from 'react-icons/bi'
import './Header.css'
import OutsideClickHandler from 'react-outside-click-handler'
const Header = () => {
  const [menuOpened,setMenuOpened] = useState(false)

  const getMenuStyles = (menuOpened) => {
    if(document.documentElement.clientWidth <= 800){
      return{right: !menuOpened && "-100%"}
    }
  }
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./reality101.png" alt="logo" width={200} />

        <OutsideClickHandler 
        onOutsideClick ={()=>{
            setMenuOpened(false)
        }}>
        <div className="flexCenter h-menu"
        style={getMenuStyles(menuOpened)}>
          <a href="">Residencies</a>
          <a href="">Our Value</a>
          <a href="">Contact us</a>
          <a href="">Get Started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={() =>setMenuOpened((prev) =>!prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
}

export default Header
