import {Router} from 'express'
import {
    studentlogin,
    studentprofile,
    viewComments,
    updateStudent,
    uploadProject,
    getpassword,
    forgetpassword,
    projectdownload

} from './controller'
const router=new Router();

router.get('/studentlogin', studentlogin);

router.get('/studentprofile', studentprofile);

router.get('/viewComments', viewComments);

router.put('/updateStudent/:id', updateStudent);

router.post('/uploadProject',uploadProject);

router.put('/getpassword/:htno',getpassword);

router.get('/forgetpassword',forgetpassword);

router.get('/projectdownload/:id',projectdownload);

export default router;