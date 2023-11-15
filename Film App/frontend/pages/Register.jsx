import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Register=()=>{
    const [inputs,setInputs]=useState({
        username:'',
        email:'',
        password:''
    })
    const [error,setError]=useState(null)
    const navigate=useNavigate()
    const handleChange =  e =>{
        setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
    }
    const handleSubmit= async(e)=>{
        e.preventDefault();
        try{
            await axios.post("/auth/register",inputs);
            navigate('/login')
        }
        catch(err){
            setError(err.response.data)
        }
    
    }
    return(
        <div className="auth">
            <h1>Register</h1>
            <form action="">
                <input required type="text" name="username" placeholder="Enter youe username" onChange={handleChange} />
                <input required type="email"name="email"  placeholder="Enter your email" onChange={handleChange}/>
                <input required type="password" name="password" placeholder="Enter your password" onChange={handleChange}/>
                <button onClick={handleSubmit}>Register</button>
                {error && <p>{error}</p>}
                <span>Already have an account? <Link to="/login" >Login</Link></span>
            </form>
        </div>
    )
}
export default Register;