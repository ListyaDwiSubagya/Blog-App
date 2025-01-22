import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title:{
        type:String,
        Required:true
    },

    description:{
        type:String,
        Required:true
    },

    category:{
        type:String,
        Required:true
    },

    author:{
        type:String,
        Required:true
    },

    image:{
        type:String,
        Required:true
    },

    authorImg:{
        type:String,
        Required:true
    },

    date:{
        type:Date,
        default:Date.now()
    },
})

const BlogModel = mongoose.models.blog || mongoose.model('blog', Schema);

export default BlogModel;