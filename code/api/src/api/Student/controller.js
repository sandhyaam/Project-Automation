import student from '../common/StudentModel';
import upload from '../common/uploadModel';
import { sendEmail } from '../common/email';

export const studentlogin = (req, res) => {
    student.findOne({ "htno": req.query.htno, "password": req.query.password }, (err, result) => {
        res.send(result);
    })
}
export const studentprofile = (req, res) => {
    student.find({"htno": req.query.htno }, (err, result) => {
        res.send(result.map(data => {
            return data;
        }))
    })
}
export const viewComments = (req, res) => {
    upload.find({"htno": req.query.htno }, (err, result) => {
        res.send(result.map(data => {
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

export const uploadProject = (req, res) => {
    upload.create(req.body, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            
            res.send(result);
        }
    })
}



export const getpassword = (req, res) => {
    student.findOneAndUpdate({ "htno": req.params.htno }, req.body, { new: true }, (err, updatedObj) => {
        if (err) {
            res.send(err);
        }
        else {
            const subject = 'File Received';
            const body = `You have generated a Newpassword<br><br>Student Id : ${req.params.htno}<br>Password: ${req.body.password}<br>Please Login Using this Credentials <br>Thank You.`;
            sendEmail(updatedObj.emailid, subject, body);
            res.send([updatedObj]);
        }
    })
}




export const forgetpassword = (req, res) => {
    student.findOne({ "emailid": req.query.emailid }, req.body, (err, updatedObj) => {
        if (err) {
            res.send(err);
        }
        else {
            const subject = 'File Received';
            const body = `Your Password has given below:<br><br>Student Id.: ${updatedObj.stdid}<br>Password: ${updatedObj.password}<br>Please Login Using this Credentials <br>Thank You.`;
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