const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.adminLogin = async (req, res) => {
    try{

        const { email, password } = req.body
        
        if(!email || !password){
            return res.status(400).json({message: 'all fields required'})
        }
        
        const user = await User.findOne({ email })

        if(!user || user.role !== 'admin'){
            return res.status(401).json({message: 'unauthorized'})
        }

        const checkPass = await bcrypt.compare(password, user.password)
        if(!checkPass){
            return res.status(400).json({message: 'invalid password'})
        }

        const token = jwt.sign({ id: user._id, role: 'admin' }, process.env.JWT, {
            expiresIn: '1d'
        })

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 1 * 24 * 60 * 60 * 1000 
        })

        
        res.status(200).json({
            message: 'Logged in successfully!',
            user: {
              id: user._id,
              email: user.email,
              role: user.role,
            }
        })


    }catch(err){
        res.status(500).json({message: 'server error', error: err.message})
    }
}

exports.me = async (req, res) => {
    try{
        if (!req.admin) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const admin = await User.findById(req.admin.id).select('-password');

        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }

        res.status(200).json({ admin });

    }catch(err){
        res.status(500).json({message: 'server error', error: err.message})
    }
}

exports.logout = async (req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 0
        })

        res.status(200).json({ message: 'Logged out successfully' })
    } catch (err) {
        res.status(500).json({ message: 'server error', error: err.message })
    }
}