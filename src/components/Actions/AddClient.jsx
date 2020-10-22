import React, { useState } from 'react'
import {observer, inject } from 'mobx-react'

const AddClient = inject('alldata') (observer((props) =>  { 
    
    const [newClientName, setNewClientName] = useState ('')
    const [newClientSurName, setNewClientSurName] = useState ('')
    const [newClientCountry, setNewClientCountry] = useState ('')
    const [newClientOwner, setNewClientOwner] = useState ('')
    const [newClientEmail, setNewClientEmail] = useState ('')


    const addNewClient = () => {
        props.alldata.addClient(newClientName,newClientSurName,newClientCountry,newClientOwner,newClientEmail)
        console.log(props.alldata.clients[props.alldata.clients.length - 1]);
    }


    return (
        <>
            <div>ADD CLIENT</div>
            <span>First Name</span><input onChange = {(e) => {setNewClientName(e.target.value)}} type="text" />
            <span>surname</span><input onChange = {(e) => {setNewClientSurName(e.target.value)}} type="text" />
            <span>country</span><input onChange = {(e) => {setNewClientCountry(e.target.value)}} type="text" />
            <span>Owner</span><input onChange = {(e) => {setNewClientOwner(e.target.value)}} type="text" />
            <span>Email</span><input onChange = {(e) => {setNewClientEmail(e.target.value)}} type="text" />
            <div><button onClick={addNewClient}>Add Client</button></div>
        </>
      )
}))

export default AddClient