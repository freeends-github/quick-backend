const string = require('../helpers/string');

module.exports = (name) => {
    return `const mongoose = require('mongoose');

const ${string.firstUppercase(name)}Schema = new mongoose.Schema({
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('${string.firstUppercase(name)}', ${string.firstUppercase(name)}Schema);
    `
}