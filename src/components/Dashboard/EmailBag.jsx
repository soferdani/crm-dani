import React from 'react'
import {observer, inject } from 'mobx-react'

const EmailBag = inject('alldata') (observer((props) =>  { 
    
    
    return (
        <div>
            this is email bag
        </div>
      )
}))

export default EmailBag 