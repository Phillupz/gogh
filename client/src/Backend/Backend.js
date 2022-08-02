import { React, useState } from 'react'
import styled from 'styled-components'
import LeftMenu from "./LeftMenu.js"
import DisplayArea from "./DisplayArea.js"
import BackNav from './BackNav.js'

function Backend({handleBackLogout, setUser, setProducts, products, whiteNav}) {
  const [selectedItem, setSelectedItem] = useState("Orders")

  function handleOpenMenu(){

  }
    return (
    <>
      <BackNav handleBackLogout={handleBackLogout} setUser ={setUser}/>
      <BackendCont>
        <InnerCont>
          <LeftMenu selectedItem={selectedItem} setSelectedItem={setSelectedItem} handleOpenMenu={handleOpenMenu}/>
          <DisplayArea products={products} setProducts={setProducts} selectedItem={selectedItem} />
        </InnerCont>
      </BackendCont>
    </>
    )
  }

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

export default Backend