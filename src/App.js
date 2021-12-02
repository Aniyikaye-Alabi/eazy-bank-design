import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Careers from './components/Career';
import Navigation from './components/Navigation';
import './App.css';




function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/blog' component={Blog} />
          <Route path='/careers' component={Careers} />
          <Route path='/' component={Home} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
