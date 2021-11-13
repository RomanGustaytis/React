import React from 'react';
import Post from "./Post/Post";
import './Content.css';

const Content = (props) => {
	
	if (props.isAuthenticated || localStorage.getItem('username') && localStorage.getItem('password')) {
		return (
	        <div className="content">
	        	<Post />
	        </div>
    	);
	}
    return (
        <div className="content">
        	Empty
        </div>
    );
}

export default Content;