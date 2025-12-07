const Projects = require('../models/Projects')

exports.getProjects = async (req, res) => {
    try{

        const project = await Projects.find().sort({ createdAt: -1 })
        res.status(200).json({message: 'projects received successfully', project})

    }catch(err){
        res.status(500).json({message: 'server error', error: err.message})
    }
}


exports.postProject = async (req, res) => {
    try{
        
        const { title, description, image } = req.body
        if(!title || !description || !image) return res.status(400).json({message: 'all fields required'})

        const createProject = await Projects.create({
            title,
            description,
            image
        })

        res.status(201).json({message: 'project created successfully', createProject})

    }catch(err){
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