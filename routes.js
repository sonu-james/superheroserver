//1)import express
const express=require('express')
//import grievanceController
const GrievanceController=require('./Controller/GrievanceController')
//2)create an object for router class
const router =new express.Router()
//3)set up path for each request from view
//complint request
router.post('/complaint',GrievanceController.complaintController)

//4)export the router
module.exports=router
