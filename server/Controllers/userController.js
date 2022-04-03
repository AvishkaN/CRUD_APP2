import mongoose from "mongoose";
import userModel from "../Models/userModel.js"; 

 


export const SignUp=async(req,res)=>{
    
    

    const user=req.body;

    console.log(user);

    const newUser=new userModel(user);

    try{
        await newUser.save();

        res.status(201).json(newUser);
        
    }catch(err){  
        res.status(409).json({message:err.message});  

    }
};    


export const editProduct = async (req, res) => {


    const { id } = req.params;    

    // const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Product with id: ${id}`);
    
    const updatedProduct = req.body;

    

    await productModel.findByIdAndUpdate(id, updatedProduct, { new: true });

    res.json(updatedProduct);  
     
};



export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await productModel.findByIdAndRemove(id); 

    res.json(id); 

    // res.json({ message: "product deleted successfully." });
};