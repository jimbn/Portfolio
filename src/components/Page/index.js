import React from "react";

import PageContent from '../PageContent';
import Welcome from '../Welcome';
import About from '../About';
import Project from '../Project';
// import Contact from '../Contact';
import Resume from '../Resume';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Page({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case'Welcome':
        return <Welcome />
      case 'About Me':
        return <About />;
      case 'Project':
        return <Project />;
    //   case 'Contact':
    //     return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <Welcome />;
    }
  };

  return (
    <section>
      <h2>{capitalizeFirstLetter(currentPage.name)}</h2>
      <div className="">
      <PageContent>{renderPage()}</PageContent>
      </div>
    </section>
  );
}
export default Page;
