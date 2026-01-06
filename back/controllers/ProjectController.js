const Projects = require('../models/Projects')

exports.getProjects = async (req, res) => {
    try{

        const page = Math.max(parseInt(req.query.page) || 1, 1)
        const limit = Math.min(parseInt(req.query.limit) || 6, 50)
        const skip = (page - 1) * limit

        const totalCount = await Projects.countDocuments()

        const project = await Projects.find()
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)

        const totalPages = Math.ceil(totalCount / limit)

        res.status(200).json({
            message: 'projects received successfully',
            project,
            pagination: {
                page,
                limit,
                totalCount,
                totalPages,
                hasNextPage: page < totalPages,
                hasPrevPage: page > 1
            }
        })

    }catch(err){
        res.status(500).json({message: 'server error', error: err.message})
    }
}

exports.getProjectsId = async (req, res) => {
    try{

        const project = await Projects.findById(rqe.params.id)
        res.status(200).json({message: 'project received successfully', project})

    }catch(err){
        res.status(500).json({message: 'server error', error: err.message})
    }
}

exports.postProject = async (req, res) => {
    try{
        
        const { title, description, gitLink } = req.body

        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: 'At least one image is required' })
        }
        const imageUrls = req.files.map(file => file.path)
        
        if(!title || !description) return res.status(400).json({message: 'Title and description are required'})

        if(description.length < 10 || description.length > 500){
            return res.status(400).json({message: 'Description must be between 10 and 500 characters'})
        }

        const createProject = await Projects.create({
            title,
            description,
            image: imageUrls,
            gitLink
        })

        res.status(201).json({message: 'Project created successfully', createProject})

    }catch(err){
        console.error('[POST PROJECT ERROR]:', err)
        res.status(500).json({message: 'server error', error: err.message})
    }
}

exports.deleteProject = async (req, res) => {
    try{

        const { id } = req.params

        const delProject = await Projects.findByIdAndDelete(id)
        if(!delProject){
            return res.status(404).json({message: 'project not found'})
        }
        
        res.status(200).json({message: 'project deleted successfully', delProject})

    }catch(err){
        res.status(500).json({message: 'server error', error: err.message})
    }
}

exports.updateProject = async (req, res) => {
    try{

        const { id } = req.params
        const { title, description, gitLink } = req.body

        const updateFields = {}
        if (title !== undefined) updateFields.title = title
        if (description !== undefined) updateFields.description = description
        if (gitLink !== undefined) updateFields.gitLink = gitLink

         if (req.files && req.files.length > 0) {
            updateFields.image = req.files.map(file => file.path)
        }


        if (Object.keys(updateFields).length === 0) {
            return res.status(400).json({ message: 'at least one field required' })
        }

        const project = await Projects.findByIdAndUpdate(id, updateFields, {
            new: true,
            runValidators: true
        })

        if(!project){
            return res.status(404).json({message: 'project not found'})
        }

        res.status(200).json({message: 'project updated successfully', project})

    }catch(err){
        res.status(500).json({message: 'server error', error: err.message})
    }
}