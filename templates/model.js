module.exports = (name) => {
    const nameFormatted = `${name[0].toUpperCase()}${name.substring(1).toLowerCase()}`;
    return `const mongoose = require('mongoose');

const ${nameFormatted}Schema = new mongoose.Schema({
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('${nameFormatted}', ${nameFormatted}Schema);
    `
}