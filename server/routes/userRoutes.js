const express=require('express');
const router=express.Router();
const userController=require('../controllers/userController');

// @POST // register
router.post('/register', userController.createUser);

// @GET//user/:id
router.get('/user/:id',userController.getUserByPk);

module.exports=router;