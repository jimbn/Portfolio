import React, { useState } from 'react';

import './App.css'
import Header from './components/Header';
import Page from './components/Page';
import Footer from './components/Footer';
import Nav from './components/Nav';


function App() {

    const [pages] = useState ([
        { name: "About me" },
        { name: "Project" },
        { name: "Contact" },
        { name: "Resume" }
    ]);

    const [ currentPage, setCurrentPage ] = useState(pages[0]);

    return(
    <div className='wrapper'>
        <Header>
            <Nav  
                pages={pages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            ></Nav>
        </Header>
        <main>
            <Page currentPage={currentPage}></Page>
        </main>
        <Footer/>
    </div>
    )
}


export default App;
