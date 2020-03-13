import student from '../common/StudentModel';
import employee from '../common/employeeModel';
import upload from '../common/uploadModel';

import { sendEmail } from '../common/email';

export const login = (req, res) => {
    employee.find({ "empid": req.query.empid, "password": req.query.password }, (err, result) => {
        res.send(result);
    })
}
export const projectInchargeprofile = (req, res) => {
    employee.find({"empid": req.query.empid}, (err, result) => {
        res.send(result.map(data=>{
            return data;
        }))
       
    })
}



export const updateProjectIncharge = (req, res) => {
    employee.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
        if (err) {
            res.send(err);
        } else {
            res.send(updatedObj);
        }
    })
}


export const viewEmployees = (req, res) => {
    employee.find({$and:[{role:'internalguide'},{"branch":req.params.branch}]}, (err, result) => {
        res.send(result);
    })
}


export const getStudentData = (req, res) => {
    student.findById(req.params.id, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send([result]);
        }
    })
}



export const addStudent = (req, res) => {
    student.create(req.body, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            const subject = 'File Received';
            const body = `You Received a File from Librarian<br><br>Phone: ${req.body.stdid}<br>Password: ${req.body.password}<br>Please Login Using this Credentials <br>Thank You.`;
            sendEmail(req.body.emailid, subject, body);
            res.send(result);
        }
    })
}
export const viewStudent = (req, res) => {
    student.find({"branch":req.query.branch},(err, result) => {
        res.send(result.map(data=>{
            return data;
        }))
    })
}

export const updateStudent = (req, res) => {
    student.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
        if (err) {
            res.send(err);
        } else {
            res.send(updatedObj);
        }
    })
}
export const deleteStudent = (req, res) =>
    student.findByIdAndRemove(req.params.id, (err, deletedObj) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(deletedObj);
        }
    });

    export const viewProjects=(req,res)=>{
        upload.find({"branch":req.query.branch,"status":"Accepted"},(err,result)=>{
            if(err){
                res.send(err);
            }
            else{
                res.send(result);
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
                res.send(deletedObj);
            }
        })
    }
    


export const getpassword = (req, res) => {
    employee.findOneAndUpdate({ "empid": req.params.empid }, req.body, { new: true }, (err, updatedObj) => {
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

export const search = (req, res) => {
    upload.find({ "projectname": req.query.projectname ,"status":"Accepted"}, (err, result) => {
        res.send(result);
    })
}




export const forgetpassword = (req, res) => {
    employee.findOne({ "emailid": req.query.emailid }, req.body, (err, updatedObj) => {
        if (err) {
            res.send(err);
        }
        else {
            const subject = 'File Received';
            const body = `Your Password has given below:<br><br>Employee Id.: ${updatedObj.empid}<br>Password: ${updatedObj.password}<br>Please Login Using this Credentials <br>Thank You.`;
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