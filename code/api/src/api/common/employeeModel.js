import mongoose from 'mongoose'

const employeeSchema = new mongoose.Schema({
    empid:{
        type: String,
        unique:true
    },
    role:{
        type: String
    },
    name:{
        type: String
    },
    branch:{
        type:String
    },
    phone:{
        type: String
    },
    emailid:{
        type: String
    },
    password:{
        type:String
    },
    address:{
        type: String
    },
    image:{
        type:String
    },
    status:{
        type:String
    }
   
},
{
    timestamps:true
})

const hodModel=mongoose.model('employees',employeeSchema)

export default hodModel;