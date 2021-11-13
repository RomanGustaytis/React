
import React from 'react';
import Router from "../../router/Router";
import Login from "../../Login/Login";
import './Header.css';


const Header = (props) => {
	
    return (
        <div className="header">  
            <h1>Header</h1>
            <Login isAuthenticated={props.isAuthenticated} setIsAuthenticated={props.setIsAuthenticated} />
            <Router />
        </div>
    )
}

export default Header;