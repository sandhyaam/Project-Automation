const express = require('express');
const app = express();
var image = require('path').join(__dirname, '/Images');
app.use(express.static(image));

app.get('/',index);
app.get('/adminlogin',adminlogin);
app.get('/hodlogin',hodlogin);
app.get('/adminhomepage',adminhomepage);
app.get('/addEmployee',addEmployee);
app.get('/adminviewStudent',adminviewStudent);
app.get('/viewEmployee',viewEmployee);

app.get('/hodhomepage',hodhomepage);
app.get('/hodprofile',hodprofile);
app.get('/hodviewProjects',hodviewProjects);
app.get('/viewStudentsData',viewStudentsData);
app.get('/forgetpassword',hodforgetpassword);

app.get('/projectinchargelogin',projectinchargelogin);
app.get('/projectinchargeprofile',projectinchargeprofile);
app.get('/projectInchargehome',projectInchargehome);
app.get('/addStudent',addStudent);
app.get('/viewProjectsProjectIncharge',viewProjectsProjectIncharge);
app.get('/viewStudent',viewStudent);
app.get('/forgetpassword',piforgetpassword);


app.get('/internalGuidelogin',internalGuidelogin);
app.get('/internalGuideprofile',internalGuideprofile);
app.get('/internalGuidehome',internalGuidehome);
app.get('/viewStudents',viewStudents);
app.get('/viewProjects',viewProjects);
app.get('/forgetpassword',igforgetpassword);

app.get('/studentlogin',studentlogin);
app.get('/studenthomepage',studenthomepage);
app.get('/studentprofile',studentprofile);
app.get('/studentUpload',studentUpload);
app.get('/studentFeedback',studentFeedback);
app.get('/forgetpassword',studentforgetpassword);



function index(req,res){
    res.sendFile('index.html', { root: __dirname });
}
function adminlogin(req,res){
    res.sendFile('adminlogin.html', { root: __dirname });
}
function projectinchargelogin(req,res){
    res.sendFile('project incharge login.html', { root: __dirname });
}
function hodlogin(req,res){
    res.sendFile('Hod login.html', { root: __dirname });
}
function internalGuidelogin(req,res){
    res.sendFile('internal guide login.html', { root: __dirname });
}
function studentlogin(req,res){
    res.sendFile('Student login.html', { root: __dirname });
}

function hodhomepage(req,res){
    res.sendFile('Hod/Hod home.html', { root: __dirname });

}
function hodviewProjects(req,res){
    res.sendFile('Hod/Projects.html', { root: __dirname });
    
}
function viewStudentsData(req,res){
    res.sendFile('Hod/StudentsData.html', { root: __dirname });
    
}
function projectInchargehome(req,res){
    res.sendFile('Project Incharge/Project incharge home.html', { root: __dirname });
}
function internalGuidehome(req,res){
    res.sendFile('Internal Guide/Internal guide home.html', { root: __dirname });
}

function adminhomepage(req,res){
    res.sendFile('Admin/admin home.html', { root: __dirname });
}
function studenthomepage(req,res){
    res.sendFile('Student/student home.html', { root: __dirname });
}

function addStudent(req,res){
    res.sendFile('Project Incharge/Add student.html', { root: __dirname });
}
function viewStudent(req,res){
    res.sendFile('Project Incharge/StudentsData.html', { root: __dirname });
}
function adminviewStudent(req,res){
    res.sendFile('Admin/StudentData.html', { root: __dirname });
}

function addEmployee(req,res){
    res.sendFile('Admin/Add employee.html', { root: __dirname });
}
function viewEmployee(req,res){
    res.sendFile('Admin/EmployeeData.html', { root: __dirname });
}
function projectinchargeprofile(req,res){
    res.sendFile('Project Incharge/profile.html', { root: __dirname });
}
function viewProjectsProjectIncharge(req,res){
    res.sendFile('Project Incharge/Projects.html', { root: __dirname });
}


function hodprofile(req,res){
    res.sendFile('Hod/profile.html', { root: __dirname });
}
function internalGuideprofile(req,res){
    res.sendFile('Internal Guide/profile.html', { root: __dirname });
}
function viewStudents(req,res){
    res.sendFile('Internal Guide/students.html', { root: __dirname });
}
function viewProjects(req,res){
    res.sendFile('Internal Guide/projects.html', { root: __dirname });
}

function studentprofile(req,res){
    res.sendFile('Student/profile.html', { root: __dirname });
}
function studentUpload(req,res){
    res.sendFile('Student/Upload.html', { root: __dirname });
}
function studentFeedback(req,res){
    res.sendFile('Student/feedback.html', { root: __dirname });
}
function hodforgetpassword(req,res){
    res.sendFile('HOD/forgetpassword.html', { root: __dirname });
}
function piforgetpassword(req,res){
    res.sendFile('Project Incharge/forgetpassword.html', { root: __dirname });
}
function igforgetpassword(req,res){
    res.sendFile('Internal Guide/forgetpassword.html', { root: __dirname });
}


function studentforgetpassword(req,res){
    res.sendFile('Student/forgetpassword.html', { root: __dirname });
}

app.listen(4444, () => console.log("server starts at port number 4444"));