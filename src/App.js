import React from 'react';
import { Navbar, Footer} from './components';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {Home,Products,Features, Clients} from './pages';
const App = () => {
  return (
  <Router>
  <Navbar/>
  <GlobalStyle/>
  <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/features' element={<Features/>}/>
      <Route path='/clients' element={<Clients/>}/>
  </Routes>
  <Footer/>
  </Router>

    
  );
}

export default App;