const pluralize = require('pluralize');

const string = {
    firstUppercase: (name) => {
        return `${name[0].toUpperCase()}${name.substring(1).toLowerCase()}`;
    },
    lowercase: (name) => {
        return `${name.toLowerCase()}`;
    },
    lowercaseMult: (name) => {
        return pluralize.plural(name).toLowerCase();
    },
    firstUppercaseMult: (name) => {
        return `${string.lowercaseMult(name)[0].toUpperCase()}${string.lowercaseMult(name).substring(1)}`;
    }
}

module.exports = string;