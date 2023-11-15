import React, { useContext } from "react";
import axios from "axios";
import moment from "moment";
import { useState,useEffect } from "react";
import EDIT from "../image/edit.png";
import DELETE from "../image/delete.png";
import { Link,useLocation, useNavigate } from "react-router-dom";
import Menu from '../components/Menu'
import { AuthContext } from "../context/authContext.js";
const Single=()=>{
    const {currentUser}=useContext(AuthContext)
    const [post,setPost]=useState({})
    const location=useLocation()
    const navigate=useNavigate();
    const postId=location.pathname.split("/")[2]
    
    useEffect(()=>{
        const fetchData=async ()=>{
            try{
                const res=await axios.get(`/posts/${postId}`);
                setPost(res.data)
            }
            catch(err){
                console.log(err)
            }
        }
        fetchData();
    },[postId])
    const handleDelete=async ()=>{
        try{
            const res=await axios.delete(`/posts/${postId}`);
            console.log(res.data)
            navigate("/home")
        }
        catch(err){
            console.log(err)
        }
    }
    const getText=(html)=>{
        const doc=new DOMParser().parseFromString(html,"text/html")
        return doc.body.textContent
    }
    return(
        <div className="single">
            <div className="cont">
                <img src={`../upload/${post.img}`} alt="" />
                <div className="user">
                    
                    {post.userImage && <img src={post?.userImage} alt="" />}
                    <div className="info">
                        <span>{post.username}</span>
                        <p>Posted {moment(post.date).fromNow()}</p>
                    </div>
                    {currentUser.username === post.username && <div className="edit">
                        <Link to={`/write?edit=2`} state={post}>
                        <img src={EDIT} alt="" />
                        </Link>
                        <Link>
                        <img onClick={handleDelete} src={DELETE} alt="" />
                        </Link>
                    </div>}
        
                </div>
                <h1>{post.title}</h1>
                <p>{getText(post.description)}</p>
            </div>
            <Menu cat={post.category}/>
        </div>
    )
}
export default Single;