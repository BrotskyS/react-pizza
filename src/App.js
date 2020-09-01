import React, {useEffect, useState} from 'react';

import {Header} from './components/index'
import {Home, Cart} from './pages'
import { Route } from 'react-router-dom'
import axios from 'axios'
function App() {
    const [pizzas, setPizzas] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            setPizzas(data.pizzas)
        })
    }, [])
  return (
    <div className="wrapper">
      <Header />
      <Route path='/' render={() => <Home items={pizzas}/>} exact/>
      <Route path='/cart' component={Cart} exact/>
    </div>
  );
}

export default App;
