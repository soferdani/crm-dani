import React, { useEffect, useState } from 'react'
import {observer, inject } from 'mobx-react'

const UpdateClient = inject('alldata') (observer((props) =>  { 
    //this is client search logic
    const [searchClient, setSearchClient ] = useState ('')
    const [searchResult, setSearchResult] = useState([])
    const fullNames = props.alldata.clients.map(c => `${c.firstName} ${c.surname}`);
    useEffect(() => {
        const result = fullNames.filter(p =>
            p.toLowerCase().includes(searchClient) || p.includes(searchClient)
        )
        setSearchResult(result)
    },[searchClient])
    // this is owner search logic
    const [searchOwner, setSearchOwner] = useState('')
    const [ownerResult, setOwnerResult] = useState([])

    const allOwners = []
    for (let i of props.alldata.clients) {
        if (!allOwners.includes(i.owner)) {
            allOwners.push(i.owner)
        }
    }
    
    useEffect(() => {
        const ownerResult = allOwners.filter(o => 
            o.toLowerCase().includes(searchOwner) || o.includes(searchOwner)    
        )
        setOwnerResult(ownerResult)
    },[searchOwner])

    //Submit new Owner

    const submitNewOwner = () => {
        //this will be in the backend 
    }

    return (
    <div>
        <div>UPDATE</div>
            <span>client</span><input
                onChange={(e) => setSearchClient(e.target.value)}
                placeholder = "Search"
                value={searchClient}
                type="text"
                list='client' />
            <datalist id='client'>{searchResult.map(i => <option value={i} >{i}</option>)}</datalist>
        <div>
            <label>transfer ownership to</label>
            <input
                list='owner'
                onChange={(e) => setSearchOwner(e.target.value)}
                value={searchOwner}
                type="text" />
            <datalist id='owner'>{ownerResult.map(i => <option value={i} >{i}</option>)}</datalist>
            <button onClick={submitNewOwner}>submit</button>    
        </div>
        <div>
        <label for="cars">send email:</label>
            <select name="email" id="email">
                <option value="a">a</option>
                <option value="b">b</option>
                <option value="c">c</option>
                <option value="e">e</option>
                </select>
                <button>submit</button>
            </div>
            <button>Declere Sail</button>
            <br/>
    </div>
      )
}))

export default UpdateClient