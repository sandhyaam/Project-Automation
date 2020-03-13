import {Router} from 'express'
import {
    login,
    hodprofile,
    updateHOD,
    viewStudent,
    Projectcomment,
    getProjectData,
    search,
    getpassword,
    forgetpassword,
    projectdownload

} from './controller'
const router=new Router();

router.get('/login', login);

router.get('/hodprofile',hodprofile);

router.put('/updateHOD/:id',updateHOD);

router.get('/viewStudent',viewStudent);

router.put('/Projectcomment/:htno',Projectcomment);

router.get('/getProjectData/:id',getProjectData);

router.get('/search',search);

router.get('/getpassword/:empid',getpassword);

router.get('/forgetpassword',forgetpassword);

router.get('/projectdownload/:id',projectdownload);


export default router;