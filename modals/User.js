const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name : {type:String , required:true},
    email : {type :String , required:true , unique :true},
    password:{type:String , required:true},
    news : {type:Boolean , default : true},
    // use default 
    payments :  [
        
    ]
},{timestamps:true})

mongoose.models = {}
export default mongoose.model("User",UserSchema)