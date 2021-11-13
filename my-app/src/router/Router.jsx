import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';


function Router() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/manatee">Manatee</Link></li>
            <li><Link to="/narwhal">Narwhal</Link></li>
            <li><Link to="/whale">Whale</Link></li>
            <li><Link to="/whale/beluga">Beluga Whale</Link></li>
            <li><Link to="/whale/blue">Blue Whale</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/manatee">
            
          </Route>
          <Route path="/narwhal">
            
          </Route>
          <Route exact path="/whale">
            
          </Route>
          <Route path="/whale/:type" >
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;