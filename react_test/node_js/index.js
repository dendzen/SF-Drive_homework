const yargs = require('yargs');
const fs = require('fs/promises');
const path = require('path');

const argv = yargs
    .command(['cretae <filename> [content]', 'c'], 'Cretae a new file and write passed content to it', {}, (argv) => {
        const filepath = path.resolve(argv.filename);
        const defaultContent = 'Default Content';
        fs.writeFile(filepath, argv.content || defaultContent)
            .then(() => console.log('Your data saved'))
            .catch(e => console.error('An Error', e));
    })
    .argv;


