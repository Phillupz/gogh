import React, { useState } from 'react';
import Modal from 'react-awesome-modal';
import styled from "styled-components"
import { VscAdd } from "react-icons/vsc"
import { AiOutlineSend } from "react-icons/ai"
import StarRating from './StarRating.js'

const NewReviewCont = styled.div`
  height:100%;
  width: 100%;
  background-color:white;
  display:grid;
  justify-items: center;
`

const Button = styled.button`
  background-color: transparent;
  border: none;
  height: 2em;
  width: 6em;
`

const Image = styled.img`
  margin-left:auto;
  margin-right:auto;
  padding: 10px;
  height: 8em;
  width: 10em;
  top: 10px;
  margin-top:1em;
`

const InnerReviewCont = styled.div`
  height: 11.1em;
  width: 100%;
  display: grid;
  grid-template-rows: 25% 25% 25% 25%;
  justify-items: center;
  width:70%;
  padding-bottom: 4em;
`

const ButtonCont = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  padding-top: 2em;
`

const AddButton = styled.button`
   height: 30px;
  width: 75px;
  font-size: 16px;
  background-color:white;
  text-decoration: none;
  font-family: Josefin Sans, sans-serif;
  border: transparent;
  transition: 1s;
  &&:hover {
    border: 1px solid #ccc;
  }
`

const ReviewCont = styled.div`
  width: 100%;
`

const InputCont = styled.div`

`

const StarCont = styled.div`
`

const Input = styled.textarea`
  height:4em;
  wdith: 30em;
  text-align: center;
  width: 100%;
  outline: none;
  margin-top: 2em;
  border: none;
  resize: none;
  overflow: auto;
  font-family: Josefin Sans, sans-serif;
  font-size: 16px;
  &::-webkit-scrollbar {
    display: none;
  }

`

export default function AddReview({handleAddReview, selectedProduct}) {
  const [visible, setVisible] = useState()
  const [reviewText, setReviewText] = useState("")
  const [starRating, setStarRating] = useState(0)


  function onAddReview() {
    setReviewText("")
    setStarRating(0)
    handleAddReview(selectedProduct, reviewText, starRating)
    setVisible(!visible)
  }

  function onChange(e) {
    setReviewText(e.target.value)
  }
  
    return (
      <section>
        <Button type="button" value="Open" onClick={() => setVisible(!visible)}><VscAdd size={22}/></Button>
        <Modal visible={visible} width="500" height="375" effect="fadeInUp" onClickAway={() => setVisible(!visible)}>
          <NewReviewCont>
            <Image src="https://i.ibb.co/RcLmfKX/logo2.png"/>
            <InnerReviewCont>
              <ReviewCont>
                <InputCont>
                  <StarCont>
                    <StarRating starRating={starRating} setStarRating={setStarRating}/>
                  </StarCont>
                  <Input onChange={onChange} value={reviewText} placeholder='Enter Review'/>
                  <ButtonCont>
                    <AddButton onClick={onAddReview}>Review</AddButton>
                  </ButtonCont>
                </InputCont>
              </ReviewCont>
            </InnerReviewCont>
          </NewReviewCont>
        </Modal>
      </section>
    )
  }
