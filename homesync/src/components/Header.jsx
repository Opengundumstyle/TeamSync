import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function Header() {
  return (
    <Container>
        <Main>
              <AccessTimeIcon/>
              <SearchContariner>
                   <Search>
                      <input type="text" placeholder='Search...'/>
                   </Search>
              </SearchContariner>
              <HelpOutlineIcon/>
        </Main>
        <UserContainer>
              <Name>
                  Brian
              </Name>
              <UserImage>
                   <img src="https://i.pinimg.com/564x/71/94/58/71945842e6985f179772c11a65bfb3c9.jpg" />
              </UserImage>
        </UserContainer>
    </Container>
   
  )
}

export default Header

const Container = styled.div`
        background:#350d36;
        color:white;
        display:flex;
        align-items:center;
        justify-content:center;
        position:relative;
        `

const Main = styled.div`
       display:flex;
       margin-right:16px;
       margin-left:16px;
       `

const SearchContariner = styled.div`
      min-width:400px;
      margin-left:16px;
      margin-right:16px;`

const Search = styled.div`
     box-shadow: inset 0 0 0 1px rbg(104 74 104);
     width:100%;
     border-radius:6px;
     display:flex;
     align-items:center;
     input{
         background-color: transparent;
         border:none;
         padding-left:8px;
         padding-right:8px;
         color:white;
         padding-top:4px;
         padding-bottom:4px;
      }
      
      input:focus{
         outline:none;
      }
      `


const UserContainer = styled.div`
      display:flex;
      align-items:center;
      padding-right: 16px;
      position:absolute;
      right:0;
      `

const Name = styled.div`
     padding-right:16px;`

const UserImage = styled.div`
           width: 28px;
           height:28px;
           border: 2px solid white;
           border-radius:3px;
           img{
             width:100%;
           }
       `