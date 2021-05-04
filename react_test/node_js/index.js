const fs = require('fs');

fs.appendFile('./logs.txt', 'New action has been performed\n', (err) => {
    if (err) {
        console.error(err);
    }
    console.log('New line has been added to file');
});