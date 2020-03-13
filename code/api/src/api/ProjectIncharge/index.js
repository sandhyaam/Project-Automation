import {Router} from 'express'
import {
    login,
    projectInchargeprofile,
    updateProjectIncharge,
    viewEmployees,
    addStudent,
    viewStudent,
    getStudentData,
    updateStudent,
    viewProjects,
    Projectcomment,
    getProjectData,
    search,
    getpassword,
    forgetpassword,
    projectdownload

} from './controller'
const router=new Router();

router.get('/login', login);

router.get('/projectInchargeprofile',projectInchargeprofile);

router.put('/updateProjectIncharge/:id',updateProjectIncharge);

router.get('/viewEmployees/:branch',viewEmployees);

router.post('/addStudent',addStudent);

router.get('/viewStudent',viewStudent);

router.get('/getStudentData/:id',getStudentData);

router.put('/updateStudent/:id',updateStudent);

router.get('/viewProjects',viewProjects);

router.put('/Projectcomment/:htno',Projectcomment);

router.get('/getProjectData/:id',getProjectData);

router.get('/search',search);

router.get('/getpassword/:empid',getpassword);

router.get('/forgetpassword',forgetpassword);

router.get('/projectdownload/:id',projectdownload);


export default router;