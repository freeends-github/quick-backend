#!/usr/bin/env node
const chalk = require('chalk');
const {
  generateModel,
  generateController,
  generateRoute,
  generateSeed,
  generateMiddleware,
  generateResource,
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
    if(!name) {
        console.log(chalk.redBright("Please provide the name for the resource you want to create!"));
        break;
    }
    switch (type) {
      case "model": {
        generateModel(name);
        break;
      }
      case "controller": {
        generateController(name);
        break;
      }
      case "route": {
        generateRoute(name);
        break;
      }
      case "seed": {
        generateSeed(name);
        break;
      }
      case "middleware": {
        generateMiddleware(name);
        break;
      }
      case "resource": {
        generateResource(name);
        break;
      }
    }
    break;
  }
  default: {
    console.log(
        chalk.redBright("That command is not available, try the following: \n") +
        chalk.whiteBright("  -g")
    );
  }
}
