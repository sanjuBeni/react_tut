import React, { useState } from "react";  

function Users (props) {
    const [formData, setFormData ] = useState({});

    const handleForm  = (e) =>{
        e.preventDefault();
        console.log(formData);
    }

    const handleCheckbox = (e) => {
        setFormData({...formData, [e.target.name] : e.target.checked})
    }

    const handleData  =  (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    return (
        <div className="App">
          <form onSubmit={handleForm}> 
            <input type='text' name='name' onChange={handleData} placeholder='Enter name'/>
            <br></br><br/>
            <select name='select' onChange={handleData}>
                <option>Select Value</option>
                <option>React</option>
                <option>Laravel</option>
            </select>
            <br></br><br/>
            <input type='checkbox' name = "tnc" onChange={handleCheckbox} />Accept Term & Condition
            <br></br><br/>
            <button type='sumit'>Submit</button>
          </form>
        </div>
    );
}

export default Users;