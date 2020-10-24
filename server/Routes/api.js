const express = require('express')
const router = express.Router()


const Sequelize = require('sequelize')   
const sequelize = new Sequelize('mysql://root:@localhost/crm')


router.get('/getAllClients', async (req, res) => { //get all data
    const query = 'select * from clients;'
    const responseFromDB = await sequelize.query(query)
    res.send(responseFromDB)
})

router.get('/getCountry/:countryId', async (req, res) => {
    const countryId = req.params.countryId    
    res.send(countryId)
})

module.exports = router