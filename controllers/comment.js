//import model
const Post=require("../models/postmodel");
const Comment=require("../models/commentmodel");

// business logic
exports.createComment=async(req,res)=>{
    try{
     ///fetching data from req body
     const{post,user,body}=req.body;
     //comment object bnao
     const comment=new Comment({
        post,user,body
     });
     //save new comment in database
     const savedComment=await comment.save();
    //find the post by ID , add new Comment in comment array
    const updatedpost=await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new :true}).populate("comments").exec() //push new entry ko update krne ke liye use krte hain pull delete krne ke liye
    //populate hame comment array id se comment document de dega
res.json({
    post:updatedpost,
});
}
    catch(error){
return res.status(500).json({
    error:"Error while creating comment"
})
    }
}