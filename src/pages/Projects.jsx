

export const Projects = () => {
  
  return (
   <section className='min-h-screen w-full  py-5  bg-primary flex flex-col gap-y-5 items-center' id='projects'>
        <div className=''>
            <h1 className='heading text-center'>Projects</h1>
        </div>
        <div className='grid gap-y-5  px-5 md:grid-cols-2 md:gap-x-15 '>
             <a href="https://kumarmurugan1218.github.io/Ecommerce2/" className='relative  shadow-2xl border-5 border-white rounded'>
              <img src={`${import.meta.env.BASE_URL}/ecommerce.webp`} className='w-full md:h-[400px] object-cover object-left-top p-5 opacity-30 hover:opacity-100 duration-500' alt="" />
             
            </a>
            <a href="https://kumarmurugan1218.github.io/Todo/" className='relative shadow-2xl border-5 border-white rounded '>
              <img src={`${import.meta.env.BASE_URL}/todo2.jpg`} className='p-5 md:w-full md:h-[400px] object-cover opacity-30 hover:opacity-100 duration-500' alt="" />
              
            </a>
            <a href="https://kumarmurugan1218.github.io/studyGroup/" className='relative shadow-2xl border-5 border-white rounded '>
              <img src={`${import.meta.env.BASE_URL}/study.webp`} className='p-5 md:w-full md:h-[400px] object-cover opacity-30 hover:opacity-100 duration-500' alt="" />
                 
            </a>
            
        </div>
   </section>
  )
}
