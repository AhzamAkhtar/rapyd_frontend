import User from "../../modals/User";
import connectDb from "../../middleware/mongoose";

const handler =async (req,res) =>{
    if(req.method=="POST"){
        console.log(req.body)
        const {email , transactionId } = req.body
        const allpayments = await User.findOneAndUpdate({email},{
            $pull : {
                allpayments : transactionId
            }
        },{
            new : true
        })

        res.status(200).json({success : "success"})
    }
    else{
        res.status(400).json({error : "Method Not Applicable"})
    }
}

export default connectDb(handler)