import User from "../../modals/User";
import connectDb from "../../middleware/mongoose";

const handler = async (req,res) =>{
    if(req.method=="POST"){
        console.log(req.body)
        const {email} = req.body
        const user = await User.findOne({email})
        if(user){
            res.status(200).json({success :user.newspayment})
        }
        else{
            res.status(200).json({success : "Cant find new payment id"})
        }
    }
    else{
        res.status(400).json({error : "Method not allowed"})
    }
}

export default connectDb(handler)