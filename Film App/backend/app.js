import express from  "express";
import postRoutes from "./routes/post.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import cookieParser from "cookie-parser";
import multer from "multer";
const app=express()
app.use(express.json())
app.use(cookieParser())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../blogapp/public/upload')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname)
    }
})
  
  
const upload=multer({storage})
app.post("/api/upload",upload.single('file'),function(req,res){
    const file=req.file;
    res.status(200).json(file.filename);
})

app.use("/api/posts",postRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);





app.listen(8000,()=>{
    console.log("connected");
})