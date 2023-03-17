
import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Chatinput from './Chatinput';
import ChatMessage from './ChatMessage';
import db from '../Firebase'
import {useParams} from 'react-router-dom'
import { getDoc,addDoc,doc,collection, query, orderBy,onSnapshot,Timestamp } from "firebase/firestore";


function Chat({user}) {
    
let {channelId} = useParams()
const [channel,setChannel] = useState('') 
const [messages,setMessages] = useState([])

const getMessages =()=> {

     const messagesRef = collection(db,"room",channelId,"messages")
     const roomMessagesQuery = query(messagesRef,orderBy('timestamp','asc'))
     
     onSnapshot(roomMessagesQuery,(querySnapshot)=>{
            const messages = querySnapshot.docs.map((doc) => doc.data())
          
            setMessages(messages)
        })
     }

const sendMessage =(text)=>{
       const timestamp = Timestamp.now()
       if(channelId){
             let payload = {
                 text:text,
                 timestamp:timestamp, 
                 user:user.name,
                 userImage:user.photo
             }

             const messagesRef = collection(db, "room", channelId, "messages");
          
              addDoc(messagesRef, payload)
               .then((docRef) => {
                 console.log("Document written with ID: ", docRef.id);
               })
               .catch((error) => {
                 console.error("Error adding document: ", error);
               });

             console.log(payload)
       }
}




const getChannel = () => {

     const documentRef = doc(db, "room", channelId);
     
     getDoc(documentRef)
       .then((doc) => {
         if (doc.exists()) {
            setChannel(doc.data())
         } else {
           console.log("No such document!");
         }
       })
       .catch((error) => {
         console.log("Error getting document:", error);
       });

     };

  
     useEffect(()=>{
          getChannel();
          getMessages();
     },[channelId])
   


  
  return (
    <Container>
         <Header>
              <Channel>
                   <ChannelName>
                     #{channel && channel.name}
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
               {
                 messages.length > 0 && 
                 messages.map((data,index)=>(
                    <ChatMessage
                       text = {data.text}
                       name =  {data.user}
                       image = {data.userImage}
                       timestamp = {data.timestamp}
                     />
                        
                     ))
               }
               
         </MessageContainer>
         <Chatinput sendMessage = {sendMessage}/>

    </Container>
  )
}

export default Chat

const Container = styled.div`
     display:grid;
     grid-template-rows: 64px auto min-content;
     min-height:0;`

const Header = styled.div`
      padding-left:20px;
      padding-right:20px;
      display:flex;
      align-items:center;
      border-bottom:1px solid rgb(83,39,83,.13);
      justify-content:space-between;
   `

const MessageContainer = styled.div`
      display:flex;
      flex-direction:column;
      overflow-y:scroll`

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

