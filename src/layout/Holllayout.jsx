import { Outlet } from 'react-router-dom'
import Header from '../components/Header';
import { Footer } from '../components/Footer';
const Holllayout = () => {
  return (
    <>
        <Header/>
         <main>
            <Outlet/>
        </main> 
        <Footer/>  
    </>
  )
}

export default Holllayout
