
export const About = () => {
  const about={
    p1:"Hi, I'm Murugan S — a passionate and detail-oriented Full-Stack Developer with a strong foundation in HTML, CSS, JavaScript, React, and Tailwind CSS. I specialize in building responsive, user-friendly web applications with clean and maintainable code.",
    p2:"I enjoy working with React hooks like useState, useEffect, and useContext, and I’ve built multiple small projects, including a weather app integrated with APIs. I’m constantly learning and exploring new tools to improve my skills and deliver better user experiences.",
    p3:"My goal is to grow as a developer, contribute to real-world projects, and create digital solutions that make a difference."
  }

  return (
    <section className='min-h-screen w-full flex flex-col gap-y-5 justify-center items-center py-5  gap-x-5 bg-secondary md:flex-row ' id='about'>
        <div className=' px-5 h-1/2 w-full  md:h-screen md:w-1/2 flex justify-center items-center'>
          <img src={`${import.meta.env.BASE_URL}/profile.jpeg`} alt="" className=' md:w-1/2 object-cover p-3 shadow-xl rounded bg-white' />
        </div>
          <div className=' px-5 md:w-1/2 md:h-1/2  flex flex-col  text-white md:px-20 '>
                <h1 className='heading text-center'>About me</h1>
                <div>
                    <p className='about-content'>{about.p1}</p>
                    <p className='about-content'>{about.p2}</p>
                    <p className='about-content'>{about.p3}</p>
                 </div>
          </div>
         
       
    </section>
  )
}
