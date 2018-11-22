import express from 'express';
import userController from '../controllers/userControllers';
const router = express.Router(); //-- creating router

//============================= BASE CALLS
router.route('/')
    // POST /users
    .post( userController.create )
    // GET /users
    .get( userController.getAll );

export default router;