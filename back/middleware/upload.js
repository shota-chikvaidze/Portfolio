const multer = require('multer')
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const cloudinary = require('../config/cloudinary')

const IMAGE_MIMES = ['image/jpeg', 'image/jpg', 'image/webp', 'image/png']

const sanitizeFilename = (filename) => {
    return filename
        .replace(/\s+/g, '-')
        .replace(/[^\w\-\.]/g, '')
        .toLowerCase()
        .substring(0, 100)
}

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'portfolio_projects',
        format: 'webp', 
        public_id: (req, file) => {
            const sanitized = sanitizeFilename(file.originalname)
            return `${Date.now()}-${sanitized}`
        },
        transformation: [
            { 
                width: 1600, 
                height: 1200, 
                crop: 'limit',
                quality: 'auto:good',
                fetch_format: 'auto' 
            }
        ],
        tags: ['portfolio', 'project'] 
    }
})

const fileFilter = (req, file, cb) => {
    if (!IMAGE_MIMES.includes(file.mimetype)) {
        console.warn(`[UPLOAD REJECT] Invalid type: ${file.mimetype} from ${req.user?.email || 'unknown'}`)
        return cb(new Error(`Only image files are allowed (JPG, PNG, WebP)`), false)
    }
    cb(null, true)
}

const uploadSingle = multer({
    storage,
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 }
}).single('image')

const uploadMultiple = multer({
    storage,
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 }
}).array('images', 5)


const handleSingleUpload = (req, res, next) => {
    uploadSingle(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            if (err.code === 'LIMIT_FILE_SIZE') {
                return res.status(400).json({ message: 'File too large. Maximum size is 5MB.' })
            }
            return res.status(400).json({ message: `Upload error: ${err.message}` })
        } else if (err) {
            return res.status(400).json({ message: err.message })
        }
        next()
    })
}

const handleMultipleUpload = (req, res, next) => {
    
    uploadMultiple(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            if (err.code === 'LIMIT_FILE_SIZE') {
                return res.status(400).json({ message: 'One or more files are too large. Maximum size is 5MB per file.' })
            }
            if (err.code === 'LIMIT_FILE_COUNT') {
                return res.status(400).json({ message: 'Too many files. Maximum is 5 images.' })
            }
            return res.status(400).json({ message: `Upload error: ${err.message}` })
        } else if (err) {
            return res.status(400).json({ message: err.message })
        }
        
        if (req.files) {
            req.files.forEach((file, i) => {
                console.log(`[FILE ${i}] Name: ${file.originalname}, Path: ${file.path}, Size: ${file.size}`)
            })
        }
        
        next()
    })
}

const deleteImage = async (imageUrl) => {
    try {
        const urlParts = imageUrl.split('/')
        const filename = urlParts[urlParts.length - 1]
        const publicId = `portfolio_projects/${filename.split('.')[0]}`
        
        const result = await cloudinary.uploader.destroy(publicId)
        return result
    } catch (error) {
        throw error
    }
}

const deleteMultipleImages = async (imageUrls) => {
    try {
        const deletePromises = imageUrls.map(url => deleteImage(url))
        const results = await Promise.allSettled(deletePromises)
        
        const successful = results.filter(r => r.status === 'fulfilled').length
        const failed = results.filter(r => r.status === 'rejected').length
        
        return { successful, failed, results }
    } catch (error) {
        throw error
    }
}

module.exports = {
    uploadSingle: handleSingleUpload,
    uploadMultiple: handleMultipleUpload,
    deleteImage,
    deleteMultipleImages
}
