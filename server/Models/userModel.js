import mongoose from "mongoose";


const UserSchema=mongoose.Schema({
    FirstName:String,
    LastName:String,
    email:String,
    phone:String,
    Address:String,
    Password:String,


    createdAt:{
        type:Date,
        default:new Date(), 
    },
    
    
   
});


const userModel=mongoose.model('Users',UserSchema);

export default userModel;


