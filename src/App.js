
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './components/Login/Login';
import MessagePage from './pages/messagePage';

function App() {


  
  return (
    <BrowserRouter>
    
      <Routes>
         <Route path='/Login' element={<Login/>}></Route>
        <Route path='/messagePage' element={<MessagePage/>}></Route>
      </Routes>
    </BrowserRouter>
    
  );

  }

export default App;
