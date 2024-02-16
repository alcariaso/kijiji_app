import Messages from './components/Messages/Messages';
import Header from './components/Header/Header';
import './App.css';


import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Login from './components/Login/Login'
import Logout from './components/Login/Logout'
import { useEffect } from 'react';
import { gapi } from 'gapi-script';



const clientId = "391910508656-rle8fb2gr1b6k3fu19f60faudgoi3voa.apps.googleusercontent.com";

function App() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };

    gapi.load('client:auth2', start);

  
  return (
    <BrowserRouter>
      <Header/>
  <Login/>
  <Logout/>
      {/* <Messages></Messages> */}
      <Routes>
        <Route path='/' element={<Messages/>}></Route>
       
      </Routes>

    </BrowserRouter>
    
  

    
 
  );
}

export default App;
