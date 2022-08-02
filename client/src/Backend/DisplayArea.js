import { React, useState, useEffect} from "react"
import styled from "styled-components"
import OrderDetails from './OrderDetails.js'
import ProductComp from './ProductComp.js'
import ProductDetails from './ProductDetails.js'
import Review from './Review.js'
import ReviewDetails from './ReviewDetails.js'
import {BsFillImageFill} from 'react-icons/bs'
import NewProduct from './NewProduct.js'

function DisplayArea({products, setProducts, selectedItem}) {
  const [loadIcon, setLoadIcon] = useState(false)
  const [visible, setVisible] = useState(false)
  const [productVisible, setProductVisible] = useState(false)
  const [newProdVis, setNewProdVis] = useState(false)
  const [reviewVisible, setReviewVisible] = useState(false)
  const [orders, setOrders] = useState([])
  const [reviews, setReviews] = useState([])
  const [orderItems, setOrderItems] = useState([])
  const [selectedOrder, setSelectedOrder] = useState([])
  const [selectedProduct, setSelectedProduct] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("Enter Category")
  const [selectedReview, setSelectedReview] = useState("")
  const [imageExists, setImageExists] = useState(false)
  const [pieceImageExists, setPieceImageExists] = useState(false)
  const [areThereErrors, setAreThereErrors] = useState(false)
  const [status, setStatus] = useState({
    new: false,
    shipped: false,
    completed: false
  })
  const [inputData, setInputData] = useState({
    name: "",
    description_1: "",
    price: "",
  })
  const [newProdData, setNewProdData] = useState({
    name: "",
    price: "",
    category: "",
    description_1: "",
    description_2: "",
    description_3: "",
  })
  const [nameError, setNameError] = useState({
    name: [],
  })
  const [priceError, setPriceError] = useState({
    price: [],
  })
  const [categoryError, setCategoryError] = useState({
    category: [],
  })
  const [description_1_Error, setDescription_1_Error] = useState({
    description: [],
  })
  const [description_2_Error, setDescription_2_Error] = useState({
    description: [],
  })
  const [description_3_Error, setDescription_3_Error] = useState({
    description: [],
  })
  const [imageError, setImageError] = useState({
    error: [],
  })
  const [imagePieceError, setImagePieceError] = useState({
    error: [],
  })

  function handleClickAway(){
    setNewProdVis(!newProdVis)
    setNameError({
      name: []
    })
    setPriceError({
      price: []
    })
    setCategoryError({
      category: []
    })
    setDescription_1_Error({
      description: []
    })
    setDescription_2_Error({
      description: []
    })
    setDescription_3_Error({
      description: []
    })
    setImageError({
      error: []
    })
    setImagePieceError({
      error: []
    })
    setAreThereErrors(false)
    setSelectedCategory("Enter Category")
    setImageExists(false)
    setPieceImageExists(false)
    setNewProdData({
      name: "",
      price: "",
      category: "",
      description_1: "",
      description_2: "",
      description_3: "",
    })
  }


  function removeFirstWord(str) {
    const indexOfSpace = str.indexOf(' ');
  
    if (indexOfSpace === -1) {
      return '';
    }
  
    return str.substring(indexOfSpace + 1);
  }

  function removeFirstTwoWord(str) {
    const indexOfSpace = str.indexOf(' ');
  
    if (indexOfSpace === -1) {
      return '';
    }
  
    return str.substring(indexOfSpace + 3);
  }

  function removeFirstThreeWord(str) {
    const indexOfSpace = str.indexOf(' ');
  
    if (indexOfSpace === -1) {
      return '';
    }
  
    return str.substring(indexOfSpace + 6);
  }

  function hanleReviewClick(id){
    fetch(`/reviews/${id}`)
    .then((r) => r.json())
    .then((data) => setSelectedReview(data))
  }
  
  function handleReviewDelete(id) {
    fetch(`/reviews/${id}`,{
      method: 'DELETE',
    })
    const updatedReview = reviews.filter((review) => {
      return review.id !== id
    })
    setReviews(updatedReview)
  }

  useEffect(() => {
    fetch(`/${selectedItem.toLowerCase()}`)
    .then((r) => r.json())
    .then((data) => {
      switch(selectedItem) {
        case 'Orders':
          return setOrders(data.reverse())
        case 'Products':
          return setProducts(data.reverse())
        case 'Reviews':
          return setReviews(data.reverse())
        default:
          return setOrders(data.reverse())
      }
    })
  }, [selectedItem])

  function handleStatusChange(e) {
    const name = e.target.value
      const value = e.target.checked
      const status = e.target.value
     setStatus({
      ...status,
      [name]: value
     })
     fetch(`/orders/${selectedOrder.id}`, {
       method: "PATCH",
       headers: {
        "Content-Type" : "application/json"
       },
       body: JSON.stringify({
        ...selectedOrder,
        status: status
       })
     })
     .then((r) => r.json())
     .then((data) => {
      console.log(data)
      setSelectedOrder(data)
    })
  }

  function handleOrderDelete(id) {
    fetch(`/orders/${id}`,{
      method: 'DELETE',
    })
    const updatedOrders = orders.filter((order) => {
      return order.id !== id
    })
    setOrders(updatedOrders)
    setVisible(!visible)
  }

  function handleProductClick(id = selectedProduct.id){
    fetch(`/products/${id}`)
    .then((r) => r.json())
    .then((data) => setSelectedProduct(data))
   }

   function handleProductUpdate(image) {
    setProductVisible(!productVisible)
    const configObj = {
      ...selectedProduct,
      name: inputData.name ? inputData.name : selectedProduct.name,
      description_1: inputData.description_1 ? inputData.description_1 : selectedProduct.description_1,
      price: inputData.price ? inputData.price : selectedProduct.price,
      category: selectedProduct.category,
      image: image
    }
    const updatedProducts = products.map((product) => {
      if (product.id === configObj.id) {
        return configObj
      } else {
        return product
      }
    })
    setProducts(updatedProducts)
    fetch(`/products/${selectedProduct.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
     },
        body: JSON.stringify(configObj)
      })
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
      })
    }

    function handleProductDelete(id){
      setSelectedProduct([])
      fetch(`/products/${selectedProduct.id}`,{
        method: 'DELETE',
      })
      const updatedProducts = products.filter((product) => {
        return product.id !== id 
      })
      setProductVisible(!productVisible)
      setProducts(updatedProducts)
    }

    function handleProductAdd(pieceImage, image) {
      setLoadIcon(true)
      const configObj = {
        name: newProdData.name, 
        description_1: newProdData.description_1,
        description_2: newProdData.description_2,
        description_3: newProdData.description_3,
        piece_image: pieceImage,
        price: newProdData.price,
        category: selectedCategory,
        image: image
      }
      fetch(`/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
       },
          body: JSON.stringify(configObj)
        }).then((r) => {
          if (r.ok) {
            r.json().then((data) => {
              setLoadIcon(false)
              setAreThereErrors(false)
              const updatedProducts = [data, ...products]
              setProducts(updatedProducts)
              setSelectedCategory("Enter Category")
              setNewProdVis(!newProdVis)
              setNameError({
                ...nameError,
                name: []
              })
              setPriceError({
                ...priceError,
                price: []
              })
              setCategoryError({
                ...categoryError,
                category: []
              })
              setDescription_1_Error({
                ...description_1_Error,
                description: []
              })
              setDescription_2_Error({
                ...description_2_Error,
                description: []
              })
              setDescription_3_Error({
                ...description_3_Error,
                description: []
              })
              setImageError({
                ...imageError,
                error: []
              })
              setImagePieceError({
                ...imagePieceError,
                error: []
              })
            })
          } else {
            r.json().then((err) => {
              setLoadIcon(false)
              setAreThereErrors(true)
              err.errors.map((error) => {
                if (error.toLowerCase().includes('name')) {
                  setNameError({
                    ...nameError,
                    name: removeFirstWord(error)
                  })
                }
                if (error.toLowerCase().includes('price')) {
                  setPriceError({
                    ...priceError,
                    price: removeFirstWord(error)
                  })
                }
                if (error.toLowerCase().includes('category')) {
                  setCategoryError({
                    ...categoryError,
                    category: removeFirstWord(error)
                  })
                }
                if (error.toLowerCase().includes('description 1')) {
                  setDescription_1_Error({
                    ...description_1_Error,
                    description: removeFirstTwoWord(error)
                  })
                }
                if (error.toLowerCase().includes('description 2')) {
                  setDescription_2_Error({
                    ...description_2_Error,
                    description: removeFirstTwoWord(error)
                  })
                }
                if (error.toLowerCase().includes('description 3')) {
                  setDescription_3_Error({
                    ...description_3_Error,
                    description: removeFirstTwoWord(error)
                  })
                }
                if (error.toLowerCase().includes('product')) {
                  setImageError({
                    ...imageError,
                    error: removeFirstWord(error)
                  })
                }
                if (error.toLowerCase().includes('piece')) {
                  setImagePieceError({
                    ...imagePieceError,
                    error: removeFirstThreeWord(error)
                  })
                }
              })
            })
          }
        })
    }

  const orderComps = orders.map((order) => {
    return (
      <OrderNameCont onClick={() => {
        setVisible(!visible)
        setSelectedOrder(order)
        fetch(`/orders/${order.id}/order_items`)
        .then((r) => r.json())
        .then((data) => setOrderItems(data))
      }}>
        <Name>{`${order.user.first} ${order.user.last}`}</Name>
        <TotalCont>{`$${parseFloat(order.total).toFixed(2)}`}</TotalCont>
      </OrderNameCont>
    )
  })

  const productComps = products.map((product) => {
    return <ProductComp handleProductClick={handleProductClick} productVisible={productVisible} setProductVisible={setProductVisible} product={product}/>
  })

  const reviewComps = reviews.map((review) => {
    return <Review hanleReviewClick={hanleReviewClick} review={review} reviewVisible={reviewVisible} setReviewVisible={setReviewVisible}/>
  })

  const displayedComp = (() => {
    switch(selectedItem) {
      case 'Orders':
        return <OrderDisplay>{orderComps}</OrderDisplay>
      case 'Products':
        return (
          <ProductDisplay>
            <ProductCont onClick={() => setNewProdVis(!newProdVis)}> 
              <InnerProductCont>
                <ImageIconCont>
                  <BsFillImageFill color={'5a5a5a'} size={30}/>
                </ImageIconCont>
                <InfoCont>
                  <ProductName>Add New</ProductName>
                  <ProductPrice>Price</ProductPrice>
                </InfoCont>
              </InnerProductCont>
            </ProductCont>
            {productComps}
          </ProductDisplay>)
      case 'Reviews':
        return <ReviewDisplay>{reviewComps}</ReviewDisplay>
      default:
        return <OrderDisplay>{orderComps}</OrderDisplay>
    }
  })()

  return (
    <OrderCont>
      {displayedComp}
      <NewProduct loadIcon={loadIcon} setLoadIcon={setLoadIcon} areThereErrors={areThereErrors} imageExists={imageExists} setImageExists={setImageExists} pieceImageExists={pieceImageExists} setPieceImageExists={setPieceImageExists} handleClickAway={handleClickAway} setCategoryError={setCategoryError} imageError={imageError} imagePieceError={imagePieceError} nameError={nameError} priceError={priceError} categoryError={categoryError.category} description_1_Error={description_1_Error.description} description_2_Error={description_2_Error.description} description_3_Error={description_3_Error.description} handleProductAdd={handleProductAdd} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} newProdData={newProdData} setNewProdData={setNewProdData} newProdVis={newProdVis} setNewProdVis={setNewProdVis}/>
      <ProductDetails handleProductDelete={handleProductDelete} handleProductUpdate={handleProductUpdate} inputData={inputData} setInputData={setInputData} selectedProduct={selectedProduct} productVisible={productVisible} setProductVisible={setProductVisible}/>
      <OrderDetails handleOrderDelete={handleOrderDelete} status={status} handleStatusChange={handleStatusChange} orderItems={orderItems} selectedOrder={selectedOrder} visible={visible} setVisible={setVisible}/>
      <ReviewDetails setSelectedReview={setSelectedReview} handleReviewDelete={handleReviewDelete} selectedReview={selectedReview} reviewVisible={reviewVisible} setReviewVisible={setReviewVisible}/>
    </OrderCont>
  )
}

const OrderCont = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
`

const OrderDisplay = styled.div`
  height: 36em;
  padding: 1%;
  width: 100%;
  margin: auto;
  display: grid;
  grid-auto-rows: 50px;
  overflow-x: hidden;
  overflow-y: scroll; 
  scroll-behavior: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`

const ProductDisplay = styled.div`
  height: 36em;
  padding: 1%;
  width: 100%;
  margin: auto;
  display: grid;
  grid-auto-rows: 90px;
  overflow-x: hidden;
  overflow-y: scroll; 
  scroll-behavior: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`

const ReviewDisplay = styled.div`
  height: 36em;
  padding: 1%;
  width: 100%;
  margin: auto;
  display: grid;
  grid-auto-rows: 105px;
  overflow-x: hidden;
  overflow-y: scroll; 
  scroll-behavior: auto;
  padding-right: 3em;
  &::-webkit-scrollbar {
    display: none;
  }
`

const OrderNameCont = styled.div`
  display: grid;
  align-items: center;
  align-content:center;
  grid-template-columns: 93% 7%;
  width: 100%;
  height: 40px;
  padding:1%;
  cursor: pointer;
  transition: .5s;
  border: 1px solid transparent;
  &&:hover {
    border: 1px solid #ccc
  }
`

const Name = styled.p`
  font-size: 18px;
  display: grid;
  align-items:center;
  font-weight: 100;
  width: 100%;
  height: 38px;
  text-align: left;
  margin-left: 6px;
  color: black;
`

const TotalCont = styled.p`
  display: grid;
  align-items:center;
  border-left: 1px solid #ccc;
  color:black;
`

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
  border-left: 1px solid #eee;
`

const ImageIconCont = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  justify-items:center;
  align-content:center;
  width: 70px;
`

 export default DisplayArea