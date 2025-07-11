
import { Hero } from './pages/Hero';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Resume } from './pages/Resume';
import { Contact } from './pages/Contact';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Holllayout from './layout/Holllayout';
function App() {
  console.log()

  return (
    <>
    <BrowserRouter basename={`${import.meta.env.BASE_URL}`}>
        <Routes>
          <Route path='/' element={<Holllayout/>}>
            <Route index element={<Hero/>}/>
            <Route path='About' element={<About/>}/>
            <Route path='Projects' element={<Projects/>}/>
            <Route path='Resume' element={<Resume/>}/>
            <Route path='Contact' element={<Contact/>}/>
          </Route>
        </Routes>
    </BrowserRouter>

    
    </>
  )
}

export default App
