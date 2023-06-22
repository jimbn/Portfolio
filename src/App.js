import React, { useState } from "react";

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Clock from "./components/Clock";

import './App.css';

function App() {

  const [pages] = useState ([
    { name: "About" },
    { name: "Project" },
    { name: "Resume" }
  ]);

  const [ currentPage, setCurrentPage ] = useState( pages[0] );

  return (
    <div className=""  >
      
      <Header
        pages={pages}
        setCurrentPage={setCurrentPage}
      />
      <Clock/>
      <Main currentPage={currentPage}/>
      <Footer/>
    </div>
  );
}

export default App;
