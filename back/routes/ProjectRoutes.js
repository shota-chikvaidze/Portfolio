const express = require('express')
const projectController = require('../controllers/ProjectController')
const adminProtect = require('../middleware/adminMiddleware')
const router = express.Router()

router.post('/post-project', adminProtect, projectController.postProject)
router.post('/get-project/:id', adminProtect, projectController.getProjectsId)
router.delete('/delete-project/:id', adminProtect, projectController.deleteProject)
router.patch('/update-project/:id', adminProtect, projectController.updateProject)
router.get('/get-projects', projectController.getProjects)

module.exports = router