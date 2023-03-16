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
import { getAuth } from 'firebase/auth';


function App() {
  
  const [rooms,setRooms] = useState([])
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')))
  
  const getChannels = () =>{
    const q = query(collection(db, "room"))
       onSnapshot(q, (querySnapshot) => {
       setRooms(querySnapshot.docs.map(d => {
              return {id:d.id,name:d.data().name};
          }));
     });
  }

  const signOut =()=>{
     const auth = getAuth()
     auth.signOut().then(()=>{
         localStorage.removeItem('user')
         setUser(null)
     })
  }


  useEffect(()=>{
     getChannels()
  },[]);

  console.log('log in success',user)
 
  return (
    <div className="App">
       <Router>
           {
            !user? 
              <Login setUser={setUser}/>
              :
              <Container>
               <Header signOut={signOut} user={user}/> 
               <Main>
                  <Sidebar rooms={rooms}/>
               <Routes>
                  <Route path="/room/:channelId" element={<Chat/>}/> 
                  {/* <Route path="/" element={<Login/>}/> */}
                   <Route path="/" element={"Select or Create Channel"}/>
               </Routes>
               </Main>
             </Container>
           }
         
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