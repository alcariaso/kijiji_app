import Messages from './components/Messages/Messages';
import Header from './components/Header/Header';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
      <Header/>
      <Messages></Messages>
      <Routes>
        {/* <Route path='/Messages' element={<Messages/>}></Route> */}
       
      </Routes>

    </BrowserRouter>
    
  

    
    
    
  );
}

export default App;
