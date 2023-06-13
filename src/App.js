import Menu from './componets/Menu';

import './App.css';

import Peter from './pages/Peter'
import Drax from './pages/Drax'
import Gamora from './pages/Gamora'
import Groot from './pages/Groot'
import Rocket from './pages/Rocket'

import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';




function App() {

  

  return (
    
    <Router>
 
      <Menu/>
        <Routes >
          <Route path='/' element={<Peter/>}/>
          <Route path='/Drax' element={<Drax/>}/>
          <Route path='/Gamora' element={<Gamora/>}/>
          <Route path='/Groot' element={<Groot/>}/>
          <Route path='/Rocket' element={<Rocket/>}/>
        </Routes>
      
   
    </Router>
    
  );
}

export default App;
