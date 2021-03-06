import {React, useState, useEffect} from 'react'
import styled from 'styled-components'
import Nav from '../Navigation/Nav.js'
import Product from './Product.js'
import Menu from './Menu.js'
import {FiSearch} from 'react-icons/fi'
import { useSelector, useDispatch } from "react-redux";
import { login } from "../Redux/userSlice"

function Category({hideCheckout, headerText, setHeaderText, checkoutLogout, setCheckoutLogout, handleLogout, handleCheckout, handleItemDelete, setSubTotal, subTotal, handleAdd, handleSubtract, cart, setCart, isPaneOpen, setIsPaneOpen, handleProductClick, setCategory, category, whiteNav, setWhiteNav, products, onLogout}){
  const [categoryFilter, setCategoryFilter] = useState("All")
  const [search, setSearch] = useState("")
  const [azSort, setAzSort] = useState(false)
  const [lowHighSort, setLowHighSort] = useState(false)
  const [switchSort, setSwitchSort] = useState(false)
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.value)

  useEffect(() => {
    if (!user || user.length === 0) {
      return setCheckoutLogout(false)
    }
   }, [])

  // useEffect(() => {
  //   if (user) {
  //    fetch(`/users/${user.id}/cart_items`)
  //    .then((r) => r.json())
  //    .then((data) => {
  //      setSubTotal(data.reduce((total, item)=>total + (item.product.price * item.quantity),0))
  //    })
  //   } 
  //  }, [])

  useEffect(() => {
    setIsPaneOpen(false)
    fetch('/authorize_user')
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          dispatch(login(user))
          setSubTotal(0)
          setHeaderText(`Hey, ${user.first}`)
          fetch(`/users/${user.id}/cart_items`)
          .then((r) => r.json())
          .then((data) => {
            setCheckoutLogout(true)
            setCart(data.reverse())
            // setSubTotal(data.reduce((total, item)=>total + (item.product.price * item.quantity),0))

          })
        })
      } else {
        setCheckoutLogout(false)
      }
    })
  }, [])

  useEffect(() => {
    switch(category) {
      case "T-Shirts":
        return setWhiteNav(true)
      case "Crewnecks":
        return setWhiteNav(true)
      case "Hoodies":
        return setWhiteNav(true)
      case "Slides":
        return setWhiteNav(true)
      case "Bags":
        return setWhiteNav(true)
      case "All":
        return setWhiteNav(false)
      default: 
        return setWhiteNav(false)
    }
  }, [category])

  const priceSort = lowHighSort ? [...products].sort((a, b) => a.price > b.price ? 1 : -1) : [...products].sort((a, b) => a.price > b.price ? -1 : 1)
  const ascDescSort = azSort ? [...products].sort((a, b) => a.name > b.name ? 1 : -1) : [...products].sort((a, b) => a.name > b.name ? -1 : 1)
  const selectedSort = switchSort ? priceSort : ascDescSort
  const productComponents = (() => {
    switch(category) {
      case "All":
        switch(categoryFilter) {
          case "All":
            const postSearchComps = selectedSort.map((product) => {
              if (product.name.toLowerCase().includes(search.toLowerCase()))
                return <Product handleProductClick={handleProductClick} product={product} />
            }) 
            return postSearchComps
          default:
            const filteredComps = selectedSort.filter((product) => {
              if (product.category === categoryFilter) {
                return product
              }
            })
            const postSearchFilterComps = filteredComps.map((product) => {
              if (product.name.toLowerCase().includes(search.toLowerCase()))
                return <Product handleProductClick={handleProductClick} product={product} />
            })
            return postSearchFilterComps
        }
        
      default:
        const selectProducts = selectedSort.map((product) => {
          if (product.category === category)
          return <Product handleProductClick={handleProductClick} product={product} />
        })
      return selectProducts
    }
  })()

  function handleSearch(e){
    setSearch(e.target.value)
  }


  return (
    <CategoryCont>
      <Nav hideCheckout={hideCheckout} setSubTotal={setSubTotal} headerText={headerText} setHeaderText={setHeaderText} checkoutLogout={checkoutLogout} setCheckoutLogout={setCheckoutLogout} handleLogout={handleLogout} handleCheckout={handleCheckout} handleItemDelete={handleItemDelete} subTotal={subTotal} handleAdd={handleAdd} handleSubtract={handleSubtract} cart={cart} setCart={setCart} isPaneOpen={isPaneOpen} setIsPaneOpen={setIsPaneOpen} setCategory={setCategory} whiteNav={whiteNav} onLogout={onLogout}/>
      {
        category === "All"
        ? (
          <>
            <Placeholder></Placeholder>
              <FilterCont>
                <SearchCont>
                  <SearchInput placeholder="Search" value={search} onChange={handleSearch} />
                  <FiSearch color="#ccc"/>
                </SearchCont>
              <FilterButtonCont>
                <FilterButton onClick={() => {return setAzSort(!azSort), setSwitchSort(false)}}>{azSort ? "Z - A" : "A - Z"}</FilterButton>
                <FilterButton onClick={() => {return setLowHighSort(!lowHighSort), setSwitchSort(true)}}>{lowHighSort ? "H - L" : "L - H"}</FilterButton>
                <CategoryFilter>
                  <Menu setCategoryFilter={setCategoryFilter} categoryFilter={categoryFilter} />
                </CategoryFilter>
              </FilterButtonCont>
            </FilterCont>
          </>
          )
        : (
          <>
          <HeaderCont>
            <HeaderText>{category}</HeaderText>
          </HeaderCont>
          <HeaderImage src="https://i.ibb.co/TKhDhTW/the-rhone.png"/>
          </>
          )
      }
      
      <ProductCont>
        {productComponents}
      </ProductCont>
    </CategoryCont>
  )
}

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

const Placeholder = styled.img`
  top: 0px;
  height:15%;
  width: 100%;
`

const ProductCont = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-gap: 1%;
  justify-content: center;
  margin-top: 3em;
  margin-bottom: 5em;
`

const FilterCont = styled.div`
  margin-top: 4em;
  height: 2.5em;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  display: grid;
  align-items:center;
  grid-template-columns: 40% 40%;
  grid-gap: 20%;
  border: 1px solid #ccc;
  padding: 3px;
`

const SearchCont = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 94% 6%;
  align-items:center;
  border: 1px solid #ccc;
  border-radius: 20px;
`

const SearchInput = styled.input`
  height: 1.8em;
  outline: none;
  border:none;
  font-family: Josefin Sans, sans-serif;
  font-size: 14px;
  padding-left: 10px;
  border-radius: 20px;
`

const FilterButtonCont = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 15% 15% 70%;
  justify-items:center;
  align-items:center;
`

const FilterButton = styled.button`
  height: 2em;
  width:90%;
  border: 1px solid #ccc;
  font-family: Josefin Sans, sans-serif;
  font-size: 14px;
`

const CategoryFilter = styled.div`
  width: 100%;
`

const HeaderCont = styled.div`
  display: grid;
  align-items:center;
  align-content: center;
  position: absolute;
  width: 100%;
  background-color: transparent;
  height: 3em;
  color: white;
  margin-top: 17em;
  text-align:center;
`

const HeaderText = styled.p`
  text-align:center;
  font-size:52px;
`

const PlaceHolder = styled.div`
  width: 0px;
  background-color:blue;
`

export default Category