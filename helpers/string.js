const string = {
    firstUppercase: (name) => {
        return `${name[0].toUpperCase()}${name.substring(1).toLowerCase()}`;
    },
    lowercase: (name) => {
        return `${name.toLowerCase()}`;
    },
    lowercaseMult: (name) => {
        let nameLowercaseMult;
        if(string.lowercase(name).endsWith('y')) {
            nameLowercaseMult = string.lowercase(name).slice(0, -1) + 'ies';
4        } else {
            nameLowercaseMult = `${string.lowercase(name)}s`;
        }
        return nameLowercaseMult;
    },
    firstUppercaseMult: (name) => {
        return `${string.lowercaseMult(name)[0].toUpperCase()}${string.lowercaseMult(name).substring(1)}`;
    }
}

module.exports = string;