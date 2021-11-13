import './App.css';
import React, {useState} from 'react';
import Header from "./partials/Header/Header";
import Content from "./partials/Content/Content";
import Asside from "./partials/Asside/Asside";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App">
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Asside />
      <Content isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
    </div>
  );
}

export default App;