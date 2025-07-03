import React from 'react'
import weather from "../assets/weather.png"
import movie from "../assets/movie.png"

export const Projects = () => {
  
  return (
   <section className='min-h-screen py-5  bg-primary flex flex-col gap-y-5 items-center' id='projects'>
        <div className=''>
            <h1 className='heading text-center'>Projects</h1>
        </div>
        <div className='flex flex-col space-y-9 items-center justify-center md:flex-row'>
            <div className='relative'>
                <img src={weather} className='h-[400px] object-cover' alt="" />
                <div className='project-content'>
                    <p className='text-center leading-20'>murugan</p>
                </div>
            </div>
               <div className='relative'>
                <img src={weather} className='h-[400px] object-cover' alt="" />
                <div className='project-content'>
                    <p className='text-center leading-20'>murugan</p>
                </div>
            </div>
               <div className='relative'>
                <img src={weather} className='h-[400px] object-cover' alt="" />
                <div className='project-content'>
                    <p className='text-center leading-20'>murugan</p>
                </div>
            </div>
            
        </div>
   </section>
  )
}
