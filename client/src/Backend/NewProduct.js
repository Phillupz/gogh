import React, { useState, useEffect } from 'react';
import Modal from 'react-awesome-modal';
import styled from "styled-components"
import { VscAdd } from "react-icons/vsc"
import { AiOutlineSend } from "react-icons/ai"
import { BsSlack } from 'react-icons/bs';
import OrderItem from "./OrderItem.js"
import {AiOutlineClose} from 'react-icons/ai'
import {BsFillImageFill} from 'react-icons/bs'
import ImageUploading from "react-images-uploading";
import Menu from './Menu.js'


const ProductDetailsCont = styled.div`
  height:100%;
  width: 100%;
  display:grid;
  grid-template-columns: 50% 50%;
  background-color:white;
`

const LeftCont = styled.div`
  width: 100%;
  padding: 1%;
  display:grid;
  grid-template-rows: 8% 82% 10%;
  border-right: 1px solid #ccc;
`
const ImageHeader = styled.div`
  height: 100%;
  width: 100%;
  border-bottom: 1px solid #eee;
  display: grid;
`

const Header = styled.p`
  color: black;
  font-size: 24px;
  display: grid;
  justify-content:center;
  align-items: center;
`

const ImageCont = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-auto-rows: 95px;
  display:grid;
  justify-content:center;
`

const ProductImage = styled.img`
  height 450px;
  width: 450px;
`

const DisplayCont =styled.div `
`

const RightCont = styled.div`
  width: 100%;
  padding: 1%;
  display:grid;
  grid-template-rows: 8% 82% 10%;
`

const DetailsHeader = styled.div`
  display: grid;
  border-bottom: 1px solid #eee;
`

const DetailsDisplayCont =styled.div `
  display: grid;
  grid-template-columns: 50% 50%;
`

const DetailOptionsWrapper = styled.div`
  height: 100%;
  border-right: 1px solid #eee;
`

const DetailOptions = styled.div`
  display: grid;
  align-items: center;
  align-content:center;
  grid-template-columns: 83% 15%;
  width: 96%;
  height: 40px;
  padding:1%;
  padding-top: 7%;
`

const OptionCont = styled.p`
  font-size: 16px;
  font-weight: 100;
  width: 100%;
  text-align: left;
  display: block;
  margin-left:6px;
  color: black;

`

const InputCont = styled.div`
`

const Input = styled.input`
  height: 2em;
  font-size: 16px;
  outline: none;
  border: 1px solid #eee;
  margin-top: 8px;
  width: 97%;
  font-family: Josefin Sans, sans-serif;
  padding-left:8px;
  transition: .5s; 
  color: black;
  &&:hover {
    border: 1px solid #ccc;
  }
`

const Description = styled.textarea`
  padding:8px;
  border: 1px solid #eee;
  font-size: 16px;
  outline: none;
  margin-top: 8px;
  font-family: Josefin Sans, sans-serif;
  width: 97%;
  resize:vertical;
  min-height: 34px;
  max-height: 400px;
  transition: .3s;
  &::-webkit-scrollbar {
    display: none;
  };
  &&:hover {
    border: 1px solid #ccc;
  };
`

const RightBottomCont = styled.div`
  height: 100%;
  width: 100%;
  border-top: 1px solid #eee;
  display: grid;
  justify-content:center;
`

const LeftButtonCont = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
`

const Button = styled.button`
  height: 30px;
  width: 75px;
  background-color:white;
  text-decoration: none;
  border: transparent;
  font-family: Josefin Sans, sans-serif;
  transition: .5s;
  font-size: 16px;
  &&:hover {
    border: 1px solid green;
  }
`

const DeleteButton = styled.button`
  height: 30px;
  width: 75px;
  font-size: 16px;
  background-color:white;
  text-decoration: none;
  font-family: Josefin Sans, sans-serif;
  border: transparent;
  transition: 1s;
  &&:hover {
    border: 1px solid red;
  }
`

const CloseCont = styled.div`
  position: fixed;
  right:7px;
  top: 7px;
`

const LeftBottomCont = styled.div`
  height: 100%;
  width: 100%;
  border-top: 1px solid #eee;
  display: grid;
  align-content: center;
  text-align:left;
`

const NewImageCont = styled.div`
  color: black;
  font-size: 24px;
  display: grid;
  justify-content:center;
  text-align: center;
  width: 100%;
`

const ImageButtonCont = styled.div`
  display: grid;
  grid-template-columns: 75% 25%;
  justify-content:center;
  width: 6em;
  height: 1.5em;
  padding: 2%;
  border: 1px solid transparent;
  transition: .5s;
  &&:hover {
    border: 1px solid #ccc;
  }
`

const AddImageText = styled.p`
  color:black; 
  display: grid;
  align-content:center;
  font-size: 18px;
`

const ImageIconCont = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  justify-content:center;
  align-content:center;
`

const ImagePlaceholder = styled.div`
  margin-top: 12em;
`

const PlaceholderText = styled.p`
  color:black; 
  display: grid;
  align-content:center;
  margin-top: 1em;
  font-size: 18px;
`



const DropCont = styled.div`
  
`

export default function ProductDetails({handleProductAdd, selectedCategory, setSelectedCategory, newProdData, setNewProdData, newProdVis, setNewProdVis}) {
  const [images, setImages] = React.useState([])
  const [image, setImage] = React.useState([])
  const [imageExists, setImageExists] = useState(false)

  function handleSubmit() {
    handleProductAdd(image)
    setNewProdData({
      name: "",
      description: "",
      price: "",
    })
    setImageExists(false)
  }

  const onChange = (imageList) => {
    setImage(imageList[0].data_url)
    setImageExists(true)
  }

  function handleChange(e){
    const name = e.target.name
    const value = e.target.value
    setNewProdData({
      ...newProdData,
      [name]: value
    })
  }


return (
  <section>
    <Modal visible={newProdVis} width="1200" height="600" effect="fadeInUp" onClickAway={() => {
      setNewProdVis(!newProdVis)
      setSelectedCategory("Enter Category")
      setImageExists(false)
      setNewProdData({
        name: "",
        description: "",
        price: "",
      })
      }}>
      {/* <CloseCont><AiOutlineClose color="black"/></CloseCont> */}
      <ProductDetailsCont>
        <LeftCont>
          <ImageHeader>
            <Header>Image</Header>
          </ImageHeader>
        <DisplayCont>
            {imageExists
              ? (
                <ImageCont>
                  <ProductImage name="image" src={image}/>
                </ImageCont>
              ) : (
                <ImagePlaceholder>
                  <BsFillImageFill color={'5a5a5a'} size={40}/>
                  <PlaceholderText>Please Add Image</PlaceholderText>
                </ImagePlaceholder>
              ) 
            }
        </DisplayCont>
          <LeftBottomCont>
            <NewImageCont>
            <ImageUploading
              value={images}
              onChange={onChange}
              maxNumber={50}
              dataURLKey="data_url"
              acceptType={["png"]}
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps
              }) => (
            <>
             {/* <NewImageCont>Image</NewImageCont> */}
            <ImageButtonCont 
              onClick={onImageUpload}
              {...dragProps}
            >
              <AddImageText>Add Image</AddImageText>
              <ImageIconCont>
                <BsFillImageFill color={'5a5a5a'} size={18}/>
              </ImageIconCont>
            </ImageButtonCont>
            </>
          )}
        </ImageUploading>
            </NewImageCont>
          </LeftBottomCont>
        </LeftCont>
        <RightCont>
          <DetailsHeader>
            <Header>Product Details</Header>
          </DetailsHeader>
          <DetailsDisplayCont>
            <DetailOptionsWrapper>
              <DetailOptions>
                <OptionCont>Name:</OptionCont>
              </DetailOptions>
              <DetailOptions>
                <OptionCont>Price:</OptionCont>
              </DetailOptions>
              <DetailOptions>
                <OptionCont>Category:</OptionCont>
              </DetailOptions>
              <DetailOptions>
                <OptionCont>Description:</OptionCont>
              </DetailOptions>
            </DetailOptionsWrapper>
            <InputCont>
              <Input value={newProdData.name} name="name" onChange={handleChange} placeholder="Enter Name" />
              <Input value={newProdData.price} name="price" onChange={handleChange} placeholder="Enter Price" />
              <DropCont>
                <Menu selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
              </DropCont>
              <Description value={newProdData.description} name="description" onChange={handleChange} placeholder="Enter Description" >
              </Description>
            </InputCont>
          </DetailsDisplayCont>
          <RightBottomCont>
            <LeftButtonCont><Button onClick={handleSubmit}>Add</Button></LeftButtonCont>
          </RightBottomCont>
        </RightCont>
      </ProductDetailsCont>
    </Modal>
  </section>
  )
}