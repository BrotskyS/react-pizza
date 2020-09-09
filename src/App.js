import React, {useEffect, useState} from 'react';
import { useDispatch} from 'react-redux'

import {Header} from './components/index'
import {Home, Cart} from './pages'
import { Route } from 'react-router-dom'
import axios from 'axios'
import {setPizzas } from './redux/actions/pizzas'


function App(){
    const dispatch = useDispatch()


    useEffect(() => {
        axios.get('http://localhost:3001/pizzas').then(({data}) => {
            dispatch(setPizzas(data))
        })
    }, [])

    return(
        <div className="wrapper">
            <Header />
            <Route path='/' component={Home} exact/>
            <Route path='/cart' component={Cart} exact/>
        </div>
    )
}


export default App;
