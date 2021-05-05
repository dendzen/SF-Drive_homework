const yargs = require('yargs');
const fs = require('fs');
const fsPro = require('fs/promises');
const path = require('path');
const argv = yargs
    .command(['create <filename>', 'c'], 'Cretae a new file and write passed content to it', {}, (argv) => {

        const tempfile = './teamplate_react.js';
        const tempcode = fs.readFileSync(tempfile);
        const filepath = path.resolve(argv.filename);
        const empyContent = 'Empy teamplate file';
        if (argv.filename === tempfile) {
            console.log('Error. Сhange the file name!');
        } else {
            fsPro.writeFile(filepath, tempcode || empyContent)
                .then(() => console.log('Your teamplate created '))
                .catch(e => console.error('An Error', e));

            if (argv.verbose) {
                console.info(fs.readFileSync(tempfile, "utf8"))
            }
        }
    }
)
    .option('verbose', {
        alias: 'v',дд
        type: 'boolean',
        description: 'Run with verbose logging'
    })
.argv;
