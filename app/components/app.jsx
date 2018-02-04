import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './home.jsx';
import Login from './login.jsx';
// import DashBoard from './dashboard.jsx';
import About from './about.jsx';
class App extends Component{

    render(){
      return(
        <Router >
          <div>
            <Route path='/' component={Home} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
          </div>  
        </Router>      
      )
    }
};

export default App;