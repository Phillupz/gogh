import { React, useState } from "react"
import { useHistory, useRouteMatch } from "react-router-dom"
import styled from 'styled-components'
import { login } from "../Redux/userSlice"
import { useDispatch, useSelector } from "react-redux";

const MainLoginCont = styled.div`
  width: 70em;
  height: 35em;
  display: grid;
  align-content: center;
  grid-template-columns: 50% 50%;
  margin-top: 4.5em;
  margin-left:auto;
  margin-right:auto;
  position: relative;
  border: 1.5px solid black;
`

const LoginCont = styled.div`
  height: 100%;
  width: 100%;
`

const CenterCont = styled.div`
  display:grid;
  position: relative;
  margin-top: 3em;
`

const Image = styled.img`
margin-left:auto;
margin-right:auto;
padding: 10px;
height: 12em;
top: 10px;

`

const LoginForm = styled.form`
  display: grid;
  grid-auto-rows: 55px;
  height: 90%;
`

const LoginInput = styled.input`
border: 1.5px solid #ccc;
font-family: Josefin Sans, sans-serif;
font-size: 16px;
height: 4.5vh;
outline: none;
padding-left: 2%;
width: 70%;
margin-left: auto;
margin-right: auto;
&&:hover {
  background-color: #eee
}
`

const Button = styled.button`
height: 30px;
width: 20%;
margin-left:auto;
margin-right:auto;
background-color:white;
font-family: Josefin Sans, sans-serif;
border: 1px solid #ccc;
transition: .3s;
&&:hover {
  background-color: #eee
}
`

const LoginImage = styled.img`
height: 35em;
width: 35em;
border: 1px solid black;
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

function Login({setCheckoutLogout, setHeaderText, setIsAuthenticated, setShowLogin }) {
  const history = useHistory()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState([])
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.value)
  const match = useRouteMatch()

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
          dispatch(login(user))
          setHeaderText(`Hey, ${user.first}!`)
          setCheckoutLogout(true)
          history.goBack()
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
        <Image src="https://i.ibb.co/4sQCvDG/logo2.png"/>
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
    <LoginImage src="https://i.ibb.co/wQyn7Lx/starry-night.png" />
  </MainLoginCont>
 )
}

export default Login