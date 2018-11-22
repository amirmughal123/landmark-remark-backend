import express from 'express';
import noteController from '../controllers/noteControllers';
const router = express.Router(); //-- creating router

//============================= BASE CALLS
router.route('/')
    // POST /notes
    .post( noteController.create )
    // GET /notes
    .get(noteController.getAll)


export default router;