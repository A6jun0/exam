import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Add from './components/Add';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App-header'>
      
       <Navbar/>
       <Routes>
        <Route path='/Add' element={<Add/>}></Route>
       </Routes>
       <center> <Add/></center>
      
    </div>
    
    
  );
}

export default App;
