import connectDb from "../../middleware/mongoose";
import User from "../../modals/User";

const handler = async (req , res) =>{
    if(req.method==="POST"){
        console.log(req.body)
        const {email ,transactionIdnews} = req.body
        const result = await User.findOneAndUpdate({email},{
            $set : {
                newspayment : transactionIdnews
            }
        },{
            new : true
        })
    
        res.status(200).json({success : result})
    }
    else{
        res.status(400).json({error : "Method Not Allowed"})
    }
}

export default connectDb(handler)