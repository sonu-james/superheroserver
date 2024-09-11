const complaints=require("../Modal/GrievanceModal")

//complaint Register
exports.complaintController=async(req,res)=>{
    const {username,email,phone,issue}=req.body
    console.log(username,email,phone,issue);

    try{
        const newComplaint=new complaints({

            username,email,phone,issue
        })
         //save()-to store the data in mongodb
         await newComplaint.save()
        res.status(200).json(newComplaint)
    }catch(error){
        res.status(401).json(`complaint registration failed due to${error} `)
    }
    
}