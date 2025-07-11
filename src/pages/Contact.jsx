
import { PiWhatsappLogo } from "react-icons/pi";
import { FaSquarePhone } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { BiLogoGmail } from "react-icons/bi";
export const Contact = () => {
  const details={
    email:"kumarmurugan1218",
    phone:9047111664
  }
  return (
    <section className='min-h-screen w-full flex flex-col justify-center gap-y-4 text-center bg-primary text-white md:space-y-5' id='contact'>
      <div className="px-5 ">
        <h1 className='heading text-2xl md:text-5xl'>Contact</h1>
        <p className='text-sm md:text-2xl md:mt-10'>if you want to discuss more in detail please contact me</p>
        
      </div>
          <div className='flex mt-5 space-x-5 justify-center'>
                        <a href="https://web.whatsapp.com/" className='icons-hover '><PiWhatsappLogo size={60}/></a>
                        <a href="https://github.com/dashboard" className='icons-hover'>< FaGithub size={60}/></a>
                        <a href="https://mail.google.com/mail/u/0/#inbox" className='icons-hover'><  CgMail  size={60}/></a>
                        <a href="https://www.linkedin.com/" className='icons-hover '><  FaLinkedin  size={60}/></a>
          </div>
        <div className="flex flex-col gap-y-5 md:flex-row justify-center items-center  mx-auto  md:w-[900px] md:gap-x-5">
          <div className="border w-full px-5  py-5 rounded md:space-y-5 md:w-1/2 md:px-2">
            <h2 className="text-sm md:text-3xl"><BiLogoGmail  className="hover:bg-white hover:text-black duration-300 rounded-md"/>Email :</h2>
            <span className="text-[17px] md:text-xl">kumarmurugn1218@gmail.com</span>
          </div>
          <div className="border  w-full px-5 py-5 rounded md:space-y-5 md:w-1/2 ">
            <h2 className="text-sm md:text-3xl"><FaSquarePhone className=" hover:bg-white hover:text-black duration-300 rounded-md"/>Phone :</h2>
            <span className="text-[17px] md:text-xl" >9047111664</span>
          </div>
        </div>
    </section>
)
}
