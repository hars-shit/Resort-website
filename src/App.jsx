import { Route, Routes } from 'react-router-dom'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import All from './Pages/All'

const App = () => {
  return (
   <>
    <Header />
    <Routes>
     <Route path='/' element={<All />}/>
    </Routes>
    <Footer />
   </>
  )
}

export default App
