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
  height: 99%;
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
  height: 100%;
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

function DisplayArea({selectedItem = 'orders'}) {
  const [visible, setVisible] = useState(false)
  const [productVisible, setProductVisible] = useState(false)
  const [reviewVisible, setReviewVisible] = useState(false)
  const [orders, setOrders] = useState([])
  const [products, setProducts] = useState([])
  const [reviews, setReviews] = useState([])
  const [selectedOrder, setSelectedOrder] = useState([])
  const [orderItems, setOrderItems] = useState([])
  const [status, setStatus] = useState({
    new: false,
    shipped: false,
    completed: false
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
          return 
      }
    })
  }, [selectedItem])

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
    return <ProductComp productVisible={productVisible} setProductVisible={setProductVisible} product={product}/>
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
        return 
    }
  })(); 

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

  return (
    <OrderCont>
      {displayedComp}
      <ProductDetails productVisible={productVisible} setProductVisible={setProductVisible}/>
      <OrderDetails status={status} handleStatusChange={handleStatusChange} orderItems={orderItems} selectedOrder={selectedOrder} visible={visible} setVisible={setVisible}/>
      <ReviewDetails reviewVisible={reviewVisible} setReviewVisible={setReviewVisible}/>
    </OrderCont>
  )
}
 export default DisplayArea