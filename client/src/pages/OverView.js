import React, { useState } from 'react'
import styled from 'styled-components'
import Nav from '../components/Nav'
import OverViewLine from '../components/OverViewLine'
import Title from '../components/Title'
  const Container = styled.div`
    height:400px;
    color:black;
    
    width:75%;
  `
  const Select = styled.select`
  border:1px solid grey;
  color:#ffff;
  background-color:transparent;

  `
  const Options = styled.option`
   
   color:black;
   
  `

const OverView = () => {
  const [view, setview] = useState('units')
  

    return (
    <Container>
      <Nav/>
      <Title  title= 'Overview' text= 'Overview of general revenue and profit' />
      <Select onChange={(e)=>{setview(e.target.value)}}  >
        <Options>units</Options>
        <Options>sales</Options>
      </Select>

      <OverViewLine view={view} />
    </Container>
  )
}

export default OverView