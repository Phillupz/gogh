import { React, useState } from "react"
import {useHistory} from "react-router-dom"
import styled from 'styled-components'

const MainLoginCont = styled.div`
width: 70%;
height: 36em;
display: grid;
grid-template-columns: 40% 60%;
margin-top: 4.5em;
margin-left:auto;
margin-right:auto;
position: relative;
border: 1.5px solid black;
border-radius: 7px;
`

const LoginCont = styled.div`
  height: 100%;
  width: 100%;
  margin-left:auto;
  margin-right:auto;
`

const CenterCont = styled.div`
  display:grid;
  position: relative;
  margin-top: 20px;
`

const Image = styled.img`
  margin-left:auto;
  margin-right:auto;
  padding: 10px;
  position: relative;
  height: 12em;
  top: 10px;
  margin-bottom: 10px;
`

const LoginForm = styled.form`
  display: grid;
  grid-auto-rows: 55px;
  height: 90%;
`

const LoginInput = styled.input`
  border: 1.5px solid black;
  border-radius: 10px;
  height: 4vh;
  outline: none;
  padding-left: 3%;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
`

const Button = styled.button`
  height: 30px;
  width: 30%;
  margin-left:auto;
  margin-right:auto;
  background-color:white;
  border: 1px solid black;
  border-radius: 10px;
  transition: .3s;
  &&:hover {
    background-color: #ffff00
  }
`

const LoginImage = styled.img`
margin-top: .05em;
height: 88.8%;
width: 100%;
border-top-right-radius: 7px;
border-bottom-right-radius: 7px;
`

const ButtonCont = styled.div`
  display: grid;
  grid-auto-rows: 45px;
`

const ErrorUl = styled.ul`
  margin-top: 1em;
  height: 2em;
  width: 100%;
  list-style-type: none;
`

const ErrorLi = styled.li`
  width: 100%;
  list-style-type: none;
  color: red;
  font-size: 12px;
`

function Login({ setShowLogin, setUser, setIsAuthenticated }) {
  const history = useHistory()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault()
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email, password}),
    }).then((r) => {
      if (r.ok) {
        r.json()
        .then((user) => {
          setUser(user)
          setIsAuthenticated(true)
        })
      } else {
        r.json().then((err) => setErrors(err.errors))
      }
    })
  }

  const errorComponents = errors.map((error) => {
    return <ErrorLi>{error}</ErrorLi>
  })

return (
  <MainLoginCont>
    <LoginCont>
      <CenterCont>
        <Image src="https://i.ibb.co/fXCYgsW/Busy-Bee-1.png"/>
        <LoginForm onSubmit={handleSubmit}>
          <LoginInput 
            type="text"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <LoginInput
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
          <ButtonCont>
            <Button>login</Button>
          </ButtonCont>
        </LoginForm>
        <Button onClick={() => setShowLogin(false)}>Signup</Button>
        <ErrorUl>{errorComponents}</ErrorUl>
      </CenterCont>
    </LoginCont>
    <LoginImage src="https://i.ibb.co/yV3SjcW/header-image.jpg" />
  </MainLoginCont>
 )
}

export default Login