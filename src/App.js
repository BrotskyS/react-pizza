import React, {useEffect, useState} from 'react';
import{connect} from 'react-redux'

import {Header} from './components/index'
import {Home, Cart} from './pages'
import { Route } from 'react-router-dom'
import axios from 'axios'
import {setPizzas as setPizzasAction} from './redux/actions/pizzas'


// function App() {
//     const [pizzas, setPizzas] = useState([])
//
//     useEffect(() => {
//         axios.get('http://localhost:3000/db.json').then(({data}) => {
//             setPizzas(data.pizzas)
//         })
//     }, [])
//   return (
//     <div className="wrapper">
//       <Header />
//       <Route path='/' render={() => <Home items={pizzas}/>} exact/>
//       <Route path='/cart' component={Cart} exact/>
//     </div>
//   );
// }
class App extends React.Component{
    componentDidMount() {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            this.props.sohranitPizi(data.pizzas)
        })
    }

    render() {
        return(
            <div className="wrapper">
                <Header />
                <Route path='/' render={() => <Home items={this.props.items} />} exact/>
                <Route path='/cart' component={Cart} exact/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        items: state.pizzas.items,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        sohranitPizi: (items) => dispatch(setPizzasAction(items)),
        dispatch
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
