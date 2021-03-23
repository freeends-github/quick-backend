module.exports = () => {
    return `const router = require('express').Router();

const UsersController = require('../controllers/UsersController');

// Register
router.post('/register', UsersController.registerUser);

// Login
router.post('/login', UsersController.loginUser);

module.exports = router;
    
`
}