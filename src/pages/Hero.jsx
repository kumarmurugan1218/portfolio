
import { PiWhatsappLogo } from "react-icons/pi";
import { FaGithub,FaLinkedin  } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

export const Hero = () => {
  const config={
    name:"Murugan",
    role:"Frond End Developer"
  }
  return (
        <section className='min-h-screen w-full overflow-x-hidden flex flex-col items-center justify-center space-y-10 	bg-slate-900 md:flex-row' id='home'>
       
          <div className='md:w-1/2 text-center '>
            <div className="pt-5">
              <h1 className='text-xl md:text-4xl text-slate-200 font-hero-font'>Hi,<br/>I'm <span className="text-4xl  text-orange-500">{config.name}</span>
              <p className='text-2xl pt-4  '>I'm a {config.role}</p>
          </h1>  
            </div> 
            <div className='flex mt-5 space-x-5 justify-center'>
                <a href="https://web.whatsapp.com/" className='icons-hover text-slate-800/95'><PiWhatsappLogo size={70}/></a>
                <a href="https://github.com/dashboard" className='icons-hover text-slate-800/95'>< FaGithub size={70}/></a>
                <a href="https://mail.google.com/mail/u/0/#inbox" className='icons-hover text-slate-800/95'><  CgMail  size={70}/></a>
                <a href="https://www.linkedin.com/" className='icons-hover text-slate-800/95'><  FaLinkedin  size={70}/></a>
            </div>
          </div>  
           <div className=' w-full h-screen md:w-1/2 flex justify-center items-center '>
            <div className='md:mt-15  h-1/2 rounded-full md:h-[600px] md:w-[600px] animate-bounce duration-500 shadow-xl bg-white  p-10 '>
              <img className='h-full w-full rounded-full mx-auto object-cover '  src={`${import.meta.env.BASE_URL}/profile2.jpeg`} alt="home image" />      
            </div>
             
           </div>
            
        </section>
  )
}
