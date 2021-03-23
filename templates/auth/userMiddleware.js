module.exports = () => {
    return `const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {

    const token = req.header('auth-token');

    if(!token) {
        return res.status(401).json({
            message: "Access Denied"
        });
    }

    try {
        // Provide a secret from .env file.
        const secret = process.env.TOKEN_SECRET || "secret";
        const verified = jwt.verify(token, secret);
        req.user = verified;
        next();
    } catch(err) {
        res.status(400).json({
            message: err
        });
    }
}
`
}