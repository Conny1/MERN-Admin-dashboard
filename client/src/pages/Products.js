import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductList from "../components/ProductList";
import Nav from  "../components/Nav";
import Title from "../components/Title";
import axios from "axios";

const Container = styled.div`

width:75%;
`
const Wrapper = styled.div`
display:flex;
flex-wrap:wrap;
gap:20px;

justify-content:center;


`

const Products = () => {
const [product, setproduct] = useState([])
   
useEffect(() => {
  const fetchProducts= async()=>{
    try {
      const results =await axios.get( `${process.env.REACT_APP_BASE_URL}/products`)
      if(results){
        setproduct(results.data)
        // console.log(results.data)
      }
    
    } catch (error) {
      
    }
  }
  fetchProducts()

}, [])


  return (
      
    <Container>
    <Nav/>
    <Title text="See your list of products"  title="Products" />

    <Wrapper>
      {
        product.length === 0?"Loading...":
        product.map((item)=>{
          return <ProductList key={item._id} item={item} />
        })
      }
    
      
      </Wrapper>
    </Container>
    
  );
};

export default Products;
