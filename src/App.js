import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import './Style.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Page404 from './Page404';
import UserPage from './UserPage';
import Contact from './Contact';
import Company from './Company';

function App() {
 
  return (
    <div className="App">
        
      <Router>
        <Routes>
            <Route excat path='/' element={<Home/>}/>
            <Route excat path='/contact/' element={<Contact/>}>
                <Route path='company' element={<Company/>}/>
            </Route>
            <Route excat path='/*' element={<Page404/>}/>
        </Routes>
      </Router>

    </div>
  );  
  
}

export default App;
