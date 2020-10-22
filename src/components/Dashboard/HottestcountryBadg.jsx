import React from 'react'
import {observer, inject } from 'mobx-react'

const HottestCountryBadg= inject('alldata') (observer((props) =>  { 
    
    
    return (
        <div>
            this is hettest
        </div>
      )
}))

export default HottestCountryBadg