import React from 'react';
import Card from '../Components/Card/Card';
import Search from '../Components/Search/Search';
import { searchBlog, inputText, dataBlogs } from '../store/reducers/blog'
import { useDispatch, useSelector } from 'react-redux'



function Blog() {
	const dataInput = useSelector(inputText);
	const filterBlogs = useSelector(dataBlogs);
    const dispatch = useDispatch();

    return (
        <div>
	      <h1 className="Title">My Favorite books</h1>
	      <Search 
	      	placeholder="Search"
        	onChange={(e) => dispatch(searchBlog(e.target.value))}
          />
	      <div className="Container">
	        <h3>{dataInput}</h3>
	        {filterBlogs.map((item) => (
	          <Card {...item} key={item.title} />
	        ))}
	      </div>
    	</div>
    );
}

export default Blog;