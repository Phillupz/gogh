import { React, useState } from "react"
import Login from './Login.js'
import Signup from './Signup.js'

function LoginForm({setHeaderText, setCheckoutLogout, setUser, setIsAuthenticated}){
  const [showLogin, setShowLogin] = useState(true)

  return (
    <>
     {showLogin ? (  
        <Login setHeaderText={setHeaderText} setCheckoutLogout={setCheckoutLogout} setIsAuthenticated={setIsAuthenticated} setUser={setUser} setShowLogin={setShowLogin} />
      ) : (
        <Signup setHeaderText={setHeaderText} setCheckoutLogout={setCheckoutLogout} setIsAuthenticated={setIsAuthenticated} setUser={setUser} setShowLogin={setShowLogin} />
      )} 
    </>
  )
}

export default LoginForm