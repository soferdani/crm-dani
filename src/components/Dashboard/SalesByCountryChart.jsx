import React from 'react'
import {observer, inject } from 'mobx-react'

const SalesByCountryChart = inject('alldata') (observer((props) =>  { 
    
    
    return (
        <div>
            this is SalesByCountryChart
        </div>
      )
}))

export default SalesByCountryChart 