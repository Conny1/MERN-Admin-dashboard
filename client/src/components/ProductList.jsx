import React, { useState } from 'react'
import styled from 'styled-components'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


const Container = styled.div`
min-height:200px;
min-width:250px;
width:30%;
/* outline:1px solid red; */
background-color:#1e2351;
display:flex;
flex-direction:column;
justify-content:space-between;
padding:3px;
border-radius:5px;

`
const Wrapper = styled.div`
display:flex;
flex-direction:column;
gap:5px;

`
const Name = styled.p`
margin-top:0;
margin-bottom:0;

`
const Text = styled.p`
color:#ddc18c;
font-size:12px;
margin-top:0;
margin-bottom:0;

`

const ProductList = ({item}) => {
  const [more, setMore] = useState(false)
  
  return (
    <Container>
       <Wrapper>
       <Text>{item?.category}</Text>
        <Name> {item?.name} </Name>
        <Text> $ {item?.price} </Text>
       </Wrapper>
       <Wrapper>
       <Stack spacing={1}>
        <Rating name="half-rating-read" value={item?.rating} precision={0.5} readOnly />
    </Stack>
        <Text style={{color:'#ffff'}} > {item?.description} </Text>
      
       </Wrapper>
      { !more && <Text  style={{cursor:'pointer'}} onClick={()=>setMore(!more)} >SEE MORE</Text>} 
      { more &&  <Wrapper>
          <Text>ID: {item?._id}</Text>
          <Text>Supply left: {item?.supply}</Text>
          <Text  style={{cursor:'pointer'}} onClick={()=>setMore(!more)} >SEE LESS</Text> 
          
        </Wrapper> }
    </Container>
  )
}  

export default ProductList