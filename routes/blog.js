const express=require("express");
const router=express.Router();

//Import Controller
const {dummy,likePost}=require("../controllers/Comment");
const{createComment}=require("../controllers/Comment");
const{createPost, getAllPosts}=require("../controllers/Post");

router.get("/dummyroute",dummy);
router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts",getAllPosts)
router.post("/likes/like",likePost);
module.exports=router; 