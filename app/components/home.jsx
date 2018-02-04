import React , {Component} from 'react'; 
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
class Home extends Component{
    render(){
        return (
            <div>
                <li><Link to="/">Home</Link></li>                
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/about">About</Link></li>
            </div>
        );
    }
}
export default Home;