import React from 'react'
import {observer, inject } from 'mobx-react'
import ClientBadg from './ClientBag'
import EmailBag from './EmailBag'
import OutstandingBag from './OutstandingBag'
import HottestCountryBadg from './HottestcountryBadg'

const Badges = inject('alldata') (observer((props) =>  { 
    
    
    return (
        <div>
            <ClientBadg></ClientBadg>
            <EmailBag></EmailBag>
            <OutstandingBag></OutstandingBag>
            <HottestCountryBadg></HottestCountryBadg>
        </div>
      )
}))

export default Badges