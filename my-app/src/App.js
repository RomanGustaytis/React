import './App.css';
import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'
import Header from './partials/Header';
import Aside from './partials/Aside';
import { message as messageState, MessageContext } from './context/MessageContext'


const Support = lazy(() => import('./pages/Support'));
const Blog = lazy(() => import('./pages/Blog'));
const About = lazy(() => import('./pages/About'));

function App() {
	const [message, setMessage] = useState(messageState);

  useEffect(() => {
    setTimeout(() => {
        setMessage({ ...message, welcome: 'If you register/log in, you will see more.' })
    }, 5000)
  }, [])

  return (
      <div className="App">
	       <Provider store={store}>
	            <BrowserRouter>
	                <Header />
	                <div className="wrapper">
	                    <MessageContext.Provider value={{ message, updateState: setMessage }}>
			             	<Aside />
			            </MessageContext.Provider>

	                    <div className="content">
	                    <Suspense fallback={<div>Загрузка...</div>}>
					        <Routes>
					        	<Route path="/" element={<Blog />}>
	                            </Route>
	                            <Route path="/about" element={<About />}>
	                            </Route>
	                            <Route path="/support" element={<Support />}>
	                            </Route>
					        </Routes>
					    </Suspense>
	                        
	                    </div>
	                </div>
	            </BrowserRouter>
          </Provider>
      </div>
  );
}

export default App;