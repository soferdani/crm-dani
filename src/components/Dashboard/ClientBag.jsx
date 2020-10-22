import React from 'react'
import {observer, inject } from 'mobx-react'

const ClientBadg = inject('alldata') (observer((props) =>  { 
    
    
    return (
        <div>
            client bag
        </div>
      )
}))

export default ClientBadg