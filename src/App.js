import React from 'react';
import './App.scss';
import { createBrowserHistory } from 'history';
import Header from './components/header/Header';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Landing from './pages/Landing';
import Contact from './pages/Contact';
import Blog from './pages/Blog/Blog';
import WebinarForm from './components/webinarForm/WebinarForm';
import Webinar from './components/webinarForm/Webinar';
import Article from './pages/Blog/Article';
 
var history = createBrowserHistory();
let location = history.location;
function App() {
  return (
    <Router history={history}>
      <Header location={location} />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Landing history={history} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/article" element={<Article />} />
          <Route path="/webinar" element={<Webinar />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
