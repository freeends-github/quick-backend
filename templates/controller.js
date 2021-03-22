const string = require('../helpers/string');

module.exports = (name) => {
    return `const ${string.firstUppercase(name)} = require('../models/${string.firstUppercase(name)}');

module.exports = {
    getAll: async (req, res, next) => {
        try {
            const ${string.lowercaseMult(name)} = await ${string.firstUppercase(name)}.find();
            res.status(200).json({
                message: "${string.firstUppercaseMult(name)} retrivied successfully!",
                ${string.lowercaseMult(name)}: ${string.lowercaseMult(name)}
            });
        }
        catch(err) {
            next(err);
        }
    },
    create: async (req, res, next) => {
        const ${string.lowercase(name)} = new ${string.firstUppercase(name)}(req.body);
        try {
            const saved_${string.lowercase(name)} = await ${string.lowercase(name)}.save();
            res.status(200).json({
                message: "${string.firstUppercase(name)} added successfully!",
                ${string.lowercase(name)}: saved_${string.lowercase(name)}
            });
        } 
        catch(err) {
            next(err);
        }
    },
    getOne: async (req, res, next) => {
        try {
            const ${string.lowercase(name)} = await ${string.firstUppercase(name)}.findById(req.params.id);
            res.status(200).json({
                message: "${string.firstUppercase(name)} retrivied successfully!",
                ${string.lowercase(name)}: ${string.lowercase(name)}
            });
        } catch(err) {
            next(err);
        }
    },
    edit: async (req, res, next) => {
        try {
            const updated_${string.lowercase(name)} = await ${string.firstUppercase(name)}.updateOne({_id: req.params.id}, req.body);
            res.status(200).json({
                message: "${string.firstUppercase(name)} updated successfully!",
                ${string.lowercase(name)}: updated_${string.lowercase(name)}
            });
        }
        catch(err) {
            next(err);
        }
    },
    delete: async (req, res, next) => {
        try {
            await ${string.firstUppercase(name)}.deleteOne({_id: req.params.id});
            res.status(200).json({
                message: "${string.firstUppercase(name)} deleted successfully!"
            });
        }
        catch(err) {
            next(err);
        }
    }
}    
`
}
