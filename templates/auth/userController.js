module.exports = () => {
    return `const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/User');

const { registerValidation, loginValidation } = require('../validation/validation');

module.exports = {
    registerUser: async (req, res) => {

        const { details } = registerValidation(req.body);
        if(details) {
            return res.status(400).json({
                message: details[0].message
            });
        }
    
        const emailExist = await User.findOne({ email: req.body.email });
        if(emailExist) {
            return res.status(400).json({
                message: "Email already exists!"
            });
        }
    
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;
        const user = new User(req.body);
        try {
            const savedUser = await user.save();
            res.json({
                user: savedUser
            });
        } catch(err) {
            res.status(400).json({
                message: err
            });
        }
    },
    loginUser: async (req,res) => {

        const { details } = await loginValidation(req.body);
        if(details) {
            return res.status(400).json({
                message: details[0].message
            })
        }
    
        const user = await User.findOne({ email: req.body.email });
        if(!user) {
            return res.status(400).json({
                message: "Incorrect email address"
            });
        }
    
        const validPass = await bcrypt.compare(req.body.password, user.password);
        if(!validPass) {
            return res.status(400).json({
                message: 'Invalid password'
            })
        }
    
        // Create token and assign
        const token = jwt.sign( { _id: user._id }, "secret" );
        user.password = undefined;
        res.header('auth-token', token).json({
            message: "Logged in",
            token: token,
            user
        });
    }
}
`
}