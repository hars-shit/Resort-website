import { Route, Routes } from 'react-router-dom'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import All from './Pages/All'
import Contact from './Pages/Contact/Contact'

const App = () => {
  return (
   <>
    <Header />
    <Routes>
     <Route path='/' element={<All />}/>
     <Route path="/contact" element={<Contact />}/>
    </Routes>
    <Footer />
   </>
  )
}

export default App
