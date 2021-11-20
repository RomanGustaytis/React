import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Support from './pages/Support';
import Blog from './pages/Blog';
import Header from './partials/Header';
import Aside from './partials/Aside';

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Header />
              <div className="wrapper">
                  <Aside />
                  <div  className="content">
                      <Routes>
                          <Route path="/" element={<Blog />}>
                          </Route>
                          <Route path="/about" element={<About />}>
                          </Route>
                          <Route path="/support" element={<Support />}>
                          </Route>
                      </Routes>
                  </div>
              </div>
          </BrowserRouter>
      </div>
  );
}

export default App;