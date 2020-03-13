import mongoose from 'mongoose'

const projectUploadSchema = new mongoose.Schema({
    htno: {
        type: String,
        unique: true
    },
    branch: {
        type: String
    },
    guidename: {
        type: String
    },
    typename: {
        type: String
    },
    projectname: {
        type: String
    },
    image: {
        type: String
    },
    status: {
        type: String
    },
    inguidecomments:{
        type:String
    },
    projectincomments:{
        type:String
    },
    hodcomments:{
        type:String
    },
},
    {
        timestamps: true
    })

const projectUploadModel = mongoose.model('uploads', projectUploadSchema)

export default projectUploadModel;