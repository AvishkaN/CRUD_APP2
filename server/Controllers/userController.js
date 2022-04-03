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



exports.login = catchAsync(async (req, res) => {
    const { email, password } = req.body;
  
    // 1) Check if email and password exist
    if (!email || !password) {
        res.status(409).json({message:err.message});  

      return next(new AppError('Please provide email and password!', 400));
    }
    // 2) Check if user exists && password is correct
    const user = await User.findOne({ email }).select('+password');
  
    if (!user || !(await user.correctPassword(password, user.password))) {
      return next(new AppError('Incorrect email or password', 401));
    }
  
    // 3) If everything ok, send token to client
    createSendToken(user, 200, req, res);
  });


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