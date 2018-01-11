import React from 'react';
import LibraryCarousel from './library-carousel';
import LibraryList from './library-list';

export default function LibraryView(props) {
  return (
    <section className="library-view">
      <div className="library-list">
        <LibraryList />
      </div>
    </section>
  );
}

// <div className="library-carousel">
// <LibraryCarousel />
// </div>