import { React, useState } from "react"
import { useHistory } from "react-router-dom"
import styled from 'styled-components'
import { useDispatch} from "react-redux"
import { login } from "../Redux/userSlice"

function Signup({setCheckoutLogout, setHeaderText, setIsAuthenticated, setShowLogin}) {
  const history = useHistory()
  const [errors, setErrors] = useState([])
  const dispatch = useDispatch()
  const [userSignupData, setUserSignupData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    password_confirmation: "",
  })

  function handleChange(e) {
    const name = e.target.name
    let value = e.target.value
    setUserSignupData({
      ...FormData,
      [name]: value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(userSignupData),
    })
    .then((r) => {
      if (r.ok) {
        r.json()
        .then((user) => {
          dispatch(login(user))
          setHeaderText(`Hey, ${user.first}!`)
          setCheckoutLogout(true)
          // setIsAuthenticated(true)
          history.push("/shop")
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
          <NameCollectionCont>
          <NameInput 
              type="text"
              name="firstName"
              id="first-name"
              placeholder="First Name"
              value={userSignupData.first_name}
              onChange={handleChange}
            />
            <NameInput 
              type="text"
              name="LastName"
              id="Last-name"
              placeholder="Last Name"
              value={userSignupData.last_name}
              onChange={handleChange}
            />
          </NameCollectionCont>
          <LoginInput 
            type="text"
            name="username"
            id="username"
            placeholder="Email"
            value={userSignupData.username}
            onChange={handleChange}
          />
          <LoginInput
            type="password"
            name='password'
            id="password"
            placeholder="Password"
            value={userSignupData.password}
            onChange={handleChange} 
          />
          <LoginInput
            type="password"
            name="passwordConfirmation"
            id="password_confirmation"
            placeholder="Confirm Password"
            value={userSignupData.password_confirmation}
            onChange={handleChange} 
          />
          <ButtonCont>
            <Button>Create</Button>
          </ButtonCont>
        </LoginForm>
        <Button onClick={() => setShowLogin(true)}>Login</Button>
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
  margin-left: auto;
  margin-right: auto;
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
  margin-bottom: 2em;
`

const LoginForm = styled.form`
  display: grid;
  grid-auto-rows: 55px;
  height: 90%;
`

const NameCollectionCont = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  margin-left: auto;
  margin-right: auto;
  width: 78%;
`

const NameInput = styled.input`
  font-family: Josefin Sans, sans-serif;
  font-size: 16px;
  height: 4.5vh;
  outline: none;
  padding-left: 2%;
  width: 79%;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #ccc;
  transition: .3s;
  &&:hover {
    border: 1px solid black;
}
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
  transition: .3s;
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

export default Signup