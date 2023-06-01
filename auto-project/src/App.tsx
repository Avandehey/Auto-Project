import { } from 'react'
import Dashboard from './components/Dashboard'
import Navbar from "./components/navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/Signin"

function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/autolist" element={ <Dashboard /> } />
          <Route path="/signin" element={ <SignIn /> } />
        </Routes>
      </div>
    </>
  )
}

export default App
