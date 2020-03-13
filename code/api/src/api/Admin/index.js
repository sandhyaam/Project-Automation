import {Router} from 'express'
import {
    login,
    adminviewStudent,
    addEmployees,
    viewEmployee,
    getEmployeeData,
    UpdateEmployeeData,
    deleteEmployee,
    Employeedownload

} from './controller'
const router=new Router();

router.get('/', login);

router.get('/adminviewStudent', adminviewStudent);

router.post('/addEmployees',addEmployees);

router.get('/viewEmployee', viewEmployee);

router.get('/getEmployeeData/:id', getEmployeeData);

router.put('/UpdateEmployeeData/:id', UpdateEmployeeData);

router.delete('/deleteEmployee/:id', deleteEmployee);

router.get('/Employeedownload/:id', Employeedownload);

export default router;