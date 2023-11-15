import db from "../db.js";
import jwt  from "jsonwebtoken";
export const getPost=(req,res)=>{
    const q="SELECT p.id,`username`,`title`,`description`,p.img,u.img AS userImage,`category`,`date` from users u JOIN posts p ON u.id=p.uid WHERE p.id=? ";
    db.query(q,[req.params.id],(err,data)=>{
        if(err) return res.status(402).json(err)
        return res.status(200).json(data[0]);
    })
}

export const getPosts=(req,res)=>{
    const q=req.query.cat ? "SELECT * FROM posts WHERE category=?" : "SELECT * FROM posts";
    db.query(q,[req.query.cat],(err,data)=>{
        if(err) return res.status(403).send(err);
        return res.status(200).json(data)
    })
}
export const updatePost=(req,res)=>{
    const token= req.cookies.access_token;
    if(!token) return res.status(401).json("Not authenticated");


    jwt.verify(token,"jwtkey",(err,userInfo)=>{
        if(err) return res.status(405).json("Token not valid");
        const postId=req.params.id;
        const q='UPDATE posts SET `title`=?,`description`=?,`img`=?,`category`=? where `id`=? AND `uid`=?';
        const values=[
            req.body.title,
            req.body.description,
            req.body.img,
            req.body.cat,
            
        ]
        db.query(q,[...values,postId,userInfo.id],(err,data)=>{
            return res.json("Post has been updated")
        })
    })
}
export const addPost=(req,res)=>{
    const token= req.cookies.access_token;
    if(!token) return res.status(401).json("Not authenticated");


    jwt.verify(token,"jwtkey",(err,userInfo)=>{
        if(err) return res.status(405).json("Token not valid");
        const q='INSERT INTO POSTS(`title`,`description`,`img`,`category`,`date`,`uid`) VALUES(?)';
        const values=[
            req.body.title,
            req.body.description,
            req.body.img,
            req.body.cat,
            req.body.date,
            userInfo.id
        ]
        db.query(q,[values],(err,data)=>{
            return res.json("Post has been created")
        })
    })
    
}

export const deletePost=(req,res)=>{
    const token= req.cookies.access_token;
    if(!token) return res.status(401).json("Not authenticated");


    jwt.verify(token,"jwtkey",(err,userInfo)=>{
        if(err) return res.status(405).json("Token not valid");
        const postId=req.params.id;
        const q="DELETE FROM posts where `id`=? AND `uid`=?"

        db.query(q, [postId,userInfo.id],(err,data)=>{
            if (err) return res.status(407).json("You are not authorized to delete this post");

            return res.json("Post Deleted");
        });
    });

    
};

