import React from 'react';
import { connect } from 'react-redux';

import Header from '../header/header';
import HomeView from '../home-view/home-view';
import CreateView from '../create-view/create-view';
import CloudEdit from '../cloud-edit/cloud-edit';
import CloudFocus from '../cloud-focus/cloud-focus';
import LibraryView from '../library-view/library-view';

export function App(props) {

  const view = props.view;

  let page = null;

  if (view === 'library') {
    page = <LibraryView />
  } 
  else if (view === 'cloudEdit') {
    page = <CloudEdit />
  }
  else if (view === 'focus') {
   page = <CloudFocus />  
  }
  else if (view === 'create') {
    page = <CreateView />
  }
  else {
    page = <HomeView />
  }

  return (
    <div className="root-div">
      <Header />
      <main role="main">
        {page}
      </main>
    </div>
  );
}

const mapStateToProps = state => ({
  view: state.view
});

export default connect(mapStateToProps)(App);
