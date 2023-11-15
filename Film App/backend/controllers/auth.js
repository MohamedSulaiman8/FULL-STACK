import db from "../db.js";
import bcrypt from "../node_modules/bcrypt/bcrypt.js";
import jwt  from "jsonwebtoken";
export const register=(req,res)=>{
    const q="select * from users where email = ? OR username = ?";
    db.query(q,[req.body.email, req.body.username],(err,data)=>{
        if(err) return res.json(err);
        if(data.length) return res.status(409).json("user already exists"); 

        const salt=bcrypt.genSaltSync(10);
        const hash=bcrypt.hashSync(req.body.password,salt);
        const q="INSERT INTO users(`username`,`email`,`password`) VALUES(?)"
        const values=[req.body.username,req.body.email,hash];
        db.query(q,[values],(err,data)=>{
            if(err) return res.json(err);
            return res.status(200).json("User has been created");
        })
    })
}
export const login=(req,res)=>{
    const q="select * from users where username = ?";
    db.query(q,[req.body.username], (err,data)=>{
        if(err) return res.json(err);
        if(data.length === 0) return res.status(404).json("User not found");

        const isPasscorrect=bcrypt.compareSync(req.body.password,data[0].password);
        if(!isPasscorrect) return res.status(400).json("Incorrect password or username");


        const token=jwt.sign({id:data[0].ID},"jwtkey");
        const {password,...other}=data[0];

        res.cookie("access_token",token,{
            httpOnly:true
        }).status(200).json(other)
        
    })
    
}
export const logout=(req,res)=>{
    res.clearCookie("access_token",{
        sameSite:"none",
        secure:true
    }).status(200).json("User has been logged out");
}