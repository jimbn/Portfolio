import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import Home from './pages/Home';
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import Header from "./components/Header";
// import Nav from "./components/Nav";
// import Portfolio from "./components/Portfolio";
// import Project from "./components/Project";
// import Resume from "./components/Resume";

function App() {
    return (
    <>
     
    <Router>
        <Routes>
            <Route
                path='/'
                element={ <Home/> }
            /> 
            {/* <Route
                path='/AboutMe'
                element={ <About/> }
            />
            <Route
                path='/AboutMe/Resume'
            />
            <Route
                path='/Project'
                element={ <Project/> }
            />
            <Route
                path='/Project/:id'
                element={ <SingleProject/> }
            />  */}
         </Routes>
    </Router> 
    </>
    )
}

export default App;
