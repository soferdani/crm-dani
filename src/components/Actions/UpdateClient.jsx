import React from 'react'
import {observer, inject } from 'mobx-react'

const UpdateClient = inject('alldata') (observer((props) =>  { 
    








    
    return (
    <div>
        <div>UPDATE</div>
        <span>client</span><input type="text" />
        <div>
            <label for="cars">transfer ownership to</label>
            <select name="owner" id="">
                <option value="yosi">yosi</option>
                <option value="david">david</option>
            </select>
            <button>submit</button>    
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