import React, { useState } from "react";
import Header from './components/Header';
import Page from './components/Page';
import Nav from './components/Nav';


function App() {

    const [pages] = useState ([
        { name: "About" },
        { name: "Project" },
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
        </div>
    )
}


export default App;
