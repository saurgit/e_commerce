import React from 'react'
import styled from "styled-components";

const Container=styled.div`
width:100vw;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
`
const H1=styled.h1``

export default function Cancel() {
  return (
    <Container>
        <H1>Your payment process got Failed</H1>
    </Container>
  )
}
