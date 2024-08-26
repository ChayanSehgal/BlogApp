const mongoose=require("mongoose");
require("dotenv").config();
const connectwithDb=()=>{
    mongoose.connect(process.env.DATABASE_URL).then(console.log("DB connection Hogya")).catch((error)=>{
        console.log(error);
        process.exit(1);
    })
}
module.exports=connectwithDb;