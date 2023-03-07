import styled from '@emotion/styled'
import React from 'react'

const Container = styled.div``
const H3 = styled.h3`
text-transform:uppercase;
font-weight:500;
margin-bottom:-1%;
color:#ffff;

`
const Text = styled.p`
color:#ddc18c;
font-size:11px;

`
const Title = ({title,text}) => {
  return (
    <Container>
     <H3>{title}</H3>
     <Text>{text}</Text>
    </Container>
  )
}

export default Title