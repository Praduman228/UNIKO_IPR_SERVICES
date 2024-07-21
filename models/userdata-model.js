const mongoose=require("mongoose")
const plm=require("passport-local-mongoose");
const userSchema=mongoose.Schema({
    name:String,
    username:String,
    email:String,
    password:String ,
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"posts",
        required:true
    } ] 
})

userSchema.plugin(plm)
module.exports=mongoose.model("user",userSchema);