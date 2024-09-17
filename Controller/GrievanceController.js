const complaints = require("../Modal/GrievanceModal")




//complaint Register
exports.complaintController = async (req, res) => {
    const { username, email, phone, issue, timeStamp } = req.body
    console.log(username, email, phone, issue, timeStamp);



    try {
        const newComplaint = new complaints({

            username, email, phone, issue, timeStamp
        })
        //save()-to store the data in mongodb
        await newComplaint.save()
        res.status(200).json(newComplaint)


    } catch (error) {
        res.status(401).json(`complaint registration failed due to${error} `)
    }

}

//getallcomplaints
exports.getAllComplaintController = async (req, res) => {
    const searchKey = req.query.search
    console.log(searchKey);

    try {
        const query = {
            email: { $regex: searchKey, $options: 'i' },
            // timeStamp:{$regex:searchKey,$options:'i'}
        }
        const allcomplaints = await complaints.find(query)
        if (allcomplaints) {
            res.status(200).json(allcomplaints)
        }
        else {
            res.status(406).json('no complaints')
        }

    }
    catch (error) {
        res.status(406).json(error)
    }
}

//delete Complaint
exports.deleteComplaintController =async(req,res)=>{
    const {id}=req.params
    console.log('inside server delete function');
    console.log(id);
    try{
        //delete one -return true or false
        //findByIdAndDelete-document
        const complaint=await complaints.deleteOne({_id:id})
        res.status(200).json(complaint)
    }catch(error){
        res.status(401).json(error)
    }
    
}

//getapprovedcomplaints
exports.getApprovedComplaintController = async (req, res) => {
  
    const {id}=req.params
    console.log(id);
    
    try {
        
        const Acomplaint = await complaints.find(id)
        if (Acomplaint) {
            res.status(200).json(Acomplaint)
        }
        else {
            res.status(406).json('no complaints')
        }

    }
    catch (error) {
        res.status(406).json(error)
    }
}
