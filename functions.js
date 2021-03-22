const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const string = require('./helpers/string');

// Templates
const model = require('./templates/model');
const controller = require('./templates/controller');
const route = require('./templates/routes');
const seeder = require('./templates/seeder');

generator = {
    generateModel(name) {
        console.log(chalk.greenBright('Generating model: ') + chalk.yellowBright(`${string.firstUppercase(name)}.js`));  
        if(fs.existsSync(path.join(process.cwd(), 'models'))) {
            fs.writeFile(`./models/${string.firstUppercase(name)}.js`, model(name), (err) => {
                if(err) throw new Error(err);
                console.log(chalk.greenBright('Model: ') + chalk.yellowBright(`${string.firstUppercase(name)}.js`) + chalk.greenBright(' generated.'));
            });
        } else {
            fs.mkdirSync('./models');
            fs.writeFile(`./models/${string.firstUppercase(name)}.js`, model(name), (err) => {
                if(err) throw new Error(err);
                console.log(chalk.greenBright('Model: ') + chalk.yellowBright(`${string.firstUppercase(name)}.js`) + chalk.greenBright(' generated.'));
            });
        }
    },
    generateController(name) {
        console.log(chalk.greenBright('Generating controller: ') + chalk.yellowBright(`${string.firstUppercaseMult(name)}Controller.js`));
        if(!fs.existsSync(path.join(process.cwd(), `models/${string.firstUppercase(name)}.js`))) {
            console.log(chalk.redBright('Model file does not exist. Please create that first!'));
            return;
        }
        if(fs.existsSync(path.join(process.cwd(), 'controllers'))) {
            fs.writeFile(`./controllers/${string.firstUppercaseMult(name)}Controller.js`, controller(name), (err) => {
                if(err) throw new Error(err);
                console.log(chalk.greenBright('Controller: ') + chalk.yellowBright(`${string.firstUppercaseMult(name)}Controller.js`) + chalk.greenBright(' generated.'));
            });
        } else {
            fs.mkdirSync('./controllers');
            fs.writeFile(`./controllers/${string.firstUppercaseMult(name)}Controller.js`, controller(name), (err) => {
                if(err) throw new Error(err);
                console.log(chalk.greenBright('Controller: ') + chalk.yellowBright(`${string.firstUppercaseMult(name)}Controller.js`) + chalk.greenBright(' generated.'));
            });
        }
    },
    generateRoute(name) {
        console.log(chalk.greenBright('Generating route files: ') + chalk.yellowBright(`${string.lowercaseMult(name)}.js`));
        if(!fs.existsSync(path.join(process.cwd(), `controllers/${string.firstUppercaseMult(name)}Controller.js`))) {
            console.log(chalk.redBright('Controller file does not exist. Please create that first!'));
            return;
        }
        if(fs.existsSync(path.join(process.cwd(), 'routes'))) {
            fs.writeFile(`./routes/${string.lowercaseMult(name)}.js`, route(name), (err) => {
                if(err) throw new Error(err);
                console.log(chalk.greenBright('Routes: ') + chalk.yellowBright(`${string.lowercaseMult(name)}.js`) + chalk.greenBright(' generated.'));
            });
        } else {
            fs.mkdirSync('./routes');
            fs.writeFile(`./routes/${string.lowercaseMult(name)}.js`, route(name), (err) => {
                if(err) throw new Error(err);
                console.log(chalk.greenBright('Routes: ') + chalk.yellowBright(`${string.lowercaseMult(name)}.js`) + chalk.greenBright(' generated.'));
            });
        }
    },
    generateSeed(name) {
        console.log(chalk.greenBright('Generating seed file: ') + chalk.yellowBright(`${string.lowercaseMult(name)}Seeder.js`));
        if(!fs.existsSync(path.join(process.cwd(), `models/${string.firstUppercase(name)}.js`))) {
            console.log(chalk.redBright('Model file does not exist. Please create that first!'));
            return;
        }
        if(fs.existsSync(path.join(process.cwd(), 'seeders'))) {
            fs.writeFile(`./seeders/${string.lowercaseMult(name)}Seeder.js`, seeder(name), (err) => {
                if(err) throw new Error(err);
                console.log(chalk.greenBright('Seeder: ') + chalk.yellowBright(`${string.lowercaseMult(name)}Seeder.js`) + chalk.greenBright(' generated.'));
            });
        } else {
            fs.mkdirSync('./seeders');
            fs.writeFile(`./seeders/${string.lowercaseMult(name)}Seeder.js`, seeder(name), (err) => {
                if(err) throw new Error(err);
                console.log(chalk.greenBright('Seeder: ') + chalk.yellowBright(`${string.lowercaseMult(name)}Seeder.js`) + chalk.greenBright(' generated.'));
            });
        }
    },
    generateResource(name) {
        console.log(chalk.greenBright('Generating resource(model, controller, route):'));
        generator.generateModel(name);
        generator.generateController(name);
        generator.generateRoute(name);
    }
}

module.exports = generator;