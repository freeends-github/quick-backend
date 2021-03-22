const string = require('../helpers/string');

module.exports = (name) => {
    return `const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });
const ${string.firstUppercase(name)} = require("../models/${string.firstUppercase(name)}");
// Database connection
mongoose.connect(process.env.DB_STRING, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
});

${string.firstUppercase(name)}.collection.drop();

const ${string.lowercaseMult(name)} = [
    {
    }
]

Venue.create(${string.lowercaseMult(name)})
    .then((${string.lowercaseMult(name)}) => console.log("Seeded ${string.lowercaseMult(name)}!"))
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        mongoose.connection.close();
    });
`
}



