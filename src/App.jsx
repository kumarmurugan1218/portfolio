import { useState } from 'react'
import Header from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Projects' element={<Projects/>}/>
          <Route path='/Resume' element={<Resume/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
    </BrowserRouter>

    
    </>
  )
}

export default App
