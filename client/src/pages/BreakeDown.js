import React from 'react'
import styled from 'styled-components'
import Breakedown from '../components/Breakedown'
import Nav from '../components/Nav'
import Title from '../components/Title'

const Container = styled.div`
/* width:75%; */
flex:1;

`
const Wrapper = styled.div`
height:500px; 
width:100%;
`
const BreakeDown = () => {
  return (
    <Container>
      <Nav/>
      <Title text='Breake down of sales by category' title='Breake down' />
      <Wrapper>
        <Breakedown/>
      </Wrapper>
    </Container>
  )
}

export default BreakeDown