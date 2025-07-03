import React from 'react'

export const Contact = () => {
  const details={
    email:"kumarmurugan1218",
    phone:9047111664
  }
  return (
    <section className='min-h-screen flex flex-col justify-center gap-y-4 text-center bg-primary text-white' id='contact'>
        <h1 className='heading'>Contact</h1>
        <p className='sub-heading'>if you want to discuss more in detail please contact me</p>
        <p className='sub-heading'><span className='font-bold text-white'>Email : </span>{details.email}@gmail.com</p>
        <p className='sub-heading'><span className='font-bold text-white'>phone : </span>{details.phone}</p>
    </section>
)
}
