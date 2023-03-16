import React from 'react'
import styled from 'styled-components'
import {provider} from '../Firebase'
// import signInWithPopup from 'firebase/auth'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Login(props) {

const signIn = () =>{
      const auth = getAuth()
      signInWithPopup(auth,provider)
      .then((result) =>{
        const credential = GoogleAuthProvider.credentialFromResult(result);
         const token = credential.accessToken;
        // The signed-in user info.
          const user = result.user;
          const newUser = {
               name:user.displayName,
               photo:user.photoURL
          }
          localStorage.setItem('user', JSON.stringify(newUser))
          props.setUser(newUser)
          
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error); 
      });
      
}

  return (
    <Container>
        <Content>
            <LogoImg src='https://www.steel-eye.com/hubfs/Slack%20Logo.png'/>
            <h1>Welcome to TeamSync</h1>
            <SignInButton onClick={()=>signIn()}>
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