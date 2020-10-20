import React from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import ClientMain from './Client/ClientMain'
import ActionMain from './Actions/ActionsMain'
import Dashboard from './Dashboard/Dashboard'

export default function Home() { 
    
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
}