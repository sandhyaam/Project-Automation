import mongoose from 'mongoose'

const StudentSchema = new mongoose.Schema({
    htno:{
        type: String,
        unique:true
    },
    name:{
        type: String
    },
    gender:{
        type: String
    },
    branch:{
        type:String
    },
    phone:{
        type: String
    },
    guidename:{
        type: String
    },
    password:{
        type:String
    },
    emailid:{
        type: String
    },
    address:{
        type: String
    },

    image:{
        type:String
    },
   
    
},
{
    timestamps:true
})

const studentModel=mongoose.model('students',StudentSchema)

export default studentModel;