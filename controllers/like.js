const Post=require("../models/postmodel");
const Like=require("../models/likemodel");
exports.likepost=async(req,res)=>{
    try{
const{post,user}=req.body;
const like=new Like({
    post,user
})
const savedLike=await like.save();

//update post collection based on like
const updatedpost=await Post.findByIdAndUpdate(post,{$push:{likes:savedLike ._id}},{new:true})
res.json({
    updatedpost
})
    }
    catch(error){
res.status(400).json({
    error:"error while fetching error"
})
    }
}
exports.unlikePost=async(req,res)=>{
    try{
       const{post,like}=req.body;
       //find and delete like collection
       const deletedLike=await Like.findOneAndDelete({post:post,_id:like});
       //update post collection
       const updatedpost=await Post.findByIdAndDelete(post,{$pull:{likes:deletedLike._id}},{new:true})
       res.json({
        post:updatedpost
    })
    }
    catch{

    }
}