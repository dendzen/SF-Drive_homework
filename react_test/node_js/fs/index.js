const fs = require('fs');
fs.readFile('./logs.txt', (err, data) => {
    if (err) {
        console.error(err);
    }
    // По умолчанию данные считываются в буфер, для перевода в строку используется метод Buffer.toString()
    console.log(data.toString());
});

fs.readFile('./sample.txt', { encoding: 'utf-8' }, (err, data) => {
    if (err) {
        console.error(err);
    }
    // Передача дополнительной опции, указывающей кодировку, позволяет сразу вывести данные в виде строки
    console.log(data);
});

fs.appendFile('./logs.txt', 'New action has been performed\n', (err) => {
    if (err) {
        console.error(err);
    }
    console.log('New line has been added to file');
});