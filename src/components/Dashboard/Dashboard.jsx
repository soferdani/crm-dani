import React from 'react'
import { observer } from 'mobx-react'
import Badges from './Badges'
import Charts from './Charts'

const Dashboard = observer((props) => { 
    
    
    return (
        <div>
            <Badges></Badges>
            <Charts></Charts>
        </div>
      )
})

export default Dashboard