const yargs = require('yargs');
const argv = yargs
    .option('flag', {alias: 'f', string: true, default: '2020'})
    .argv;
console.log(yargs.argv);
