import React from 'react'
import {observer, inject } from 'mobx-react'
import UpdateClient from './UpdateClient'
import AddClient from './AddClient'


const ActionsPage = inject('alldata') (observer((props) => { 
    
    return (
        <div>
            <UpdateClient></UpdateClient>
            <AddClient></AddClient>
        </div>
      )
}))

export default ActionsPage