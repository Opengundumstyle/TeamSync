import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <Content>
            <LogoImg src='https://www.steel-eye.com/hubfs/Slack%20Logo.png'/>
            <h1>Welcome to TeamSync</h1>
            <SignInButton>
               Sign In With Google
            </SignInButton>
        </Content>
    </Container>
  )
}

export default Login


const Container = styled.div`
      width:100%;
      height:100vh;
      background-color:#f8f8f8;
      display:flex;
      justify-content:center;
      align-items:center`

const Content = styled.div`
      background-color: white;
       height:50%;
       width:30%;
       z-index:1;
       padding:100px;
       display:flex;
       flex-direction:column;
       justify-content:center;
       align-items:center;
       border-radius:10px;
       gap:16px;
       box-shadow: 0 1px 3px rgb(0 0 0 / 12%),0 1px 2px rgb(0 0 0 / 24%);
       `

const LogoImg = styled.img`
      height:100px;
      `

const SignInButton = styled.button`
      margin-top: 50px;
      cursor:pointer;
      background-color:#0a8d48;
      color:white;
      border:none;
      border-radius:5px;
      height:40px;
      font-size:15px;`