import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
display:flex;
justify-content:center;
`
const Logo = styled.p`
color:white;
font-size:20px;
text-transform:uppercase;
`
const Nav = () => {
  return (
    <Container>
        <Logo>
            Admin panel
        </Logo>
    </Container>
  )
}

export default Nav