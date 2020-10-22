import React from 'react'
import {observer, inject } from 'mobx-react'

const OutstandingBag= inject('alldata') (observer((props) =>  { 
    
    
    return (
        <div>
            this is Outstanding badg
        </div>
      )
}))

export default OutstandingBag