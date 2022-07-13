import { React, useEffect } from "react"
import styled from "styled-components"

const MenuCont = styled.div`
  display: grid;
  justify-items: center;
  width: 100%;
  padding: 2%;
  border-right: 1px solid #ccc;
`

const InnerMenuCont = styled.div`
  width: 100%;
  height: 100%%;
  display: grid;
  grid-auto-rows: 48px;
  padding: 1%;
  justify-items:center; 
`

const ItemContainer = styled.div`
  display: grid;
  align-items: center;
  align-content:center;
  grid-template-columns: 83% 15%;
  width: 96%;
  height: 40px;
  padding:1%;
  cursor: pointer;
  transition: .5s;
  background-color:  ${props => props.class === "selected" ? "#f5f5f5" : "background-color: #f5f5f5;"};
  &&:hover {
    ${props => props.class === "selected" ? "background-color: none" : "background-color: #f5f5f5;"}
  }
`

const MenuNameContainer = styled.p`
  font-size: 20px;
  font-weight: 100;
  width: 100%;
  text-align: left;
  display: block;
  margin-left:6px;
  color: black;
`

function LeftMenu({setSelectedItem, handleOpenMenu}) {

  const menu = [
    {
      id: 1,
      title: "Orders"
    },
    {
      id: 2,
      title: "Products"
    },
    {
      id: 3,
      title: "Reviews"
    }
  ]

  const menuComp = menu.map((menu) => {
    const id = menu.id
    const title = menu.title
    return (
      <ItemContainer onClick={() => setSelectedItem(title)}>
         <MenuNameContainer name={title}>{title}</MenuNameContainer>
      </ItemContainer>
    );
  })

  return (
    <MenuCont>
      <InnerMenuCont>{menuComp}</InnerMenuCont>
    </MenuCont>
  )
}

export default LeftMenu