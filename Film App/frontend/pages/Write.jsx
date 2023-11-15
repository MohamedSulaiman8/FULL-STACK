import React from "react";
import ReactQuill from 'react-quill'
import { useState } from "react";
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { useLocation,useNavigate } from "react-router-dom";
import moment from "moment";
const Write=()=>{
    const state=useLocation().state
    const [value,setValue]=useState(state?.description ||'');
    const [title,setTitle]=useState(state?.title ||'');
    const [file,setFile]=useState(null);
    const [cat,setCat]=useState(state?.category ||'')
    const navigate=useNavigate()
    const upload=async ()=>{
        try{
            const formData=new FormData();
            formData.append("file",file)
            const res=await axios.post("/upload",formData);
            return res.data;
        }
        catch(err){
            console.log(err)
        }
    }
    const handleSubmit = async e=>{
        
        e.preventDefault()
        const imgUrl= await upload();
        try{
            state ? await axios.put(`/posts/${state.id}`,{
                title,description:value,cat,img:file?imgUrl:""
            }) : 
            await axios.post(`/posts/`,{
                title,description:value,cat,img:file?imgUrl:"",date:moment(Date.now()).format("YYYY-MM-D HH:mm:ss")
            })
            navigate("/home")
        }
        
        catch(err){
            console.log(err)
        }
    }

    return(
        <div className="add">
            <div className="content-write">
                <input type="text" value={title} placeholder="Title" onChange={e=>{setTitle(e.target.value)}}/>
                <div className="editorcontainer">
                    <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
                </div>
            </div>
            <div className="menu-write">
                <div className="item">
                    <h1>Publish</h1>
                    <span>
                        <b>Status:</b>Draft
                    </span>
                    <span>
                        <b>Visibility</b>Public
                    </span>
                    <input type="file" id="file" onChange={e=>{setFile(e.target.files[0])}}/>
                    <label className="file" htmlFor="file">Upload Image</label>
                    <div className="buttons">
                        <button id="b1">Save as draft</button>
                        <button id="b2" onClick={handleSubmit}>Post</button>
                    </div>
                </div>
                <div className="item">
                    <h1>Category</h1>
                    <div className="cat">
                        <input type="radio" checked={cat==="action"} name="cat" value="action" id="Action" onChange={e=>{setCat(e.target.value)}}/>
                        <label htmlFor="drama">Action</label>
                    </div>
                    <div className="cat">
                        <input type="radio" checked={cat==="drama"} name="cat" value="drama" id="drama" onChange={e=>{setCat(e.target.value)}}/>
                        <label htmlFor="drama">Drama</label>                
                    </div>
                    <div className="cat">
                        <input type="radio" checked={cat==="romance"} name="cat" value="romance" id="romance" onChange={e=>{setCat(e.target.value)}}/>
                        <label htmlFor="drama">Romance</label>
                    </div>
                    <div className="cat">
                        <input type="radio" checked={cat==="thriller"} name="cat" value="thriller" id="thriller" onChange={e=>{setCat(e.target.value)}}/>
                        <label htmlFor="drama">Thriller</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Write;