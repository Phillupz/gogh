import { React, useState } from "react"
import styled from 'styled-components'
import Login from './Login.js'
import Signup from './Signup.js'

function LoginForm({setUser, setIsAuthenticated}){
  const [showLogin, setShowLogin] = useState(true)

  return (
    <>
     {showLogin ? (  
        <Login setIsAuthenticated={setIsAuthenticated} setUser={setUser} setShowLogin={setShowLogin} />
      ) : (
        <Signup setIsAuthenticated={setIsAuthenticated} setUser={setUser} setShowLogin={setShowLogin} />
      )} 
    </>
  )
}

export default LoginForm