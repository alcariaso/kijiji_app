import Messages from './components/Messages/Messages';
import Header from './components/Header/Header';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './components/Login/Login'

function App() {


  
  return (
    <BrowserRouter>
      <Header/>
      <Login/>
      <Routes>
        <Route path='/' element={<Messages/>}></Route>
      </Routes>
    </BrowserRouter>
    
  );

  }

export default App;
