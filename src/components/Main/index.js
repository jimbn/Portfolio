import React, { useState } from "react";

import Header from '../Header';
import Page from '../Page';
import Footer from '../Footer';
import Nav from '../Nav';

function Main() {
  const [pages] = useState ([
    { name: "About Me" },
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
      <Footer/>
    </div>

  )
}

export default Main;