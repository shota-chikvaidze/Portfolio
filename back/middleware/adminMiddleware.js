const JWT = require('jsonwebtoken')

const adminProtect = async (req, res, next) => {
    
    const header = req.headers.authorization
    if(!token) return res.status(400).json({message: 'token not found'})

    const token = header.split(' ')[1]
    try{

        const decoded = JWT.verify(token, process.env.JWT)
        if(decoded.role !== 'admin') return res.status(403).json({message: 'forbidden'})
            
        req.admin = decoded;
        next()

    }catch(err){
        res.status(500).json({message: 'invalid token'})
    }

}

module.exports = adminProtect