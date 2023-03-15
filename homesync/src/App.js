import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { useEffect,useState } from 'react';
import Chat from './components/Chat'
import Login from './components/Login';
import styled from 'styled-components'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import db from './Firebase'
import { onSnapshot, collection, query} from "firebase/firestore";

function App() {
  
  const [rooms,setRooms] = useState([])

  const getChannels = () =>{
    const q = query(collection(db, "room"))
       onSnapshot(q, (querySnapshot) => {
       setRooms(querySnapshot.docs.map(d => {
              return {id:d.id,name:d.data().name};
          }));
     });
  }

  useEffect(()=>{
     getChannels()
  },[]);

 
  return (
    <div className="App">
       <Router>
         <Container>
           <Header/> 
         <Main>
            <Sidebar rooms={rooms}/>
         <Routes>
            <Route path="/room" element={<Chat/>}/> 
            <Route path="/" element={<Login/>}/>
         </Routes>
         </Main>
         </Container>
      </Router> 
    </div>
  );
}

export default App;

const Container = styled.div`
     width:100%;
     height:100vh;
     display:grid;
     grid-template-rows:38px auto;
   `

const Main = styled.div`
     display:grid;
     grid-template-columns: 260px auto;
  `