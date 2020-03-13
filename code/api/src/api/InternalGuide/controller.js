import employee from '../common/employeeModel';
import upload from '../common/uploadModel';

import student from '../common/StudentModel';
import { sendEmail } from '../common/email';

export const internalGuidelogin = (req, res) => {
    employee.find({"empid": req.query.empid, "password": req.query.password }, (err, result) => {
        res.send(result);
    })
}
export const internalGuideprofile = (req, res) => {
    employee.find({"empid": req.query.empid }, (err, result) => {
        res.send(result.map(data => {
            return data;
        }))
    })
}

export const updateInternalGuide = (req, res) => {
    employee.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
        if (err) {
            res.send(err);
        } else {
            res.send(updatedObj);
        }
    })
}

export const viewStudents=(req,res)=>{
    student.find({"guidename":req.query.guidename},(err,result)=>{
        if(err){
            res.send(err);

        }
        else{
            res.send(result);
        }
    })

}

export const viewProjects=(req,res)=>{
    upload.find({"guidename":req.query.guidename},(err,result)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(result);
        }
    })

}

export const acceptProject = (req, res) => {
    upload.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
        if (err) {
            res.send(err);
        } else {
            res.send(updatedObj);
        }
    })
}
export const rejectProject = (req, res) => {
    upload.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
        if (err) {
            res.send(err);
        } else {
            res.send(updatedObj);
        }
    })
}
export const getProjectData = (req, res) => {
    upload.findById({"_id":req.params.id}, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send([result]);
        }
    })
}


export const Projectcomment=(req,res)=>{
    upload.findOneAndUpdate(req.params,req.body,{new:true,upsert:true}, (err, deletedObj) => {
        if (err) {
            res.send(err);
        }
        else {
            console.log("ghfrgghygyhg",deletedObj);
            res.send(deletedObj);
           
        }
    })
}

export const search = (req, res) => {
    upload.find({ "projectname": req.query.projectname }, (err, result) => {
        res.send(result);
    })
}
export const getpassword = (req, res) => {
    employee.findOneAndUpdate({ "emailid": req.params.emailid }, req.body, { new: true }, (err, updatedObj) => {
        if (err) {
            res.send(err);
        }
        else {
            const subject = 'File Received';
            const body = `You have generated a Newpassword<br><br>Employee Id : ${req.params.empid}<br>Password: ${req.body.password}<br>Please Login Using this Credentials <br>Thank You.`;
            sendEmail(updatedObj.emailid, subject, body);
            res.send([updatedObj]);
        }
    })
}




export const forgetpassword = (req, res) => {
    employee.findOne({ "emailid": req.query.emailid }, req.body, (err, updatedObj) => {
        if (err) {
            res.send(err);
        }
        else {
            const subject = 'File Received';
            const body = `Your Password has given below:<br><br>Employee Id.: ${updatedObj.emailid}<br>Password: ${updatedObj.password}<br>Please Login Using this Credentials <br>Thank You.`;
            sendEmail(updatedObj.emailid, subject, body);
            res.send(updatedObj);
        }
    })
}

export const projectdownload = (req, res) => {
    upload.findById(req.params.id, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send([result]);
        }
    })
}