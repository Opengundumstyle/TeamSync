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
                   <img src="https://i.pinimg.com/564x/71/94/58/71945842e6985f179772c11a65bfb3c9.jpg" width="30px" />
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
        justify-content:space-between;
        `

const Main = styled.div`
       display:flex
       `

const SearchContariner = styled.div``

const Search = styled.div``


const UserContainer = styled.div`
      display:flex;
      align-items:center;`

const Name = styled.div``

const UserImage = styled.div`
       `