import React from 'react'
import Profile from '../assets/my.jpg'
import { PiWhatsappLogo } from "react-icons/pi";
import { FaGithub } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

export const Hero = () => {
  const config={
    name:"Murugan",
    role:"Full-stack developer"
  }
  return (
        <section className='min-h-screen flex flex-col items-center justify-center space-y-10 py-5  	bg-slate-900 md:flex-row' id='home'>
          <div className='md:w-1/2 text-center'>
            <h1 className=' text-4xl text-slate-200 font-hero-font'>Hi,<br/>I'm {config.name}
            <p className='text-2xl'>I'm a {config.role}</p>
            </h1>   
            <div className='flex mt-5 space-x-5 justify-center'>
                <a href="https://web.whatsapp.com/" className='icons-hover text-slate-800/95'><PiWhatsappLogo size={50}/></a>
                <a href="#" className='icons-hover text-slate-800/95'>< FaGithub size={50}/></a>
                <a href="#" className='icons-hover text-slate-800/95'><  CgMail  size={50}/></a>
            </div>
          </div>  
           <div className='md:w-1/2 flex justify-center  '>
            <div className='mt-15 h-[500px] w-[500px] animate-bounce duration-500 '>
              <img className='h-full w-full rounded-full object-cover object-center mx-auto '  src={Profile} alt="home image" />      
            </div>
             
           </div>
            
        </section>
  )
}
