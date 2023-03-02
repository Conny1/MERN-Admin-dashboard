import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {MdAnalytics,MdRemoveRedEye,MdCalendarToday,MdCalendarViewMonth, MdHome,MdNorthEast, MdShoppingCart, MdOutlineAdminPanelSettings , MdPeopleAlt, MdPayment, MdPanoramaPhotosphere} from "react-icons/md";


const Container = styled.div`
width:30%;
/* outline:1px solid red; */
max-width:250px;
background-color:#1e2351;
display:flex;
flex-direction:column; 
justify-content:space-evenly;
position:relative;
padding:10px;
margin-bottom:50px;
height:100vh;
position:sticky;
top:0;

`
const Wrapper = styled.div`
display:flex;
flex-direction:column;
gap:20px;
font-size:12px;

align-items:center;
`
const H4 = styled.h4` 
/* font-weight:200; */
font-size:13px;
margin-bottom:0;
align-self:center;
width:60%;
`
const Logo = styled.p`
text-transform:uppercase;
font-weight:500;
position:absolute;
top:0;
color:#ddc18c;
`

const Sidebar = () => {
  return (
    
   
    <Container>
    <Logo> Ecomvision </Logo>
    <br/>
      <Link to= '/'style={{color:'#ffff', textDecoration:'none',display:'flex',gap:'10px',width:'60%', alignSelf:'center' }} >  <H4 style={{display:'flex',gap:'10px',justifyContent:'center',alignContent:'center'}} >  <MdHome/>  Dashboard </H4></Link>
        <Wrapper>
            <H4> Client facing </H4>
            <Link to='/products' style={{color:'#ffff', textDecoration:'none', display:'flex',gap:'10px',width:'60%'  }}  ><MdShoppingCart/>    Products </Link>
            <Link to='/customers'style={{color:'#ffff', textDecoration:'none',display:'flex',gap:'10px', width:'60%'  }} >  <MdPeopleAlt/> Customers </Link>
            <Link to='/transactions' style={{color:'#ffff', textDecoration:'none',display:'flex',gap:'10px',width:'60%'  }} > <MdPayment/> Transactions </Link>
            <Link to='/geography' style={{color:'#ffff', textDecoration:'none',display:'flex',gap:'10px',width:'60%'  }} ><MdPanoramaPhotosphere/> Geograpgy </Link>
        </Wrapper>

        <Wrapper>
            <H4> Sales </H4>
            <Link to='/overview' style={{color:'#ffff', textDecoration:'none', display:'flex',gap:'10px',width:'60%'}} > <MdRemoveRedEye/> Overview </Link>
            <Link to='/daily' style={{color:'#ffff', textDecoration:'none', display:'flex',gap:'10px',width:'60%' }} > <MdCalendarToday/>  Daily </Link>
            <Link to='/monthly' style={{color:'#ffff', textDecoration:'none', display:'flex',gap:'10px', width:'60%' }} ><MdCalendarViewMonth/> Monthly </Link>
            <Link to='/breakedown' style={{color:'#ffff', textDecoration:'none',display:'flex',gap:'10px',width:'60%'  }}  > <MdAnalytics/> Breakedown </Link>
        </Wrapper>


        <Wrapper>
            <H4> Management </H4>
            <Link to='/admin'style={{color:'#ffff', textDecoration:'none', display:'flex',gap:'10px', width:'60%' }} > <MdOutlineAdminPanelSettings/> Admin </Link>
            <Link to='/performance'style={{color:'#ffff', textDecoration:'none',display:'flex',gap:'10px',width:'60%'  }} > <MdNorthEast/> Performance </Link>
             </Wrapper>
        

    </Container>
    
  )
}

export default Sidebar