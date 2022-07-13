import { React, useState, useEffect} from "react"
import styled from "styled-components"
import OrderDetails from './OrderDetails.js'
import ProductComp from './ProductComp.js'
import { AiOutlineSend } from "react-icons/ai"
import { AiOutlineSearch } from "react-icons/ai"
import { AiOutlineClose } from "react-icons/ai"
import ProductDetails from './ProductDetails.js'
import Review from './Review.js'
import ReviewDetails from './ReviewDetails.js'


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

function DisplayArea({selectedItem}) {
  const [visible, setVisible] = useState(false)
  const [productVisible, setProductVisible] = useState(false)
  const [reviewVisible, setReviewVisible] = useState(false)
  const [orders, setOrders] = useState([])
  const [products, setProducts] = useState([])
  const [reviews, setReviews] = useState([])
  const [selectedOrder, setSelectedOrder] = useState([])
  const [selectedProduct, setSelectedProduct] = useState([])
  const [orderItems, setOrderItems] = useState([])
  const [status, setStatus] = useState({
    new: false,
    shipped: false,
    completed: false
  })
  const [inputData, setInputData] = useState({
    name: "",
    description: "",
    price: "",
  })

  useEffect(() => {
    fetch(`/${selectedItem.toLowerCase()}`)
    .then((r) => r.json())
    .then((data) => {
      switch(selectedItem) {
        case 'Orders':
          return setOrders(data)
        case 'Products':
          return setProducts(data)
        case 'Reviews':
          return setReviews(data)
        default:
          return setOrders(data)
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
     .then((data) => setSelectedOrder(data))
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



  function handleProductClick(id){
    fetch(`/products/${id}`)
    .then((r) => r.json())
    .then((data) => setSelectedProduct(data))
   }

   function handleProductUpdate(image) {
    setProductVisible(!productVisible)
    const configObj = {
      ...selectedProduct,
      id: selectedProduct.id,
      name: inputData.name ? inputData.name : selectedProduct.name,
      description: inputData.description ? inputData.description : selectedProduct.description,
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
    console.log("config", configObj)
    fetch(`/products/${selectedProduct.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
     },
        body: JSON.stringify(configObj)
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
        <TotalCont>{order.total}</TotalCont>
      </OrderNameCont>
    )
  })

  const productComps = products.map((product) => {
    return <ProductComp handleProductClick={handleProductClick} productVisible={productVisible} setProductVisible={setProductVisible} product={product}/>
  })

  const reviewComps = reviews.map((review) => {
    return <Review reviewVisible={reviewVisible} setReviewVisible={setReviewVisible}/>
  })

  const displayedComp = (() => {
    switch(selectedItem) {
      case 'Orders':
        return <OrderDisplay>{orderComps}</OrderDisplay>
      case 'Products':
        return <ProductDisplay>{productComps}</ProductDisplay>
      case 'Reviews':
        return <ReviewDisplay>{reviewComps}</ReviewDisplay>
      default:
        return <OrderDisplay>{orderComps}</OrderDisplay>
    }
  })(); 

  return (
    <OrderCont>
      {displayedComp}
      <ProductDetails handleProductUpdate={handleProductUpdate} inputData={inputData} setInputData={setInputData} selectedProduct={selectedProduct} productVisible={productVisible} setProductVisible={setProductVisible}/>
      <OrderDetails handleOrderDelete={handleOrderDelete} status={status} handleStatusChange={handleStatusChange} orderItems={orderItems} selectedOrder={selectedOrder} visible={visible} setVisible={setVisible}/>
      <ReviewDetails reviewVisible={reviewVisible} setReviewVisible={setReviewVisible}/>
    </OrderCont>
  )
}
 export default DisplayArea