
import React from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Chatinput from './Chatinput';


function chat() {
  return (
    <Container>
         <Header>
              <Channel>
                   <ChannelName>
                      # Opengundumstyle
                   </ChannelName>
                   <ChannelInfo>
                       We do what we do 
                   </ChannelInfo>
              </Channel>
              <ChannelDetails>
                   <div>
                    Details
                   </div>
                    <InfoOutlinedIcon/>
              </ChannelDetails>
         </Header>
         <MessageContainer>

         </MessageContainer>
         <Chatinput/>

    </Container>
  )
}

export default chat

const Container = styled.div`
     display:grid;
     grid-template-rows: 64px auto min-content;`

const Header = styled.div`
      padding-left:20px;
      padding-right:20px;
      display:flex;
      align-items:center;
      border-bottom:1px solid rgb(83,39,83,.13);
      justify-content:space-between;
   `

const MessageContainer = styled.div``

const Channel = styled.div``

const ChannelDetails = styled.div`
       display:flex;
       gap:5px;
       align-items:center;
       color:#606060;`


const ChannelName = styled.div`
     font-weight:700;
     `

const ChannelInfo = styled.div`
    font-weight:400;
    color:#606060;
    font-size:13px;
    margin-top:8px;`

