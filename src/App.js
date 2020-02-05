import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import Index from './components/admin'
import Main from './components/public/main'
import Routes from './components/public/routes';
import { Helmet } from 'react-helmet';

function App(props) {

  
  return (
    <Router>
    <div className="App">
      <Helmet>
        <title>Home</title>
        <meta charSet="utf-8" />
        <meta name="description" content="A React.js application" />
      </Helmet>
        {/* <Navbar /> */}
        {/* <Index /> */}
        
        <Main />
        
    </div>
    </Router>
  );
}




export default  App;
