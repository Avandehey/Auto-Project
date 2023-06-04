import { } from 'react'
import Navbar from "./components/navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import AllAutos from './pages/AllAutos'
import Register from './pages/Register'
import LoginPage from './pages/Signin'

function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/autolist" element={ <AllAutos /> } />
          <Route path="/signin" element={ <LoginPage /> } />
          <Route path="/register" element={ <Register /> } />
        </Routes>
      </div>
    </>
  )
}

export default App
