const fs = require('fs');
fs.readFile('./logs.txt', (err, data) => {
    if (err) {
        console.error(err);
    }
    // По умолчанию данные считываются в буфер, для перевода в строку используется метод Buffer.toString()
    console.log(data.toString());
});
