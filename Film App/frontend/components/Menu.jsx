import axios from "axios";
import React, { useEffect, useState } from "react";

const Menu=({cat})=>{
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        const fetchData=async ()=>{
            try{
                const res=await axios.get(`/posts/?cat=${cat}`);
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
    //     id:2,
    //     title:"Peranbu",
    //     desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa sunt reprehenderit aut fugiat atque itaque nobis aperiam laborum distinctio, facilis deleniti. Tenetur animi voluptates dolores assumenda at, fuga enim!",
    //     img:"https://www.bandt.com.au/information/uploads/2020/10/GettyImages-1149030626-Large-1260x840.jpg"
    // },
    // {
    //     id:3,
    //     title:"Peranbu",
    //     desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa sunt reprehenderit aut fugiat atque itaque nobis aperiam laborum distinctio, facilis deleniti. Tenetur animi voluptates dolores assumenda at, fuga enim!",
    //     img:"https://www.bandt.com.au/information/uploads/2020/10/GettyImages-1149030626-Large-1260x840.jpg"
    // }];
    return(
        <div className="menu">
            <h1>Other films you may like</h1>
            {posts.map((post) => (
                <div className="post-menu" key={post.id}>
                    <img src={`../upload/${post.img}`} alt="" />
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>
            ))}
        </div>
    );
};
export default Menu;