const yargs =require('yargs');
const argv = yargs
.command(['sum <op1> [op2]', 's'], 'Sums two numbers', {
    greet: {
        alias: 'g',
        default: 'User',
        string: 'true'

    }
}, (yargs) => {
    console.log(`Hello, ${yargs.greet}, your result is ${yargs.op1 + yargs.op2}`);
})
.argv;