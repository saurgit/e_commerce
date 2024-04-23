import React from 'react'

const Container=styeled.div`
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
