import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'


import Header from './components/Header';
import Footer from './components/Footer'
import Contact from './components/Contact';
import About from './components/About';
import Project from './components/Project';


function App() {

    return(
    <div className='wrapper'>
        <Router> 
            <Header/>
            <Routes>
                <Route path ='/' element={<About/>} />
                <Route path='/Portfolio' element={<Project/>} />
                <Route path='/Contact' elment={<Contact/>} />
            </Routes>
            <Footer/>
        </Router>
    </div>
    )
}


export default App;
