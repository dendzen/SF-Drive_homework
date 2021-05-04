const chalk = require('chalk');
console.log(chalk.red('Hello Chalk'))
const warning = chalk.yellow.bold;
const customColor = chalk.hex('#E3E4E5')
console.log(warning('Warning'));
console.log(customColor('Custom Color'))