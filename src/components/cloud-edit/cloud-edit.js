import React from 'react';

import Wordcloud from '../word-cloud/word-cloud';

export default function CloudEdit(props) {
  return (
    <section className="cloud-view">
      <div className="cloud-container">
        <Wordcloud />
      </div>
    </section>
  );
}