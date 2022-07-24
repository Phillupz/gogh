import { React, useState } from 'react'
import styled from 'styled-components'
import LeftMenu from "./LeftMenu.js"
import DisplayArea from "./DisplayArea.js"
import BackNav from './BackNav.js'

const BackendCont = styled.div`
  position: absolute;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
  margin-top: 4em;
  display: grid;
  width 100%;
  padding: 1%;
  `

  const InnerCont = styled.div`
  height: 80vh;
  display: grid;
  justify-content: center;
  grid-template-columns: 25% 74%;
  `


function Backend({setUser, products, whiteNav}) {
  const [selectedItem, setSelectedItem] = useState("Orders")

  function handleOpenMenu(){

  }
    return (
    <>
      <BackNav setUser ={setUser}/>
      <BackendCont>
        <InnerCont>
          <LeftMenu selectedItem={selectedItem} setSelectedItem={setSelectedItem} handleOpenMenu={handleOpenMenu}/>
          <DisplayArea selectedItem={selectedItem} />
        </InnerCont>
      </BackendCont>
    </>
    )
  }

export default Backend