import express from "express";
import { SignUp } from "../Controllers/userController.js"; 

const router=express.Router();  

// localhost:5000/posts

// router.get('/',getAllProducts);
router.post('/',SignUp);
// router.patch('/:id',editProduct);
// router.delete('/:id',deleteProduct);



export default router;      

