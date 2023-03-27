import React from 'react';

import './styles.css';
import TopNavBar from './components/TopNavBar';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Overview from './components/overview';
import Content from './components/content';
import Footer from './components/footer';
// import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <TopNavBar />
      <NavBar />
      <Main/>
      <Overview/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
