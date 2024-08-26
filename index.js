const express=require("express");
const app=express();
require("dotenv").config();
const PORT=process.env.PORT||3500;

//middleware
app.use(express.json());

const blog=require("./routes/blog");
//mount
app.use("/api/v1",blog);

const connectWithDb=require("./conifg/database");
connectWithDb();
//start server
app.get("/",(req,res)=>{
  res.send("Homepage Baby");
})
app.listen(PORT,()=>{
    console.log(`App started at ${PORT}`)
})

