import React from 'react'
import {observer, inject } from 'mobx-react'

const AddClient= inject('alldata') (observer((props) =>  { 
    
    
    return (
        <>
            <div>ADD CLIENT</div>
            <span>First Name</span><input type="text" />
            <span>surname</span><input type="text" />
            <span>country</span><input type="text" />
            <span>Owner</span><input type="text" />
            <div><button>Add Client</button></div>
        </>
      )
}))

export default AddClient