import React, { useEffect } from 'react'
import styled from 'styled-components'
import Nav from '../Navigation/Nav.js'

const ProductWrapper = styled.div`
background-color:blue;
width: 70%;
margin:auto;
`

const ProductCont = styled.div`

`

const ProductImageCont = styled.div`

`

const ProductImage = styled.img`

`

const ProductDescCont = styled.div`

`

const ProductDescription = styled.p`
  height: 100px;
  width: 100px;
`

const BuyButton = styled.div`

`

function Product({whiteNav, setWhiteNav}){
  
  useEffect(() => {
    setWhiteNav={}
  })

  return (
    <>
      <Nav />
      <ProductWrapper>
        <ProductCont>
          <ProductImageCont>
            <ProductImage />
            <ProductDescCont>
              <ProductDescription>
                  Hi!
              </ProductDescription>
              <BuyButton></BuyButton>
            </ProductDescCont>
          </ProductImageCont>
        </ProductCont>
      </ProductWrapper>
    </>
  )
}

export default Product