module.exports = () => {
    return `const Joi = require('@hapi/joi');

// Register validation
const registerValidation = async (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).max(255).required().email(),
        password: Joi.string().min(5).required()
    })
    let result;
    try {
        result = await schema.validateAsync(data);
    }
    catch(err) {
        result = err;
    }
    return result;
}

// Login validation
const loginValidation = async (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).max(255).required().email(),
        password: Joi.string().min(5).required()
    })
    let result;
    try {
        result = await schema.validateAsync(data);
    }
    catch(err) {
        result = err;
    }
    return result;
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
`
}