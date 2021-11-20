import React, { useState } from 'react';
import Card from '../Components/Card/Card';
import books from "../data/books.json";
import Fuse from "fuse.js";
import Search from '../Components/Search/Search';



function Blog() {
	const [data, setData] = useState(books);

  	const searchData = (pattern) => {
  		const fuse = new Fuse(data, {
	      keys: ["title", "author"],
	    });
	  	const result = fuse.search(pattern);
	    const matches = [];

	    if (!pattern) {
	      setData(books);
	      return;
	    }

	    if (!result.length) {
	      setData([]);
	    } else {
	      result.forEach(({item}) => {
	        matches.push(item);
	      });
	      setData(matches);
	    }
  	};
    return (
        <div>
	      <h1 className="Title">My Favorite books</h1>
	      <Search 
	      	placeholder="Search"
        	onChange={(e) => searchData(e.target.value)}
          />
	      

	      <div className="Container">
	        {data.map((item) => (
	          <Card {...item} key={item.title} />
	        ))}
	      </div>
    	</div>
    );
}

export default Blog;