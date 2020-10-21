import React from 'react';
import './App.css';
import Home from './components/Home';
import { observer, inject } from 'mobx-react'


const App = inject('alldata') (observer((props) =>{
  return (
    <div className="App">
       <Home/>
    </div>
  )
}))

export default App