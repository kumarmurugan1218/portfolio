
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';
import {NavLink} from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { PiNewspaperClippingLight } from "react-icons/pi";
import { GrProjects } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
const Header = () => {
    const [menu,setMenu]=useState(false);
  return (
    <header className='flex w-full  justify-between p-5 bg-slate-800/90 sticky top-0 left-0 z-10'>
      
        <a className=' text-white font-bold text-xl' href="#">Murugan</a>
        <nav className='hidden md:block'>
            <ul className='flex text-white'>
            <li><NavLink className='links-hover' to="/"><IoHomeOutline className="ml-3"/>Home</NavLink></li>
            <li><NavLink className='links-hover' to="/About"><FaUserCircle className="ml-4"/>About</NavLink></li>
            <li><NavLink className='links-hover' to="/Projects"><GrProjects className="ml-4" />Projects</NavLink></li>
            <li><NavLink className='links-hover' to="/Resume"><PiNewspaperClippingLight className="ml-4"/>Resume</NavLink></li>
            <li><NavLink className='links-hover' to="/Contact"><IoMdContact className="ml-4"/>Contact</NavLink></li>
        </ul>
        </nav>

        {menu&&<nav className='block md:hidden '>
        <ul onClick={()=>setMenu(!menu)}className='text-white mobile-nav '>
           <li><NavLink className='links-hover' to="/">Home</NavLink></li>
            <li><NavLink className='links-hover' to="/About">About</NavLink></li>
            <li><NavLink className='links-hover' to="/Projects">Projects</NavLink></li>
            <li><NavLink className='links-hover' to="/Resume">Resume</NavLink></li>
            <li><NavLink className='links-hover' to="/Contact">Contact</NavLink></li>
        </ul>
        </nav>}

      <button className='block md:hidden' onClick={()=>setMenu(!menu)} >
        <IoMenu className='h-5 w-10 text-white'/>
      </button>
    </header>
  )
}

export default Header
