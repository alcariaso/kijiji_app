import Messages from './components/Messages/Messages';
import Header from './components/Header/Header';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Login from './components/Login/Login'
// import Logout from './components/Login/Logout'

// import { gapi } from 'gapi-script';



// const clientId = "391910508656-rle8fb2gr1b6k3fu19f60faudgoi3voa.apps.googleusercontent.com";

function App() {


  
  return (
    <>
 
  <Login/>
  </>
 )
  }

export default App;
