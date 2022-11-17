import User from "../../modals/User"
import connectDb from "../../middleware/mongoose";

const handler = async (req,res) =>{
    if(req.method=="POST"){
        console.log(req.boody)
        const {email} = req.body
        const user = await User.findOne({email})
        const userinfoarray = {
            "name" : user.name,
            "email" : user.email,
            "newsTransactinId" : user.newspayment,
            "allTransaction" : user.allpayments
        }
        res.status(200).json({success: userinfoarray})
    }
    else{
        res.status(400).json({error : "Method Not Allowed"})
    }
}

export default connectDb(handler)