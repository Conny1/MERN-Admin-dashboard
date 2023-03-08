import React from 'react'
import styled from 'styled-components'
import { BsEnvelope, BsPersonPlus, BsFillCalendar2Fill, BsFillCalculatorFill } from "react-icons/bs";
import { tablet } from '../responsive';

const Container = styled.div`
/* outline:1px solid gold; */
display:flex;
width:40%;
flex-wrap:wrap;
gap:10px;
max-width:350px;
${tablet({ width: '95%', maxWidth: 'none', alignSelf:'center', justifyContent:'center',marginBottom:'20px'  })}

`
const Wrapper = styled.div`
background-color:#1e2351;
width:150px;
height:150px;

/* padding:10px; */
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

`
const Item = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:90%;

`
const Text = styled.p`
font-size:10px;
`
const H4 = styled.h4`
font-size:15px;
color:#ddc18c;
`
const StackBoke = ({ todayStats, totalCustomers, thisMonthStats, yearlySalesTotal}) => {
  return (
   <Container>
    <Wrapper>
      <Item><Text> Total Customers </Text> <BsPersonPlus style={{color:'#ddc18c'}}  />  </Item>
      <Item><H4> {totalCustomers} </H4></Item>
      <Item> <Text>+14% </Text>  <Text>since last month</Text>   </Item>
    </Wrapper>
    <Wrapper>
    <Item><Text> Sales Today  </Text>  <BsFillCalendar2Fill  style={{color:'#ddc18c'}} /> </Item>
      <Item><H4> {todayStats?.totalSales} </H4></Item>
      <Item> <Text>+21% </Text>  <Text>since last month</Text> </Item>
        </Wrapper>
        <Wrapper>
        <Item><Text> Monthly sales </Text>  <BsEnvelope  style={{color:'#ddc18c'}} /></Item>
      <Item><H4> {thisMonthStats?.totalSales} </H4></Item>
      <Item> <Text>+5% </Text>  <Text>since last month</Text> </Item>
        </Wrapper>
        <Wrapper>
        <Item><Text> yearly sales  </Text> <BsFillCalculatorFill  style={{color:'#ddc18c'}} /></Item>
      <Item><H4> {yearlySalesTotal} </H4></Item>
      <Item> <Text>+43% </Text>  <Text>since last month</Text> </Item>
        
        </Wrapper>

   </Container>
  )
}

export default StackBoke