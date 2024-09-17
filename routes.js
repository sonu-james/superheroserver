//1)import express
const express=require('express')
//import UserController
const UserController=require('./Controller/UserController') 
//import grievanceController
const GrievanceController=require('./Controller/GrievanceController')
//2)create an object for router class
const router =new express.Router()
//3)set up path for each request from view

//register request
router.post('/register',UserController.registerController)
//login 
router.post('/login',UserController.loginController)
//complint request
router.post('/complaint',GrievanceController.complaintController)
//get allComplaints
router.get('/allcomplaints',GrievanceController.getAllComplaintController)

//get ApprovedComplaints
router.get('/list/:id',GrievanceController.getApprovedComplaintController)

//delete complaint
router.delete('/delete/:id',GrievanceController.deleteComplaintController)

//4)export the router
module.exports=router
