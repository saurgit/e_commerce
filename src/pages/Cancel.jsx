import React from 'react'
import styled from "styled-components"
const Container=styled.div`
width:100vw;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
`

export default function Cancel() {
  return (
    <Container>
        <h1>Your payment process got Failed</h1>
    </Container>
  )
}
