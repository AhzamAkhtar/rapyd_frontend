import connectDb from "../../middleware/mongoose";
import User from "../../modals/User";
const handler = async (req,res) =>{
    if(req.method=="POST"){
        console.log(req.body)
        const {email} = req.body 
        let user = await User.findOne({email})
        if(user.news==false){
            res.status(200).json({success : false})
        }
        if(user.news==true){
            res.status(200).json({success : true})
        }
    }
    else{
        res.status(400).json({success : "Method Not Allowed"})
    }
}

export default connectDb(handler)