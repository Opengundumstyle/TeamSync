import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Chat from './components/Chat'
import Login from './components/Login';
import styled from 'styled-components'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App">
       <Router>
         <Container>
           <Header/> 
         <Main>
            <Sidebar/>
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
     background:orange;
     display:grid;
     grid-template-rows:38px auto;
   `

const Main = styled.div`
     background:blue;
     display:grid;
     grid-template-columns: 260px auto;
  `