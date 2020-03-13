import {Router} from 'express'
import {
    internalGuidelogin,
    internalGuideprofile,
    updateInternalGuide,
    viewStudents,
    viewProjects,
    acceptProject,
    rejectProject,
    getProjectData,
    Projectcomment,
    search,
    getpassword,
    forgetpassword,
    projectdownload

} from './controller'
const router=new Router();

router.get('/internalGuidelogin', internalGuidelogin);

router.get('/internalGuideprofile',internalGuideprofile);

router.put('/updateInternalGuide/:id',updateInternalGuide);

router.get('/viewStudents',viewStudents);

router.get('/viewProjects',viewProjects);

router.put('/acceptProject/:id',acceptProject);

router.put('/rejectProject/:id',rejectProject);

router.put('/Projectcomment/:htno',Projectcomment);

router.get('/getProjectData/:id',getProjectData);

router.get('/search',search);

router.get('/getpassword/:empid',getpassword);

router.get('/forgetpassword',forgetpassword);

router.get('/projectdownload/:id',projectdownload);

export default router;