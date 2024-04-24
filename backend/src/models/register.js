const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    firstname:{
       type:String,
       requirede:true
    },
    lastname: {
        type:String,
        requirede:true
    },
    email:{
        type:String,
        requirede:true
        
    }
  
})
const register =new mongoose.model("Register",employeeSchema);

module.exports= register;
