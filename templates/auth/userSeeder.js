module.exports = () => {
  return `const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });
const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Database connection
mongoose.connect(process.env.DB_STRING, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

User.collection.drop();

const createPassword = async () => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash("admin", salt);
};

createPassword().then((password) => {
  const admin = {
    name: "Admin",
    email: "admin@admin.com",
    password: password,
  };
  User.create(admin)
    .then((admin) => console.log("Seeded admins!"))
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      mongoose.connection.close();
    });
});
`
}