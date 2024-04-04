import { Route, Routes } from 'react-router-dom'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import All from './Pages/All'
import Contact from './Pages/Contact/Contact'
import Galary from './Pages/Galary/Galary'
import VideoGallery from './Pages/Galary/VideoGalary'

const App = () => {
  return (
   <>
    <Header />
    <Routes>
     <Route path='/' element={<All />}/>
     <Route path="/contact" element={<Contact />}/>
     <Route path='/galary' element={<Galary />}/>
     <Route path='/video' element={<VideoGallery />}/>
    </Routes>
    <Footer />
   </>
  )
}

export default App
