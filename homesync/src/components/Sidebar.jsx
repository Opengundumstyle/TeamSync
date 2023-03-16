import React from 'react'
import styled from 'styled-components'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { sidebarItemsData } from '../data/SidebarData'; 
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import db from '../Firebase'
import {  collection,addDoc} from "firebase/firestore";
import {useNavigate} from 'react-router-dom'

function Sidebar(props) {

  const navigate = useNavigate()

  const goToChannel=(id)=>{
       if(id){
            console.log(id)
            navigate(`/room/${id}`)
       }
  }

  const addChannel =()=>{
    const promptName = prompt("Enter Channel Name");
    if (promptName) {
      const collectionRef = collection(db, "room");
      addDoc(collectionRef, { name: promptName })
        .then(() => {
          console.log("add-channel-success!");
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    }
  }
 
  return (
    <Container>
      <WorkspaceContainer>
          <Name>
           Opengundumstyle
          </Name>
          <NewMessage>
               <BorderColorOutlinedIcon/>
          </NewMessage>
      </WorkspaceContainer>
      <MainChannels>
        {
           sidebarItemsData.map(Item =>(
            <MainChannelItem>
            {Item.icon}
            {Item.text}
          </MainChannelItem>
           ))
        }
        
      </MainChannels>
      <ChannelsContaienr>
           <NewChannelContainer>
             <div>
              Channels
             </div>
             <AddChannel onClick={addChannel}/>
            
           </NewChannelContainer>
            <ChannelList>
              {
                props.rooms.map(item =>(
                  <Channel onClick={()=>goToChannel(item.id)}>
                  # {item.name}
                  </Channel>
                ))
              }
            </ChannelList>
         
      </ChannelsContaienr>
    </Container>
  )
}

export default Sidebar


const Container = styled.div`
     background: #3F0E40`

const WorkspaceContainer = styled.div`
    color:white;
    height:64px;
    display:flex;
    align-items:center;
    padding-left:19px;
    justify-content: space-between;
    border-bottom: 1px solid #532753;
    
 `

const Name = styled.div`
 `

const NewMessage = styled.div`
     width:36px;
     height:36px;
     background:white;
     color:#3F0E40;
     fill:#3F0E40;
     display:flex;
     justify-content:center;
     align-items: center;
     border-radius: 50%;
     margin-right:20px;
     cursor:pointer;
 `

 const MainChannels = styled.div`
  padding-top: 20px`

 const MainChannelItem = styled.div`
    color:rgb(188,171,188);
    display:grid;
    grid-template-columns: 15% auto;
    height:28px;
    align-items:center;
    padding-left:19px;
    cursor:pointer;
    :hover{
      background: #350D36;
  }`

const ChannelsContaienr = styled.div`
     color:rgb(188,171,188); 
     margin-top:10px; `

const NewChannelContainer = styled.div`
      display:flex;
      justify-content:space-between;
      align-items:center;
      height:28px;
      padding-left:19px;
      padding-right:12px;
       `

const ChannelList = styled.div``

const Channel = styled.div`
       height:28px;
       display:flex;
       align-items:center;
       padding-left:19px;
       cursor:pointer;
       :hover{
           background: #350D36;
       }`


const AddChannel = styled(AddOutlinedIcon)`
     cursor:pointer;
`