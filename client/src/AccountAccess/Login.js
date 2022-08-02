import { React, useState } from "react"
import { useHistory } from "react-router-dom"
import styled from 'styled-components'
import { login } from "../Redux/userSlice"
import { useDispatch } from "react-redux";

function Login({setCheckoutLogout, setHeaderText, setShowLogin }) {
  const history = useHistory()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState([])
  const dispatch = useDispatch()

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
    <LoginImage src="https://i.ibb.co/BjqVnrt/starry-logo.png" />
  </MainLoginCont>
 )
}

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
  height: 8em;
  margin-bottom: 5.5em;
`

const LoginForm = styled.form`
  display: grid;
  grid-auto-rows: 55px;
  height: 90%;
`

const LoginInput = styled.input`
  font-family: Josefin Sans, sans-serif;
  font-size: 16px;
  height: 4.5vh;
  outline: none;
  padding-left: 2%;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #ccc;
  transition: .5s;
  &&:hover {
    border: 1px solid black;
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
    border: 1px solid black;
}
`

const LoginImage = styled.img`
  height: 35em;
  width: 35em;
  border-left: 1px solid black;
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

export default Login