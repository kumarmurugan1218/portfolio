import React from 'react'
import resumeimg from "../assets/Resume.png";
export const Resume = () => {
  return (
   <section className='h-screen py-5 flex flex-col items-center bg-secondary text-primary md:flex-row' id='resume'>
        <div className='w-1/2 '>
            <img className='w-[300px] mx-auto md:w-[500px] md:h-[600px]' src={resumeimg}  alt="" />
        </div>
        <div className='md:w-1/2 flex flex-col space-y-5 items-center '>
            <h1 className='heading'>Resume</h1>
            <p className='sub-heading'>you can view my resume download</p>
            <a className='btn' href="/Murugan-1.pdf" download >download</a>
        </div>
   </section>
  )
}
