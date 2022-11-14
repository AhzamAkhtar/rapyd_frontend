import User from "../../modals/User"
import connectDb from "../../middleware/mongoose"
const hanler =async (req,res) =>{
    if(req.method=="POST"){
        console.log(req.body)
        const {email , refundId } = req.body
        const result = await User.findOneAndUpdate({email},{
            $push : {
                refund_payments : refundId
            },
        },{
            new : true
        })
        res.status(200).json({success : result})
    }
    else{
        res.status(400).json({error : "Error"})
    }
}

export default connectDb(hanler)