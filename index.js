#!/usr/bin/env node
const chalk = require('chalk');
const {
  generateModel,
  generateController,
  generateRoute,
  generateSeed,
  generateResource,
  generateAuth
} = require("./functions");

// Checking what command it is
const command = process.argv[2];
const type = process.argv[3];
const name = process.argv[4];

switch (command) {
  case "-g": {
    if(!type) {
        console.log(chalk.redBright("Please provide the type of the resource you want to create!"));
        break;
    }
    if(!name && type != 'auth') {
        console.log(chalk.redBright("Please provide the name for the resource you want to create!"));
        break;
    }
    switch (type) {
      case "m": {
        generateModel(name);
        break;
      }
      case "c": {
        generateController(name);
        break;
      }
      case "r": {
        generateRoute(name);
        break;
      }
      case "s": {
        generateSeed(name);
        break;
      }
      case "re": {
        generateResource(name);
        break;
      }
      case 'auth': {
        generateAuth();
        break;
      }
    }
    break;
  }
  case "-h": {
    console.log(chalk.cyanBright('Here is a list of the commands that you can use:\n'));
    console.log(chalk.cyanBright('  -g') + chalk.greenBright('\tGenerates a resource of the following types:'));
    console.log(chalk.cyanBright('\tm') + chalk.white(' - Creates a model file inside models directory. If it does not find the directory it creates it.\n\t    It includes creating the schema and the model as mongoose model. \n\t    Naming format is: Starts with an uppercase letter and the rest of the letters are lowercase.'));
    console.log(chalk.cyanBright('\tc') + chalk.white(' - Creates a controller file inside controllers directory. If it does not find the directory it creates it.\n\t    It includes creating the crud methods(getAll, getOne, create, edit, delete). \n\t    Naming format is: Starts with an uppercase letter. The name is plural and ends with Controller.'));
    console.log(chalk.cyanBright('\tr') + chalk.white(' - Creates a routes file inside routes directory. If it does not find the directory it creates it.\n\t    It includes creating the crud methods endpoints(getAll, getOne, create, edit, delete). \n\t    Naming format is: Plural lowercase of the name.'));
    console.log(chalk.cyanBright('\ts') + chalk.white(' - Creates a seeder file inside seeders directory. If it does not find the directory it creates it.\n\t    It includes clearing the database of the existing data and creating the boilerplate for seeding new data. \n\t    Naming format is: Plural lowercase of the name ending with Seeder.'));
    console.log(chalk.cyanBright('\tre') + chalk.white(' - Creates all the files for that entity(model, controller, routes).\n\t    It includes creating the files in the correct order and populating them as above. \n\t    Naming format is: See above for the specific resource type.\n'));
    console.log(chalk.cyanBright('\tauth') + chalk.white(' - Creates all the files the authentication.\n\t    It includes creating the model, controller, routes and a middleware for protecting routes. \n\t    Naming format is: See above for the specific resource type.\n'));
    console.log(chalk.cyanBright('Example for creating a model file: \t\t') + chalk.white('koleg -g m book') + chalk.green('\t\tCreates Book.js inside models folder.'));
    console.log(chalk.cyanBright('Example for creating a controller file: \t') + chalk.white('koleg -g c book') + chalk.green('\t\tCreates BooksController.js inside controllers folder.'));
    console.log(chalk.cyanBright('Example for creating a route file: \t\t') + chalk.white('koleg -g r book') + chalk.green('\t\tCreates books.js inside routes folder.'));
    console.log(chalk.cyanBright('Example for creating a seeder file: \t\t') + chalk.white('koleg -g s book') + chalk.green('\t\tCreates booksSeeder.js inside seeders folder.'));
    console.log(chalk.cyanBright('Example for creating a resource file: \t\t') + chalk.white('koleg -g re book') + chalk.green('\tCreates all of the above except seeder in their correct order.'));
    console.log(chalk.cyanBright('Example for generating auth: \t\t\t') + chalk.white('koleg -g auth') + chalk.green('\t\tSee auth description.'));
    break;
  }
  default: {
    console.log(
        chalk.redBright("That command is not available, try the following: \n") +
        chalk.whiteBright("  -g -> Generating command\n") +
        chalk.whiteBright("  -h -> Help command")
    );
  }
}
