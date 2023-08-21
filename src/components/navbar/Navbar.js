import React, { useState } from "react"
import "../../styles/styles.scss"
import { css } from "@emotion/react"
import { FaBars, FaXbox, FaXing } from 'react-icons/fa'
import { HiOutlineBarsArrowDown, HiOutlineBarsArrowUp } from 'heroicons-react';

const Navbar = ({ ClrStandard, NavbarData }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

   // Colors

   const StdClr = ClrStandard.map(clr => clr.colors)
   const clr0th = StdClr[0].toString()
   const clr1st = StdClr[1].toString()
   const clr2nd = StdClr[2].toString()
 
   // Navbar
 
   const NavbarLayout = NavbarData.pageBuilder.navbarLayout
 
   const NavbarLogo = NavbarLayout[0].navbar[1]
   const NavbarSideBtn = NavbarLogo.letsStart
   const NavbarRepeater = NavbarLogo.navbarRepeater
 
   const NavbarLogoSrc = NavbarLayout[0].navbar[0].logo
 
   const NavbarBtns = NavbarRepeater.map((btn, idx) => (
     <button
       key={idx}
       className={`mx-5 pb-3 color-white hover:border-b-4 hover:pt-1 outline-none ease-linear duration-100 ${menuOpen ? 'flex items-center justify-center w-full p-2 m-1 bg-teal-300 text-black' : 'md:flex md:d-flex md:flex-row'} text-white flex flex-row items-center`}
       style={{
         borderColor: clr2nd,
       }}
     >
       {btn.navbarButtons}
     </button>
   ))
 
   const rootStyle = {
     "--clr0th": clr0th,
     "--clr1st": clr1st,
     "--clr2nd": clr2nd,
   }
 
  return (
    <div className="w-full fixed top-0 bg-gray-800 bg-opacity-50 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 md:px-10 py-2 flex justify-between items-center">
        {/* Navbar Logo */}
        <img
          src={NavbarLogoSrc.sourceUrl}
          className="max-w-full mx-auto md:mx-0"
          alt={NavbarLogoSrc.altText}
        />

        {/* Menu Buttons */}
        {/* <div className={`md:flex md:flex-col ${menuOpen ? 'flex d-flex absolute right-0 bg-orange-300' : 'hidden'}`}> */}
        <div className={`md:flex ${menuOpen ? 'fixed top-20 right-0 flex d-flex flex-col items-center text-center' : 'hidden'} flex d-flex md:flex-row justify-center`}>
          {/* Vertical buttons */}
          {NavbarBtns}

          {/* "Let's talk" button */}
          <div className="md:mx-0 mx-auto mt-4 md:mt-0">
            <div className="gdd rounded-full" style={rootStyle}>
              <button
                className="rounded-full bg-black text-white p-3 pb-4 px-8 md:px-10 text-xl md:text-2xl"
                onClick={toggleMenu}
              >
                Let's talk
              </button>
            </div>
          </div>
        </div>

        {/* Menu Toggle Button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          {/* {menuOpen ? 'X' : 'Menu'} */}
          {/* {menuOpen ? 'X' : <FaLayoutNavbar/>}  */}
          {/* {menuOpen ? 'X' : <FaHome/>}  */}
          {/* {menuOpen ? 'X' : <FaBars/>}  */}
          {menuOpen ? <FaXbox/> : <FaBars/>} 
          {/* {menuOpen ? <HiOutlineBarsArrowUp /> : <HiOutlineBarsArrowDown />}  */}
          
        </button>
      </div>
    </div>
  )
}

export default Navbar