import React from 'react'
import {observer, inject } from 'mobx-react'
import TopEmployeeChart from './TopEmployeesChart'
import SalesByCountryChart from './SalesByCountryChart'

const Charts = inject('alldata') (observer((props) =>  { 
    
    
    return (
        <div>
            <TopEmployeeChart></TopEmployeeChart>
            <SalesByCountryChart></SalesByCountryChart>

            
        </div>
      )
}))

export default Charts 