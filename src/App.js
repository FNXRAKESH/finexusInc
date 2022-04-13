import React from 'react';
import './App.scss';
import { createBrowserHistory } from 'history';
import Header from './components/header/Header';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Landing from './pages/Landing';
import Contact from './pages/Contact';
 
var history = createBrowserHistory();
let location = history.location;
function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Landing history={history}/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
