import admin from './adminModel';
import student from '../common/StudentModel';
import employee from '../common/employeeModel'
import { sendEmail } from '../common/email';


export const login = (req, res) => {
    admin.findOne({ "username": req.query.username, "password": req.query.password }, (err, result) => {
        res.send(result);
    })
}

export const adminviewStudent = (req, res) => {
    student.find((err, result) => {
        res.send(result);
    })
}




export const addEmployees = (req, res) => {
    employee.create(req.body, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            const subject = 'File Received';
            const body = `You Received a File from Librarian<br><br>Emp Id: ${req.body.empid}<br>Password: ${req.body.password}<br>Please Login Using this Credentials <br>Thank You.`;
            sendEmail(req.body.emailid, subject, body);
            res.send(result);
        }
    })

  
}

export const viewEmployee = (req, res) => {
    employee.find((err, result) => {
        res.send(result);
    })
}

export const getEmployeeData = (req, res) => {
    employee.findById(req.params.id, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send([result]);
        }
    })
}
export const UpdateEmployeeData = (req, res) => {
    employee.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
        if (err) {
            res.send(err);
        } else {
            res.send(updatedObj);
        }
    })
}
export const deleteEmployee = (req, res) =>
    employee.findByIdAndRemove(req.params.id, (err, deletedObj) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(deletedObj);
        }
    });

    export const Employeedownload = (req, res) => {
        employee.findById(req.params.id, (err, result) => {
            if (err) {
                res.send(err);
            }
            else {
                res.send([result]);
            }
        })
    }