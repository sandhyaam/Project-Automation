import { Router } from 'express'

import admin from './Admin'
import hod from './HOD'
import projectincharge from './ProjectIncharge'
import internalguide from './InternalGuide'
import student from './Student'

const router = new Router()

router.use('/admin', admin)
router.use('/hod',hod)
router.use('/projectincharge',projectincharge)
router.use('/internalguide',internalguide)
router.use('/student',student)


export default router