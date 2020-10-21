import React from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import ClientMain from './Client/ClientMain'
import ActionMain from './Actions/ActionsMain'
import Dashboard from './Dashboard/Dashboard'
import {observer, inject } from 'mobx-react'

const Home = inject('alldata') (observer((props) =>{ 
    
    return (
        <Router>
            <div className='navBar'>
                <Link to='/'>Clients</Link> 
                <Link to='/actions'>Actions</Link> 
                <Link to='/analytics'>Analytics</Link> 
            </div>
            <Route exact path="/" component={ClientMain}/>
            <Route exact path="/actions" component={ActionMain}/>
            <Route exact path="/analytics" component={Dashboard}/>
        </Router> 
      )
}))

export default Home