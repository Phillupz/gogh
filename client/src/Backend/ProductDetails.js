import React, { useState, useEffect } from 'react';
import Modal from 'react-awesome-modal';
import styled from "styled-components"
import {BsFillImageFill} from 'react-icons/bs'
import ImageUploading from "react-images-uploading";

export default function ProductDetails({handleProductDelete, inputData, setInputData, handleProductUpdate, selectedProduct, productVisible, setProductVisible}) {
  const [images, setImages] = React.useState([])
  const [image, setImage] = React.useState(["https://i.ibb.co/gdBmJ7L/van-gogh-logo.pn"])
  
  useEffect(() =>{
    setImage(selectedProduct.image)
  }, [selectedProduct])

  function handleChange(e){
    const name = e.target.name
    const value = e.target.value
    setInputData({
      ...inputData,
      [name]: value
    })
  }

  function handleSubmit() {
    handleProductUpdate(image)
    setInputData({
      name: "",
      description_1: "",
      price: "",
    })
  }

  const onChange = (imageList) => {
    setImage(imageList[0].data_url)
  }

  function handleDelete() {
    const id = selectedProduct.id
    handleProductDelete(id)
  }


return (
  <section>
    <Modal visible={productVisible} width="1200" height="600" effect="fadeInUp" onClickAway={() => {
      setProductVisible(!productVisible)
      setImage("https://i.ibb.co/gdBmJ7L/van-gogh-logo.png")
      setInputData({
        name: "",
        description_1: "",
        price: "",
      })
      }}>
      <ProductDetailsCont>
        <LeftCont>
          <ImageHeader>
            <Header>Image</Header>
          </ImageHeader>
        <DisplayCont>
          <ImageCont>
            <ProductImage name="image" src={image}/>
          </ImageCont>
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
                onImageUpload,
                dragProps
              }) => (
            <>
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
                <OptionCont>Description:</OptionCont>
              </DetailOptions>
            </DetailOptionsWrapper>
            <InputCont>
              <Input name="name" onChange={handleChange} placeholder={selectedProduct.name} value={inputData.name}/>
              <Input name="price" onChange={handleChange} placeholder={selectedProduct.price} value={inputData.price}/>
              <Description value={inputData.description_1} name="description_1" onChange={handleChange} placeholder={selectedProduct.description_1}>
              </Description>
            </InputCont>
          </DetailsDisplayCont>
          <RightBottomCont>
            <LeftButtonCont><Button onClick={handleSubmit}>Update</Button></LeftButtonCont>
            <RightButtonCont><DeleteButton onClick={handleDelete} >Delete</DeleteButton></RightButtonCont>
          </RightBottomCont>
        </RightCont>
      </ProductDetailsCont>
    </Modal>
  </section>
  )
}

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
  margin-top: 6px;
  width: 97%;
  font-family: Josefin Sans, sans-serif;
  padding-left:8px;
  transition: .5s;
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
  min-height: 200px;
  max-height: 400px;
  transition: .3s;
  &::-webkit-scrollbar {
    display: none;
  };
  &&:hover {
    border: 1px solid #ccc;
}
`

const RightBottomCont = styled.div`
  height: 100%;
  width: 100%;
  border-top: 1px solid #eee;
  display: grid;
  align-content: center;
  text-align:left;
  grid-template-columns: 50% 50%;
`

const LeftButtonCont = styled.div`
  height: 100%;
  width: 100%;
  padding-left: 10em;
  display: grid;
  justify-items: center;
  align-items: center;
`

const RightButtonCont = styled.div`
  padding-right: 10em;
  height: 100%;
  width: 100%;
  display: grid;
  font-family: Josefin Sans, sans-serif;
  justify-content:center;
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
    border: 1px solid #ccc;
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
  transition: .5s;
  &&:hover {
    border: 1px solid red;
  }
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