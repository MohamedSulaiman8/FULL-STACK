import React, { useEffect,useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
// import Logo from "../image/peranbu.jpg"
const Home=()=>{
    const [posts,setPosts]=useState([])
    const cat=useLocation().search
    useEffect(()=>{
        const fetchData=async ()=>{
            try{
                const res=await axios.get(`/posts${cat}`);
                setPosts(res.data)
            }
            catch(err){
                console.log(err)
            }
        }
        fetchData();
    },[cat])
    // const posts=[{
    //     id:1,
    //     title:"Peranbu",
    //     desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa sunt reprehenderit aut fugiat atque itaque nobis aperiam laborum distinctio, facilis deleniti. Tenetur animi voluptates dolores assumenda at, fuga enim!",
    //     img:"https://www.bandt.com.au/information/uploads/2020/10/GettyImages-1149030626-Large-1260x840.jpg"
    // },{
    //     id:1,
    //     title:"Peranbu",
    //     desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa sunt reprehenderit aut fugiat atque itaque nobis aperiam laborum distinctio, facilis deleniti. Tenetur animi voluptates dolores assumenda at, fuga enim!",
    //     img:"https://www.bandt.com.au/information/uploads/2020/10/GettyImages-1149030626-Large-1260x840.jpg"
    // }];

    const getText=(html)=>{
        const doc=new DOMParser().parseFromString(html,"text/html")
        return doc.body.textContent
    }
    
    return(
        // D:\ABU\React Js\Blog app\blogapp\public\upload\1692340664248Screenshot (237).png
        <div className="home">
            <div className="posts">
                 {posts.map((post)=> (
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={`../upload/${post.img}`} alt="" />
                        </div>
                        <div className="content">
                            <Link className="link" to={`/post/${post.id}`}>
                            <h1>{post.title}</h1>
                            </Link>
                            <p>{getText(post.description)}</p>
                            <button>Read More</button>
                        </div>
                    </div>
                 ))}
               
            </div>    
            
        </div>
    );
};
export default Home;