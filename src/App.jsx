import React from 'react';
import './App.css';
// import Islamic from './Islamic';
import {
  Redirect,
  Switch,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
// import Wakala from './Wakala';

const App = () => {
  return (
    <div className='container'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cart' component={Cart} />
          <Redirect to='/' />
        </Switch>
      </Router>
      {/* <Islamic />
      <Wakala/> */}
    </div>
  );
};

export default App;
