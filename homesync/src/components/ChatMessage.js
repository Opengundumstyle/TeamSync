
import React from 'react'
import styled from 'styled-components'

function ChatMessage() {

  return (
    <Container>
        <UserAvatar>
            <img src="https://gw.alicdn.com/i1/3358250160/O1CN01cdfsDN1D3JzEOWEMm_!!3358250160.jpg_300x300Q75.jpg_.webp"/>
        </UserAvatar>
        <MessageContent>
             <Name>
                 Horace
                 <span>4:02 PM</span>
             </Name>
             <Text>
               Hi, long time no see. 
             </Text>
        </MessageContent>

    </Container>
  )
}

export default ChatMessage

const Container = styled.div`
    padding:8px 20px;
    display:flex;
    align-items:center;
    `

const UserAvatar = styled.div`
    width:36px;
    height:36px;
    border-radius:2px;
    overflow:hidden;
    margin-right:8px;
    img{
       width:100%
      
    }
    `

const MessageContent = styled.div`
      display:flex;
      flex-direction:column;`


const Name = styled.span`
      font-weight:900;
      font-size: 15px;
      line-height:1.4;
      
      span{
        margin-left:8px;
         font-weight:400;
         color:rgba(97,96,97);
         font-size:13px;
      }`

const Text= styled.span``
