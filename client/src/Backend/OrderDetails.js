import {React, useEffect, useState} from "react";
import Modal from 'react-awesome-modal';
import styled from "styled-components"
import OrderItem from "./OrderItem.js"

export default function OrderDetails({handleOrderDelete, handleStatusChange, selectedOrder, orderItems, visible, setVisible}) {
  const [orderRow, setOrderRow] = useState([])
  const [orderTotal, setOrderTotal] = useState(0)
  const [status, setStatus] = useState({
    new: false,
    shipped: false,
    completed: false
  })

  useEffect(() => {
      fetch(`/orders/${selectedOrder.id}`)
      .then((r) => r.json())
      .then((data) => {
        setOrderTotal(selectedOrder.total.toFixed(2))
        switch(data.status) {
          case "new":
            return setStatus({
              new: true,
              shipped: false,
              completed: false,
            })
          case "shipped":
            return setStatus({
              new: false,
              shipped: true,
              completed: false,
            })
          case "completed":
            return setStatus({
              new: false,
              shipped: false,
              completed: true,
            })
          default:
            return 
        }
      })
  }, [selectedOrder])

  useEffect(() => {
    fetch(`/orders/${selectedOrder.id}`)
    .then((r) => r.json())
    .then((data) => {
      setOrderRow([
        {
          title: `${data.user.first} ${data.user.last}`
        },
        {
          title: data.user.email
        },
        {
          title: data.user.street
        },
        {
          title: data.user.apt === "" ? "No apt number" : data.user.apt
        },
        {
          title: `${data.user.city}, ${data.user.state}`
        },
        {
          title: data.user.zip
        },
        {
          title: data.user.country
        },
      ])
    })
  }, [selectedOrder])

    const orderColumn = [
      {
        title: "Name:"
      },
      {
        title: "Email:"
      },
      {
        title: "Address:"
      },
    ]
    
      const orderComponents = orderItems.map((item) => {
        return <OrderItem item={item}/>
      })

      const orderColumns = orderColumn.map((column) => {
        return (
          <ColumnRowCont>
            <ColumnRowNameCont>{column.title}</ColumnRowNameCont>
          </ColumnRowCont>
        )
      })

      const orderRows = orderRow.map((row) => {
        return (
          <ColumnRowCont>
            <ColumnRowNameCont>{row.title}</ColumnRowNameCont>
          </ColumnRowCont>
        )
      })

    function handleChange(e){
      handleStatusChange(e)
    }

    function handleDelete(){
      const id = selectedOrder.id
      handleOrderDelete(id)
    }
      
    return (
      <section>
        <Modal visible={visible} width="1200" height="600" effect="fadeInUp" onClickAway={() => {
          setStatus({
            new: false,
            shipped: false,
            completed: false
          })
          setVisible(!visible)
          }}>
          {/* <CloseCont><AiOutlineClose color="black"/></CloseCont> */}
          <OrderDetailCont>
            <OrderItems>
              <OrderItemsHeader>
                <Header>Order Items</Header>
                <Price>Price</Price>
                <Quantity>Quantity</Quantity>
                <Total>Total</Total>
              </OrderItemsHeader>
              <DisplayCont>
                <OrderItemCont>
                  {orderComponents}
                </OrderItemCont>
              </DisplayCont>
              <BottomCont>
                <OrderTotal>{`Order Total: $${orderTotal}`}</OrderTotal>
              </BottomCont>
            </OrderItems>
            <Details>
              <CutomerHeader>
                <Header>Customer Details</Header>
              </CutomerHeader>
              <DetailsDisplayCont>
                <OrderColumnCont>{orderColumns}</OrderColumnCont>
                <OrderRowCont>{orderRows}</OrderRowCont>
              </DetailsDisplayCont>
              <CutomerHeader>
                <Header>Status</Header>
              </CutomerHeader>
              <InputCont>
                <InnerInputCont>
                  <NewInput type="radio" name="status"  value="new" checked={status.new} onChange={handleChange}/>
                  <InputTitle>New</InputTitle>
                </InnerInputCont>
                <InnerInputCont>
                  <ShippedInput type="radio" name="status" value="shipped" checked={status.shipped} onChange={handleChange} />
                  <InputTitle>Shipped</InputTitle>
                </InnerInputCont>
                <InnerInputCont>
                  <CompleteInput type="radio" name="status" value="completed" checked={status.completed} onChange={handleChange} />
                  <InputTitle>Complete</InputTitle>  
                </InnerInputCont>
              </InputCont>
              <BottomCont>
                <ButtonCont><Button onClick={handleDelete}>Delete</Button></ButtonCont>
              </BottomCont>
            </Details>
          </OrderDetailCont>
        </Modal>
      </section>
    )
  }

  const OrderDetailCont = styled.div`
  height:100%;
  width: 100%;
  display:grid;
  grid-template-columns: 50% 50%;
  background-color:white;
`

const OrderItems = styled.div`
  height: 100%;
  width: 100%;
  padding: 1%;
  display:grid;
  grid-template-rows: 8% 82% 10%;
  border-right: 1px solid #ccc;
`
const OrderItemsHeader = styled.div`
  height: 100%;
  width: 100%;
  border-bottom: 1px solid #eee;
  display: grid;
  grid-template-columns: 37% 21% 21% 21%;
`

const Header = styled.p`
  color: black;
  font-size: 24px;
  display: grid;
  justify-content:center;
  align-items: center;
`
const Price = styled.p`
  color: black;
  font-size: 18px;
  display: grid;
  justify-content:center;
  align-items: center;
`
const Quantity = styled.p`
  color: black;
  font-size: 18px;
  display: grid;
  justify-content:center;
  align-items: center;
`
const Total = styled.p`
  color: black;
  font-size: 18px;
  display: grid;
  justify-content:center;
  align-items: center;
`

const OrderItemCont = styled.div`
  height: 28em;
  width: 100%;
  display: grid;
  grid-auto-rows: 95px;
  margin-top: 1em;
  overflow-x: hidden;
  overflow-y: scroll; 
  scroll-behavior: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`

const DisplayCont =styled.div `
`

const BottomCont = styled.div`
  height: 100%;
  width: 100%;
  border-top: 1px solid #eee;
  display: grid;
  align-content: center;
  text-align:left;
`

const OrderTotal = styled.p`
  color: black;
  font-size: 24px;
  display: grid;
  justify-content:center;
  text-align: left;
`

const Details = styled.div`
  width: 100%;
  padding: 1%;
  display:grid;
  grid-template-rows: 8% 50% 8% 24% 10%
`

const CutomerHeader = styled.div`
  height: 100%;
  width: 100%;
  border-bottom: 1px solid #eee;
  display: grid;
  align-content: center;
  text-align:left;
`

const DetailsDisplayCont =styled.div `
  display: grid;
  grid-template-columns: 50% 50%;
`

const OrderColumnCont = styled.div`
  border-right: 1px solid #eee
`

const OrderRowCont = styled.div`
`

const ColumnRowCont = styled.div`
  display: grid;
  align-items: center;
  align-content:center;
  grid-template-columns: 83% 15%;
  width: 96%;
  height: 40px;
  padding:1%;
`

const ColumnRowNameCont = styled.p`
  font-size: 16px;
  font-weight: 100;
  width: 100%;
  text-align: left;
  display: block;
  margin-left:6px;
  color: black;
`

const InputCont = styled.div`
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
`

const InnerInputCont = styled.div`
  display: grid;
  width: 100%;
  justify-items:center;
  align-items:center;
  grid-template-rows: 40% 60%;

`

const InputTitle = styled.p`
  display: grid;
  height: 100%;
  width: 100%;
  justify-items:center;
  color:black;
`

const NewInput = styled.input`
  display: grid;
  height: 12px;
  width: 12px;
  accent-color: red;
`

const ShippedInput = styled.input`
  display: grid;
  width: 12px;
  accent-color: red;
  accent-color: orange;
`

const CompleteInput = styled.input`
  width: 12px;
  accent-color: red;
  accent-color: green;
`

const Button = styled.button`
  height: 30px;
  width: 75px;
  border: 1px solid #ccc;
  color:black;
  background-color:white;
  font-family: Josefin Sans, sans-serif;
  font-size: 16px;
  transition: .5s;
  &&:hover {
    border: 1px solid red;
  }
`

const ButtonCont = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  font-family: Josefin Sans, sans-serif;
  justify-content:center;
  align-items: center;
`