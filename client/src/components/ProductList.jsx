import React from 'react'
import styled from 'styled-components'

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

const ProductList = () => {
  return (
    <Container>
       <Wrapper>
       <Text>clothing</Text>
        <Name> Port Becky </Name>
        <Text> $ 3373 </Text>
       </Wrapper>
       <Wrapper>
       rating  icons
        <Text style={{color:'#ffff'}} >Destruction of thoraxic duct, repsjonsy  </Text>
      
       </Wrapper>
        SEE MORE
    </Container>
  )
}

export default ProductList