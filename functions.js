const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

// Templates
const model = require('./templates/model');

generator = {
    generateModel(name) {
        console.log(chalk.greenBright('Generating model: ') + chalk.yellowBright(`${name[0].toUpperCase()}${name.substring(1)}.js`));  
        if(fs.existsSync(path.join(process.cwd(), 'models'))) {
            fs.writeFile(`./models/${name[0].toUpperCase()}${name.substring(1)}.js`, model(name), (err) => {
                if(err) throw new Error(err);
                console.log(chalk.greenBright('Model: ') + chalk.yellowBright(`${name[0].toUpperCase()}${name.substring(1).toLowerCase()}.js`) + chalk.greenBright(' generated.'));
            })
        } else {
            fs.mkdirSync('./models');
            fs.writeFile(`./models/${name[0].toUpperCase()}${name.substring(1)}.js`, model(name), (err) => {
                if(err) throw new Error(err);
                console.log(chalk.greenBright('Model: ') + chalk.yellowBright(`${name[0].toUpperCase()}${name.substring(1).toLowerCase()}.js`) + chalk.greenBright(' generated.'));
            })
        }
    },
    generateController(name) {
        console.log(chalk.greenBright('Generating controller: ') + chalk.yellowBright(`${name[0].toUpperCase()}${name.substring(1)}sController.js`));
    },
    generateRoute(name) {
        console.log(chalk.greenBright('Generating route files: ') + chalk.yellowBright(`${name.toLowerCase()}s.js`));
    },
    generateSeed(name) {
        console.log(chalk.greenBright('Generating seed file: ') + chalk.yellowBright(`${name.toLowerCase()}sSeeder.js`));
    },
    generateMiddleware(name) {
        console.log(chalk.greenBright('Generating middleware: ') + chalk.yellowBright(`${name.toLowerCase()}.js`));
    },
    generateResource(name) {
        console.log(chalk.greenBright('Generating resource(model, controller, route):'));
        generator.generateModel(name);
        generator.generateController(name);
        generator.generateRoute(name);
    }
}

module.exports = generator;