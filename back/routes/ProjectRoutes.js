const express = require('express')
const projectController = require('../controllers/ProjectController')
const adminProtect = require('../middleware/adminMiddleware')
const router = express.Router()
const { uploadSingle, uploadMultiple } = require('../middleware/upload')


router.post('/post-project', adminProtect, uploadMultiple, projectController.postProject);
router.post('/post-project-single', adminProtect, uploadSingle, projectController.postProject);

router.get('/get-project/:id', adminProtect, projectController.getProjectsId)
router.delete('/delete-project/:id', adminProtect, projectController.deleteProject)
router.patch('/update-project/:id', adminProtect, uploadMultiple, projectController.updateProject)
router.get('/get-projects', projectController.getProjects)

module.exports = router