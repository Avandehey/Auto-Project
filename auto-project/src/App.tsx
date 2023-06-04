import { } from 'react'
import Navbar from "./components/navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/Signin"
import AllAutos from './pages/AllAutos'

function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/autolist" element={ <AllAutos /> } />
          <Route path="/signin" element={ <SignIn /> } />
        </Routes>
      </div>
    </>
  )
}

export default App
