import './App.css';
import React from'react';
import Home from './Home';
import AdminUtil from './Admin_util';
import {
  Route, Routes,
  NavLink,
  HashRouter
} from "react-router-dom";

function App() {
  return (
<HashRouter>
            <div>
                <h1 className='title'>Simple SPA</h1>
                <ul className="header">
                    <li><NavLink to="/Home">Home</NavLink></li>
                    <li><NavLink to="/Admin_util">Admin Tools</NavLink></li>
                </ul>
            <div className="content">

            <Routes>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/Admin_util" element={<AdminUtil/>}/>
            </Routes>
            </div>
        </div>
        </HashRouter>
  );
}

export default App;
