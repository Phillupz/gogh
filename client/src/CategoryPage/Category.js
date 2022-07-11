import {React, useEffect} from 'react'
import styled from 'styled-components'
import Nav from '../Navigation/Nav.js'
import Product from './Product.js'

const CategoryCont = styled.div`
height: 100%;
width: 100%;
color:black;
scroll-behavior: auto;
&::-webkit-scrollbar {
  display: none;
}
`
const HeaderImage = styled.img`
  height:50%;
  width: 100%;
`

const ProductCont = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  justify-content: center;
  margin-top: 3em;
  margin-bottom: 5em;
`

function Category({whiteNav, setWhiteNav, products, onLogout, user}){

  console.log(whiteNav)

  useEffect(() => {
    setWhiteNav(true)
  }, [])

  const productComponents = products.map((product) => {
    if (product.category === "T-Shirt") 
      return <Product product={product} />
  })

  return (
    <CategoryCont>
      <Nav whiteNav={whiteNav} onLogout={onLogout} user={user} />
      <HeaderImage src="https://i.ibb.co/j3Lt56g/header1.png"/>
      <ProductCont>
        {productComponents}
      </ProductCont>
    </CategoryCont>
  )
}

export default Category