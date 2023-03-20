import React from 'react';

import Header from '../partials/Header';
import Footer from '../partials/Footer';

import NotFoundBlock from '../partials/NotFoundBlock';

function NotFound() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        <NotFoundBlock />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default NotFound;