import React from "react";


// form component

export default function Form(props){
// what are the exact props the form expects??
const {values, update, submit} = props

// implement a change handler for inputs and drop down



// implement a  submit handler that doesnt allow browser to reload




    return (
        
            <form className='form-container' onSubmit={submit}>
                <label>Name
                    <input
                    name='name'
                    type='text'
                    placeholder='Enter Name'
                    maxLength='30'
                    value={values.name}
                    onChange={update}
                    required 
                    />
                </label>
                <label>Email
                    <input
                    name='email'
                    type='email'
                    placeholder='Enter Email'
                    maxLength='40'
                    value={values.email}
                    onChange={update}
                    required
                    />
                </label>
                <label>Role
                    <select name='role'value={values.role} onChange={update} required>
                    <option value=''>------Select Role------</option>
                    <option value='backend engineer'></option>
                    <option value='frontend engineer'></option>
                    <option value='fullstack engineer'></option>
                    <option value='data scientist'></option>
                    
                    </select>
                </label>
                <div className='submit'>
                    <button>Submit</button>
                </div>
            </form>
        
    )
}