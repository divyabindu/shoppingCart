import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Products from './components/Products';
import Register from './components/Register';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/products' component={Products} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
