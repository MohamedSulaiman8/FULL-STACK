import {createContext,useState,useEffect} from 'react'
import axios from "axios";


export const AuthContext =createContext();
export const AuthContextProvider=({children})=>{
    const[currentUser,setCurrentuser]=useState(JSON.parse(localStorage.getItem("user")||null))
    const login= async (inputs)=>{
        const res=await axios.post("/auth/login",inputs);
        setCurrentuser(res.data);
    }
    const logout=async ()=>{
        await axios.post("/auth/logout");
        setCurrentuser({username:"empty"});
    };
    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser))
    },[currentUser])
   
    return (
    <AuthContext.Provider value={{currentUser,login,logout}} >{children}</AuthContext.Provider>)
};