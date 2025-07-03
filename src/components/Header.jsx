import React from 'react'
// ✅ Correct usage
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { useState } from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    const [menu,setMenu]=useState(false);
  return (
    <header className='flex  justify-between p-5 bg-secondary sticky top-0 left-0 z-10'>
      
        <a className=' text-white font-bold text-xl' href="#">Murugan</a>
        <nav className='hidden md:block'>
            <ul className='flex text-white'>
            <li><Link className='links-hover' to="/">Home</Link></li>
            <li><Link className='links-hover' to="/About">About</Link></li>
            <li><Link className='links-hover' to="/Projects">Projects</Link></li>
            <li><Link className='links-hover' to="/Resume">Resume</Link></li>
            <li><Link className='links-hover' to="/Contact">Contact</Link></li>
        </ul>
        </nav>

        {menu&&<nav className='block md:hidden '>
        <ul onClick={()=>setMenu(!menu)}className='text-white mobile-nav'>
            <li><Link className='links-hover' to="/">Home</Link></li>
            <li><Link className='links-hover' to="/About">About</Link></li>
            <li><Link className='links-hover' to="/Projects">Projects</Link></li>
            <li><Link className='links-hover' to="/Resume">Resume</Link></li>
            <li><Link className='links-hover' to="/Contact">Contact</Link></li>
        </ul>
        </nav>}

      <button className='block md:hidden' onClick={()=>setMenu(!menu)} >
        <AcademicCapIcon className='h-5 w-10 text-white'/>
      </button>
    </header>
  )
}

export default Header
