import {React, useState }from 'react'
import styled from 'styled-components'

const ProductCont = styled.div`
  height: 5em;
  width: 100%;
  position: relative;
  display: grid;
  justify-items:center;
  align-content:center;
  border: 1px solid transparent;
  transition: .5s;
  &&:hover {
    border: 1px solid #ccc;
  }
`

const InnerProductCont = styled.div`
  height: 4.5em;
  width: 99%;
  display: grid;
  align-content:center;
  grid-template-columns: 10% 90%;
  padding:1%;
  cursor: pointer;
  top: 1px;
  right: 1px;
`

const Image = styled.img`
  height: 70px;
  width: 70px;
`

const InfoCont =styled.div`
  display: grid;
  grid-template-columns: 90% 10% 
`

const ProductName = styled.p`
  text-align:Left;
  display: grid;
  align-items: center;
  color:black;
`

const ProductPrice = styled.p`
  display: grid;
  justify-content:center;
  align-items: center;
  color:black;
  border-left: 1px solid #eee
`


const StockText = styled.div`
 color: black;
 font-size:16px;
`

function ProductComp({productVisible, setProductVisible, product}) {

  return (
    <ProductCont onClick={() => setProductVisible(!productVisible)}> 
      <InnerProductCont>
        <Image src=''/>
        <InfoCont>
            <ProductName></ProductName>
            <ProductPrice></ProductPrice>
        </InfoCont>
      </InnerProductCont>
    </ProductCont>
  )
}

export default ProductComp