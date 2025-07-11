import { PiNewspaperClippingLight } from "react-icons/pi";
export const Resume = () => {
  return (
   <section className='min-h-screen py-5 w-full flex flex-col gap-y-5 items-center bg-secondary text-primary md:flex-row' id='resume'>
        <div className='w-full px-5 md:w-1/2 '>
            <img className='w-full border-5 border-white mx-auto md:w-[500px] md:h-[600px] md:mx-auto' src={`${import.meta.env.BASE_URL}/Resume.png`}  alt="" />
        </div>
        <div className='w-full px-10 md:w-1/2 flex flex-col space-y-5 items-center '>
            <h1 className='heading '>Resume</h1>
            <p className='sub-heading'>you can view my resume download...</p>
            <a className='btn flex items-center gap-x-3 justify-center' href="file:///C:/Users/Murugan/OneDrive/Desktop/resume.pdf" download ><PiNewspaperClippingLight />download</a>
        </div>
   </section>
  )
}
