import React from 'react'
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import './FormContact.css'

const FormContact = () => {

const [name,setname]=useState("");
const [show,setshow]=useState("");

const changeName = (event) => {
     setname(event.target.value);
     
}
    const FormHandler = (event)=>{
        console.log(name);
        event.preventDefault();
        if(!name){
            setshow(true);
         }
    }
    return(
        <form onSubmit={FormHandler}>
        <div className='form-control'>
        <input placeholder='your Name' onChange={changeName}/>
         {show && <p className='dyn'> must not be empty</p> }
        </div>
        <div className='form-control'>
        <input placeholder='your Email'/>
        </div>
        <div className='form-control'>
        <input placeholder='Phone Numbers'/>
        </div>
        <select>
        <option>Select Department</option>
        <option>One</option>
        <option>Two </option>
        <option>Three</option>
        </select>
        <div className='form-control'>
             <textarea placeholder='Message'></textarea>
        </div>
        <Button type='submit'>Submit</Button>
        </form>
        
    )
}

export default FormContact;