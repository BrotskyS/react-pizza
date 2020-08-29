import React from 'react';

import {Header} from './components/index'
import {Home, Cart} from './pages'
import { Route} from 'react-router-dom'
function App() {
  return (
    <div className="wrapper">
      <Header />
      <Route path='/' component={Home} exact/>
      <Route path='/cart' component={Cart} exact/>
    </div>
  );
}

export default App;
