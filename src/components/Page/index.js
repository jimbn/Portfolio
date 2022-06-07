import React from 'react';
import PageContent from '../PageContent';
import About from '../About';
import Project from '../Project';
import Contact from '../Contact';
import Resume from '../Resume';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Page({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'About me':
        return <About />;
      case 'Project':
        return <Project />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <section>
      <h2>{capitalizeFirstLetter(currentPage.name)}</h2>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
export default Page;
