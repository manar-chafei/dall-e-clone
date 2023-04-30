import mongoose from "mongoose";
const post = new mongoose.Schema({
    name:{type:String,required:true},
    prompt:{type:String,required:true},
    photo:{type:String,required:true},
});
//schema of our model post 
const PostShema = mongoose.model('Post',post);
//in our model postShema we pass tow value the first one is the name of our model 
//and the seconde one is the name of shema that we create it
export default PostShema;